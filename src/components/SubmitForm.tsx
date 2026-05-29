"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useOpenPanel } from "@openpanel/nextjs";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Box,
  Terminal,
  User,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Eye,
  ArrowRight,
  Tag,
  Link as LinkIcon,
  Github,
  ExternalLink,
} from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const inputClasses =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:bg-white/10 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200 backdrop-blur-sm";
const labelClasses = "block text-sm font-medium text-gray-400 mb-2 ml-1";
const sectionHeaderClasses = "text-xl font-semibold text-white mb-6 flex items-center gap-2";

// Tool color mapping
const toolColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  cursor: {
    bg: "bg-emerald-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  windsurf: {
    bg: "bg-cyan-500/20",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  "claude-code": {
    bg: "bg-orange-500/20",
    border: "border-orange-500/30",
    text: "text-orange-400",
    glow: "shadow-orange-500/20",
  },
  replit: {
    bg: "bg-amber-500/20",
    border: "border-amber-500/30",
    text: "text-amber-400",
    glow: "shadow-amber-500/20",
  },
  mcp: {
    bg: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
};

interface FormData {
  agentName: string;
  description: string;
  fullDescription: string;
  githubUrl: string;
  websiteUrl: string;
  tool: string;
  type: string;
  category: string;
  installationType: string;
  installationCommand: string;
  installationInstructions: string;
  tags: string;
  authorName: string;
  authorGithub: string;
  authorTwitter: string;
}

const STEPS = [
  { id: 1, title: "Basic Info", icon: Box, description: "Name, description, and classification" },
  { id: 2, title: "Installation", icon: Terminal, description: "How to install your agent" },
  { id: 3, title: "Author & Links", icon: User, description: "Your info and project links" },
  { id: 4, title: "Preview", icon: Eye, description: "Review before submitting" },
];

const CONFETTI_COLORS = ["#f43f5e", "#8b5cf6", "#3b82f6", "#22c55e", "#eab308", "#06b6d4"];
const CONFETTI_PIECES = Array.from({ length: 50 }, () => ({
  left: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 3 + Math.random() * 2,
  color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
}));

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {CONFETTI_PIECES.map((piece, i) => (
        <div
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            top: "-10px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          <div className="w-3 h-3 rotate-45" style={{ backgroundColor: piece.color }} />
        </div>
      ))}
    </div>
  );
}

