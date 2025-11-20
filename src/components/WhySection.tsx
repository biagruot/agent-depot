import { Check, X, Zap, Shield, Layout, Layers } from "lucide-react";

export function WhySection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Why AgentDepot? */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AgentDepot</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We built the directory we wished existed. No more jumping between 5 different websites to find the right tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <FeatureCard 
            icon={<Layers className="w-6 h-6 text-blue-400" />}
            title="Multi-Tool Coverage"
            description="The only directory covering Claude, Windsurf, Cursor, and Replit in one place."
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-green-400" />}
            title="100% Verified"
            description="Every agent is manually tested by our team. No broken links or spam."
          />
          <FeatureCard 
            icon={<Layout className="w-6 h-6 text-purple-400" />}
            title="Premium Experience"
            description="Beautiful, fast, and designed for developers. Dark mode by default."
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-orange-400" />}
            title="Curated Collections"
            description="Don't just browse—discover. Hand-picked starter packs for every use case."
          />
        </div>

        {/* Comparison Table */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">The AgentDepot Difference</h3>
            <p className="text-gray-400">How we stack up against other directories</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-gray-400 font-medium uppercase tracking-wider text-sm">Feature</th>
                  <th className="py-6 px-4 text-white font-bold text-lg bg-white/5 rounded-t-xl">AgentDepot</th>
                  <th className="py-6 px-4 text-gray-500 font-medium">Other Directories</th>
                  <th className="py-6 px-4 text-gray-500 font-medium">GitHub Lists</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <ComparisonRow 
                  feature="Multi-Tool Support" 
                  agentDepot={true} 
                  others={false} 
                  github={false}
                  detail="Claude, Windsurf, Cursor, Replit"
                />
                <ComparisonRow 
                  feature="Manual Verification" 
                  agentDepot={true} 
                  others="Mixed" 
                  github={false}
                  detail="100% Tested"
                />
                <ComparisonRow 
                  feature="Video Demos" 
                  agentDepot={true} 
                  others={false} 
                  github={false}
                  detail="Coming Soon"
                />
                <ComparisonRow 
                  feature="Premium UX" 
                  agentDepot={true} 
                  others={false} 
                  github={false}
                  detail="Glassmorphism"
                />
                <ComparisonRow 
                  feature="Curated Collections" 
                  agentDepot={true} 
                  others={false} 
                  github={false}
                  detail="Starter Packs"
                />
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 border border-white/10">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ComparisonRow({ feature, agentDepot, others, github, detail }: { feature: string, agentDepot: boolean | string, others: boolean | string, github: boolean | string, detail?: string }) {
  return (
    <tr className="group hover:bg-white/5 transition-colors">
      <td className="py-6 px-4 text-gray-300 font-medium">
        {feature}
        {detail && <span className="block text-xs text-gray-500 mt-1 font-normal">{detail}</span>}
      </td>
      <td className="py-6 px-4 bg-white/5 group-hover:bg-white/10 transition-colors">
        <StatusIcon status={agentDepot} />
      </td>
      <td className="py-6 px-4">
        <StatusIcon status={others} />
      </td>
      <td className="py-6 px-4">
        <StatusIcon status={github} />
      </td>
    </tr>
  );
}

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) {
    return (
      <div className="flex items-center gap-2 text-green-400 font-bold">
        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <Check size={14} />
        </div>
        <span>Yes</span>
      </div>
    );
  }
  if (status === false) {
    return (
      <div className="flex items-center gap-2 text-gray-600">
        <div className="w-6 h-6 rounded-full bg-gray-500/10 flex items-center justify-center">
          <X size={14} />
        </div>
        <span>No</span>
      </div>
    );
  }
  return <span className="text-gray-400 font-medium">{status}</span>;
}
