import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * A no-op Supabase client used when the Supabase env vars are not set.
 *
 * Auth and favorites become inert (no session, empty data, benign errors) so the
 * app still runs locally and in CI/previews without credentials, instead of
 * throwing at startup. The real client is used whenever the env vars are present.
 */
export function createNullClient(): SupabaseClient {
  const noop = {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
      signInWithOAuth: async () => ({
        data: { provider: null, url: null },
        error: new Error("Supabase not configured"),
      }),
      signInWithPassword: async () => ({
        data: { user: null, session: null },
        error: new Error("Supabase not configured"),
      }),
      signUp: async () => ({
        data: { user: null, session: null },
        error: new Error("Supabase not configured"),
      }),
      signOut: async () => ({ error: null }),
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: () => {} } },
      }),
    },
    from: () => ({
      select: () => ({
        eq: async () => ({ data: [], error: null }),
        order: () => ({ limit: async () => ({ data: [], error: null }) }),
      }),
      insert: async () => ({ data: null, error: new Error("Supabase not configured") }),
      delete: () => ({ eq: async () => ({ error: null }) }),
    }),
  };

  return noop as unknown as SupabaseClient;
}