function PreviewCard({ formData }: { formData: FormData }) {
  const colors = toolColors[formData.tool] || toolColors.cursor;
  const tags = formData.tags
    .split(",")
    .filter((t) => t.trim())
    .slice(0, 4);

  return (
    <div
      className={`glass-panel rounded-3xl p-6 border ${colors.border} ${colors.bg} shadow-lg ${colors.glow}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
            >
              {formData.tool || "Tool"}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
              {formData.type || "Type"}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {formData.agentName || "Agent Name"}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {formData.description || "Short description of your agent will appear here..."}
          </p>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
          <span className="text-sm text-gray-400">{formData.authorName || "Author"}</span>
        </div>
        <span className="text-xs text-gray-500">{formData.category || "Category"}</span>
      </div>
    </div>
  );
}

export function SubmitForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    agentName: "",
    description: "",
    fullDescription: "",
    githubUrl: "",
    websiteUrl: "",
    tool: "",
    type: "",
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
  const [showConfetti, setShowConfetti] = useState(false);
  const hasTrackedStart = useRef(false);
  const { track } = useOpenPanel();

  // Track form start once, when the user first enters details
  useEffect(() => {
    if (!hasTrackedStart.current && (formData.agentName || formData.description)) {
      const [name, data] = analyticsEvents.submitFormStarted({
        agent_name: formData.agentName || undefined,
      });
      track(name, data);
      hasTrackedStart.current = true;
    }
  }, [formData.agentName, formData.description, track]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrorMessage("");
  };

  const validateStep = useCallback(
    (step: number): boolean => {
      switch (step) {
        case 1:
          if (!formData.agentName) {
            setErrorMessage("Please enter an agent name.");
            return false;
          }
          if (!formData.description) {
            setErrorMessage("Please enter a short description.");
            return false;
          }
          if (!formData.tool) {
            setErrorMessage("Please select a tool.");
            return false;
          }
          if (!formData.type) {
            setErrorMessage("Please select an agent type.");
            return false;
          }
          if (!formData.category) {
            setErrorMessage("Please select a category.");
            return false;
          }
          return true;
        case 2:
          // Installation is optional but if command is provided, instructions should be too
          return true;
        case 3:
          if (!formData.authorName) {
            setErrorMessage("Please enter your name.");
            return false;
          }
          return true;
        default:
          return true;
      }
    },
    [formData],
  );

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setErrorMessage("");
      setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    }
  };

  const prevStep = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

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
Type: ${formData.type}
Category: ${formData.category}
Description: ${formData.description}

${formData.fullDescription ? `Full Description:\n${formData.fullDescription}\n\n` : ""}

INSTALLATION
------------
Type: ${formData.installationType}
${formData.installationCommand ? `Command: ${formData.installationCommand}\n` : ""}
${formData.installationInstructions ? `Instructions: ${formData.installationInstructions}\n` : ""}

LINKS
-----
${formData.githubUrl ? `GitHub: ${formData.githubUrl}\n` : ""}
${formData.websiteUrl ? `Website: ${formData.websiteUrl}\n` : ""}

METADATA
--------
Tags: ${formData.tags}

AUTHOR
------
Name: ${formData.authorName}
${formData.authorGithub ? `GitHub: ${formData.authorGithub}\n` : ""}
${formData.authorTwitter ? `Twitter: ${formData.authorTwitter}\n` : ""}

---
Submitted via AgentDepot.dev
      `);

      window.location.href = `mailto:hello@agentdepot.dev?subject=${subject}&body=${body}`;

      // Track completion
      const [completeName, completeData] = analyticsEvents.submitFormCompleted({
        tool: formData.tool,
        type: formData.type,
      });
      track(completeName, completeData);

      setStatus("success");
      setShowConfetti(true);

      // Cleanup confetti after animation
      setTimeout(() => setShowConfetti(false), 5000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      setStatus("error");
      setErrorMessage("Failed to prepare submission. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <>
        {showConfetti && <Confetti />}
        <div className="max-w-2xl mx-auto text-center py-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6 animate-bounce-slow">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Submission Ready!
          </h2>
          <p className="text-gray-400 mb-4 text-lg">
            Your email client should have opened with the submission details.
          </p>
          <p className="text-gray-500 mb-8 text-sm">
            Just hit send and we&apos;ll review your agent within 2-3 business days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setStatus("idle");
                setCurrentStep(1);
                setFormData({
                  agentName: "",
                  description: "",
                  fullDescription: "",
                  githubUrl: "",
                  websiteUrl: "",
                  tool: "",
                  type: "",
                  category: "",
                  installationType: "manual",
                  installationCommand: "",
                  installationInstructions: "",
                  tags: "",
                  authorName: "",
                  authorGithub: "",
                  authorTwitter: "",
                });
                hasTrackedStart.current = false;
              }}
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:scale-105"
            >
              Submit Another Agent
            </button>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Browse Agents <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Progress Steps */}
      <div className="relative">
        <div className="flex justify-between items-center">
          {STEPS.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="flex-1 relative">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => {
                      if (isCompleted) {
                        setCurrentStep(step.id);
                      }
                    }}
                    disabled={!isCompleted && !isActive}
                    className={`
                      w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                      ${isActive ? "bg-white text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]" : ""}
                      ${isCompleted ? "bg-green-500/20 text-green-400 border border-green-500/30 cursor-pointer hover:scale-105" : ""}
                      ${!isActive && !isCompleted ? "bg-white/5 text-gray-500 border border-white/10" : ""}
                    `}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <StepIcon className="w-5 h-5" />
                    )}
                  </button>
                  <span
                    className={`mt-2 text-xs font-medium hidden sm:block ${isActive ? "text-white" : "text-gray-500"}`}
                  >
                    {step.title}
                  </span>
                </div>

                {/* Connector line */}
                {index < STEPS.length - 1 && (
                  <div className="absolute top-6 left-1/2 w-full h-0.5 -translate-y-1/2">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isCompleted ? "bg-green-500/50" : "bg-white/10"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Error Message */}
      {status === "error" && errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 animate-shake">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <p className="text-red-400 text-sm">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
          <div className="glass-panel rounded-3xl p-8 border border-white/10 animate-fade-in">
            <h2 className={sectionHeaderClasses}>
              <Sparkles className="w-5 h-5 text-blue-400" />
              Basic Information
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
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="description" className={`${labelClasses} mb-0`}>
                    Short Description <span className="text-red-400">*</span>
                  </label>
                  <span
                    className={`text-xs ${formData.description.length > 140 ? "text-amber-400" : "text-gray-500"}`}
                  >
                    {formData.description.length}/150
                  </span>
                </div>
                <input
                  type="text"
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Brief one-line description"
                  maxLength={150}
                />
              </div>

              <div>
                <label htmlFor="fullDescription" className={labelClasses}>
                  Full Description{" "}
                  <span className="text-gray-500 font-normal">(Markdown supported)</span>
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                      <option value="" className="bg-gray-900">
                        Select tool...
                      </option>
                      <option value="cursor" className="bg-gray-900">
                        Cursor
                      </option>
                      <option value="windsurf" className="bg-gray-900">
                        Windsurf
                      </option>
                      <option value="claude-code" className="bg-gray-900">
                        Claude Code
                      </option>
                      <option value="replit" className="bg-gray-900">
                        Replit
                      </option>
                      <option value="mcp" className="bg-gray-900">
                        MCP
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className={labelClasses}>
                    Type <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="" className="bg-gray-900">
                        Select type...
                      </option>
                      <option value="rule" className="bg-gray-900">
                        Rule
                      </option>
                      <option value="agent" className="bg-gray-900">
                        Agent
                      </option>
                      <option value="plugin" className="bg-gray-900">
                        Plugin
                      </option>
                      <option value="skill" className="bg-gray-900">
                        Skill
                      </option>
                      <option value="template" className="bg-gray-900">
                        Template
                      </option>
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
                      <option value="" className="bg-gray-900">
                        Select category...
                      </option>
                      <option value="coding" className="bg-gray-900">
                        Coding
                      </option>
                      <option value="debugging" className="bg-gray-900">
                        Debugging
                      </option>
                      <option value="testing" className="bg-gray-900">
                        Testing
                      </option>
                      <option value="productivity" className="bg-gray-900">
                        Productivity
                      </option>
                      <option value="data" className="bg-gray-900">
                        Data
                      </option>
                      <option value="web" className="bg-gray-900">
                        Web
                      </option>
                      <option value="other" className="bg-gray-900">
                        Other
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="tags" className={labelClasses}>
                  <Tag className="w-4 h-4 inline mr-1" />
                  Tags <span className="text-gray-500 font-normal">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="e.g., react, typescript, hooks, frontend"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Installation */}
        {currentStep === 2 && (
          <div className="glass-panel rounded-3xl p-8 border border-white/10 animate-fade-in">
            <h2 className={sectionHeaderClasses}>
              <Terminal className="w-5 h-5 text-purple-400" />
              Installation Details
            </h2>

            <div className="space-y-6">
              <div>
                <label htmlFor="installationType" className={labelClasses}>
                  Installation Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["manual", "npm", "git", "extension"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, installationType: type }))}
                      className={`
                        px-4 py-3 rounded-xl border text-sm font-medium transition-all
                        ${
                          formData.installationType === type
                            ? "bg-white/10 border-white/30 text-white"
                            : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                        }
                      `}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
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
                  placeholder="e.g., npx create-agent@latest or /plugin install my-agent"
                />
              </div>

              <div>
                <label htmlFor="installationInstructions" className={labelClasses}>
                  Step-by-Step Instructions
                </label>
                <textarea
                  id="installationInstructions"
                  name="installationInstructions"
                  value={formData.installationInstructions}
                  onChange={handleChange}
                  rows={6}
                  className={`${inputClasses} resize-none`}
                  placeholder="1. Clone the repository&#10;2. Install dependencies&#10;3. Configure settings&#10;4. Activate the agent"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Author & Links */}
        {currentStep === 3 && (
          <div className="glass-panel rounded-3xl p-8 border border-white/10 animate-fade-in">
            <h2 className={sectionHeaderClasses}>
              <User className="w-5 h-5 text-pink-400" />
              Author & Links
            </h2>

            <div className="space-y-6">
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
                    <Github className="w-4 h-4 inline mr-1" />
                    Your GitHub Profile
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

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-blue-400" />
                  Project Links
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="githubUrl" className={labelClasses}>
                      <Github className="w-4 h-4 inline mr-1" />
                      Repository URL
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
                    <label htmlFor="websiteUrl" className={labelClasses}>
                      <ExternalLink className="w-4 h-4 inline mr-1" />
                      Website / Demo URL
                    </label>
                    <input
                      type="url"
                      id="websiteUrl"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="https://my-agent.dev"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Preview */}
        {currentStep === 4 && (
          <div className="space-y-8 animate-fade-in">
            <div className="glass-panel rounded-3xl p-8 border border-white/10">
              <h2 className={sectionHeaderClasses}>
                <Eye className="w-5 h-5 text-cyan-400" />
                Preview Your Agent
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                This is how your agent will appear in the directory.
              </p>

              <div className="max-w-md mx-auto">
                <PreviewCard formData={formData} />
              </div>
            </div>

            {/* Summary */}
            <div className="glass-panel rounded-3xl p-8 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Submission Summary</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-500">Agent Name</span>
                  <span className="text-white font-medium">{formData.agentName || "-"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-500">Tool</span>
                  <span className="text-white font-medium capitalize">{formData.tool || "-"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-500">Type</span>
                  <span className="text-white font-medium capitalize">{formData.type || "-"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-500">Category</span>
                  <span className="text-white font-medium capitalize">
                    {formData.category || "-"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-500">Author</span>
                  <span className="text-white font-medium">{formData.authorName || "-"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-gray-500">Repository</span>
                  <span className="text-white font-medium truncate max-w-[150px]">
                    {formData.githubUrl ? "✓ Provided" : "-"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-8">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-xl border transition-all
              ${
                currentStep === 1
                  ? "opacity-0 pointer-events-none"
                  : "border-white/10 text-gray-400 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>

          {currentStep < STEPS.length ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-black font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Continue
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              {status === "loading" ? "Preparing..." : "Submit Agent"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
