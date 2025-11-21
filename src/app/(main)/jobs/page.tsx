import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Engineering Jobs | AgentDepot",
  description: "Find the best jobs in AI Engineering and Agentic Development.",
};

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">AI Engineering Jobs</h1>
        <p className="text-xl text-gray-400">
          Find your next role building the future of AI.
        </p>
        
        <div className="p-12 glass-panel rounded-3xl mt-12 border border-dashed border-white/20">
          <p className="text-2xl text-gray-500">Coming Soon</p>
          <p className="text-gray-400 mt-2">We are partnering with top AI companies to bring you exclusive opportunities.</p>
        </div>
      </div>
    </div>
  );
}
