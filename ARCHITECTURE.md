# Architecture

This document explains why the AgentDepot codebase is organized the way it is. It is meant to be read alongside the README.

## Overview

AgentDepot is a Next.js application that serves a curated directory of AI coding tools. The codebase is split across two repositories:

* `agent-depot` (this repo): the web application.
* `agentdepot-agents`: the catalog data, maintained as TypeScript modules with a shared schema.

At build time, `scripts/sync-agents.sh` copies the catalog from the data repo into `src/data/`. The application reads the catalog from there, and pages are statically generated.

The rest of this document explains the non-obvious choices implied by that summary.

## The catalog is data, not a database

The catalog lives in `src/data/` as TypeScript modules. There is no catalog database, no CMS, and no admin UI.

This was an early choice driven by scale. The catalog is curated, every entry passes through human review before it goes live, and updates land on a human timescale. At 85 entries, a database would have added operational overhead (migrations, hosting, a contribution surface to build from scratch) without solving a problem the project had.

Trade-offs:

* The catalog cannot mutate at runtime. Adding or editing a tool requires a rebuild.
* Search and filtering work on data shipped to the client (see below).
* Updates are ordinary diffs, which makes review and history straightforward.

For a curated directory on a human timescale, runtime immutability is the intent of the design.

## The catalog lives in its own repository

Catalog data is maintained in a separate repository, `agentdepot-agents`. Each tool definition is one entry in `agents/<tool>.ts`. Contributions arrive as PRs against that repo.

### History

The split originally existed for a different reason than the one that currently justifies it. The catalog repository was public from the start so contributions could be open. The application repository was private during early development. When the application repository was later made public, merging the two was considered but kept separate.

### Current rationale

The split reduces contributor friction:

* The contribution surface is a TypeScript file with a documented schema. Contributors do not need to clone the application, install its dependencies, or know that it is a Next.js project.
* The application repository stays focused on application code. The catalog repository stays focused on catalog data.

The cost is the sync step (`scripts/sync-agents.sh`) and a release discipline: pull the latest catalog, rebuild, redeploy.

## Validation is the type system

Each catalog entry is typed against the `Agent` schema in `types/agent.ts` (within the catalog repo). CI compiles every PR against that schema:

* Missing required fields fail the type check.
* Invalid enum values for `tool`, `type`, and `category` fail the type check.
* Duplicate `id` values are detected by a separate validation script.

Manual review is reserved for the questions the type system cannot answer: is the tool real, is it free, does it solve a useful problem.

## URL state and client-side search

Filter state (search query, tool filter, type filter) is encoded in URL query parameters. Any filtered view (`/?q=react&tool=cursor&type=rule`) is shareable and reloadable, with no server round-trip.

Search runs in the browser. The catalog is indexed with Fuse.js after the bundle loads. This is comfortable at the current catalog size.

These choices follow the same principle as the database decision: keep state and computation in the simplest location for the current scale.

## Scaling triggers

The choices above have known limits. The triggers for changing each:

* **Search.** When the catalog approaches the low thousands of entries, the Fuse.js index becomes expensive to ship and parse in the browser. Search moves server-side. The data shape does not change.
* **Contributions.** When PR throughput becomes the bottleneck for catalog growth, a thin admin surface for trusted contributors goes on top of the same TypeScript schema. Storage stays as it is.
* **User-generated content.** Per-user data beyond simple favorites (collections, ratings, comments) lives in a real database once it is introduced. The curated catalog stays where it is.

The data shape and the repository split are chosen so each of these migrations is local, not a rewrite.
