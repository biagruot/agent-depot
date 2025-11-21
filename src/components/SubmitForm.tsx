"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Box, Terminal, Link as LinkIcon, User } from "lucide-react";

const inputClasses = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200 backdrop-blur-sm";
const labelClasses = "block text-sm font-medium text-gray-400 mb-2 ml-1";
const sectionHeaderClasses = "text-xl font-semibold text-white mb-6 flex items-center gap-2";

interface FormData {
  agentName: string;
  description: string;
  fullDescription: string;
  githubUrl: string;
  tool: string;
  category: string;
  installationType: string;
  installationCommand: string;
  installationInstructions: string;
  tags: string;
  authorName: string;
  authorGithub: string;
  authorTwitter: string;
}

export function SubmitForm() {
  const [formData, setFormData] = useState<FormData>({
    agentName: "",
    description: "",
    fullDescription: "",
    githubUrl: "",
    tool: "",
    category: "",
    installationType: "manual",
    installationCommand: "",
    installationInstructions: "",
    tags: "",
    authorName: "",
    authorGithub: "",
    authorTwitter: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Validate required fields
    if (!formData.agentName || !formData.description || !formData.tool || !formData.category || !formData.authorName) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Agent Submission: ${formData.agentName}`);
      const body = encodeURIComponent(`
Agent Submission
================

AGENT DETAILS
-------------
Name: ${formData.agentName}
Tool: ${formData.tool}
Category: ${formData.category}
Description: ${formData.description}

${formData.fullDescription ? `Full Description:\n${formData.fullDescription}\n\n` : ''}

INSTALLATION
------------
Type: ${formData.installationType}
${formData.installationCommand ? `Command: ${formData.installationCommand}\n` : ''}
${formData.installationInstructions ? `Instructions: ${formData.installationInstructions}\n` : ''}

LINKS
-----
${formData.githubUrl ? `GitHub: ${formData.githubUrl}\n` : ''}

METADATA
--------
Tags: ${formData.tags}

AUTHOR
------
Name: ${formData.authorName}
${formData.authorGithub ? `GitHub: ${formData.authorGithub}\n` : ''}
${formData.authorTwitter ? `Twitter: ${formData.authorTwitter}\n` : ''}

---
Submitted via AgentDepot.directory
      `);

      window.location.href = `mailto:submit@agentdepot.dev?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to prepare submission. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-gray-400 mb-8">
          Your email client should have opened with the submission details. 
          Please send the email to complete your submission.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          We review all submissions within 2-3 business days.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              agentName: "",
              description: "",
              fullDescription: "",
              githubUrl: "",
              tool: "",
              category: "",
              installationType: "manual",
              installationCommand: "",
              installationInstructions: "",
              tags: "",
              authorName: "",
              authorGithub: "",
              authorTwitter: "",
            });
          }}
          className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
        >
          Submit Another Agent
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
      {status === "error" && errorMessage && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      {/* Agent Details */}
      <div className="glass-panel rounded-3xl p-8 border border-white/10">
        <h2 className={sectionHeaderClasses}>
          <Box className="w-5 h-5 text-blue-400" />
          Agent Details
        </h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="agentName" className={labelClasses}>
              Agent Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="agentName"
              name="agentName"
              required
              value={formData.agentName}
              onChange={handleChange}
              className={inputClasses}
              placeholder="e.g., React Pro Agent"
            />
          </div>

          <div>
            <label htmlFor="description" className={labelClasses}>
              Short Description <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Brief one-line description (max 150 characters)"
              maxLength={150}
            />
          </div>

          <div>
            <label htmlFor="fullDescription" className={labelClasses}>
              Full Description (Markdown supported)
            </label>
            <textarea
              id="fullDescription"
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              rows={6}
              className={`${inputClasses} resize-none`}
              placeholder="Detailed description with features, usage examples, etc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tool" className={labelClasses}>
                Tool <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <select
                  id="tool"
                  name="tool"
                  required
                  value={formData.tool}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none`}
                >
                  <option value="" className="bg-gray-900">Select a tool...</option>
                  <option value="claude" className="bg-gray-900">Claude Code</option>
                  <option value="windsurf" className="bg-gray-900">Windsurf</option>
                  <option value="cursor" className="bg-gray-900">Cursor</option>
                  <option value="replit" className="bg-gray-900">Replit</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  ▼
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="category" className={labelClasses}>
                Category <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none`}
                >
                  <option value="" className="bg-gray-900">Select a category...</option>
                  <option value="coding" className="bg-gray-900">Coding</option>
                  <option value="debugging" className="bg-gray-900">Debugging</option>
                  <option value="testing" className="bg-gray-900">Testing</option>
                  <option value="productivity" className="bg-gray-900">Productivity</option>
                  <option value="data" className="bg-gray-900">Data</option>
                  <option value="web" className="bg-gray-900">Web</option>
                  <option value="other" className="bg-gray-900">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  ▼
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="tags" className={labelClasses}>
              Tags (comma-separated)
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className={inputClasses}
              placeholder="e.g., react, typescript, hooks"
            />
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="glass-panel rounded-3xl p-8 border border-white/10">
        <h2 className={sectionHeaderClasses}>
          <Terminal className="w-5 h-5 text-purple-400" />
          Installation
        </h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="installationType" className={labelClasses}>
              Installation Type
            </label>
            <div className="relative">
              <select
                id="installationType"
                name="installationType"
                value={formData.installationType}
                onChange={handleChange}
                className={`${inputClasses} appearance-none`}
              >
                <option value="manual" className="bg-gray-900">Manual</option>
                <option value="npm" className="bg-gray-900">NPM</option>
                <option value="git" className="bg-gray-900">Git</option>
                <option value="extension" className="bg-gray-900">Extension</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="installationCommand" className={labelClasses}>
              Installation Command
            </label>
            <input
              type="text"
              id="installationCommand"
              name="installationCommand"
              value={formData.installationCommand}
              onChange={handleChange}
              className={`${inputClasses} font-mono text-sm`}
              placeholder="e.g., /plugin install my-agent or npm install my-agent"
            />
          </div>

          <div>
            <label htmlFor="installationInstructions" className={labelClasses}>
              Installation Instructions
            </label>
            <textarea
              id="installationInstructions"
              name="installationInstructions"
              value={formData.installationInstructions}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses} resize-none`}
              placeholder="Step-by-step installation instructions..."
            />
          </div>
        </div>
      </div>

      {/* Links & Author */}
      <div className="glass-panel rounded-3xl p-8 border border-white/10">
        <h2 className={sectionHeaderClasses}>
          <User className="w-5 h-5 text-pink-400" />
          Links & Author Info
        </h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="githubUrl" className={labelClasses}>
              GitHub URL
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className={inputClasses}
              placeholder="https://github.com/username/repo"
            />
          </div>

          <div>
            <label htmlFor="authorName" className={labelClasses}>
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              required
              value={formData.authorName}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Your name or username"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="authorGithub" className={labelClasses}>
                Your GitHub
              </label>
              <input
                type="url"
                id="authorGithub"
                name="authorGithub"
                value={formData.authorGithub}
                onChange={handleChange}
                className={inputClasses}
                placeholder="https://github.com/username"
              />
            </div>

            <div>
              <label htmlFor="authorTwitter" className={labelClasses}>
                Your Twitter/X
              </label>
              <input
                type="text"
                id="authorTwitter"
                name="authorTwitter"
                value={formData.authorTwitter}
                onChange={handleChange}
                className={inputClasses}
                placeholder="@username"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold text-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
        >
          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          {status === "loading" ? "Preparing..." : "Submit Agent"}
        </button>
      </div>
    </form>
  );
}
