"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

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
      <div className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Agent Details</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="agentName" className="block text-sm font-medium text-gray-300 mb-2">
              Agent Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="agentName"
              name="agentName"
              required
              value={formData.agentName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              placeholder="e.g., React Pro Agent"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              Short Description <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              placeholder="Brief one-line description (max 150 characters)"
              maxLength={150}
            />
          </div>

          <div>
            <label htmlFor="fullDescription" className="block text-sm font-medium text-gray-300 mb-2">
              Full Description (Markdown supported)
            </label>
            <textarea
              id="fullDescription"
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Detailed description with features, usage examples, etc."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tool" className="block text-sm font-medium text-gray-300 mb-2">
                Tool <span className="text-red-400">*</span>
              </label>
              <select
                id="tool"
                name="tool"
                required
                value={formData.tool}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select a tool...</option>
                <option value="claude">Claude Code</option>
                <option value="windsurf">Windsurf</option>
                <option value="cursor">Cursor</option>
                <option value="replit">Replit</option>
              </select>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                Category <span className="text-red-400">*</span>
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select a category...</option>
                <option value="coding">Coding</option>
                <option value="debugging">Debugging</option>
                <option value="testing">Testing</option>
                <option value="productivity">Productivity</option>
                <option value="data">Data</option>
                <option value="web">Web</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              placeholder="e.g., react, typescript, hooks"
            />
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Installation</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="install ationType" className="block text-sm font-medium text-gray-300 mb-2">
              Installation Type
            </label>
            <select
              id="installationType"
              name="installationType"
              value={formData.installationType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-primary focus:outline-none transition-colors"
            >
              <option value="manual">Manual</option>
              <option value="npm">NPM</option>
              <option value="git">Git</option>
              <option value="extension">Extension</option>
            </select>
          </div>

          <div>
            <label htmlFor="installationCommand" className="block text-sm font-medium text-gray-300 mb-2">
              Installation Command
            </label>
            <input
              type="text"
              id="installationCommand"
              name="installationCommand"
              value={formData.installationCommand}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors font-mono text-sm"
              placeholder="e.g., /plugin install my-agent or npm install my-agent"
            />
          </div>

          <div>
            <label htmlFor="installationInstructions" className="block text-sm font-medium text-gray-300 mb-2">
              Installation Instructions
            </label>
            <textarea
              id="installationInstructions"
              name="installationInstructions"
              value={formData.installationInstructions}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Step-by-step installation instructions..."
            />
          </div>
        </div>
      </div>

      {/* Links & Author */}
      <div className="glass-panel rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Links & Author Info</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-300 mb-2">
              GitHub URL
            </label>
            <input
              type="url"
              id="githubUrl"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              placeholder="https://github.com/username/repo"
            />
          </div>

          <div>
            <label htmlFor="authorName" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              required
              value={formData.authorName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
              placeholder="Your name or username"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="authorGithub" className="block text-sm font-medium text-gray-300 mb-2">
                Your GitHub
              </label>
              <input
                type="url"
                id="authorGithub"
                name="authorGithub"
                value={formData.authorGithub}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
                placeholder="https://github.com/username"
              />
            </div>

            <div>
              <label htmlFor="authorTwitter" className="block text-sm font-medium text-gray-300 mb-2">
                Your Twitter/X
              </label>
              <input
                type="text"
                id="authorTwitter"
                name="authorTwitter"
                value={formData.authorTwitter}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-primary focus:outline-none transition-colors"
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
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
        >
          <Send size={18} />
          {status === "loading" ? "Preparing..." : "Submit Agent"}
        </button>
      </div>
    </form>
  );
}
