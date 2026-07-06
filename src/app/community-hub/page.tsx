"use client";

import { useState } from "react";
import { MessageSquare, Heart, Bookmark, Flame, MessageCircle, Layers, ShieldCheck, Terminal } from "lucide-react";

export default function CommunityHubPage() {
  const [activeTab, setActiveTab] = useState<string>("Global Feed");

  const mockPosts = [
    {
      author: "Nikhil Sharma",
      zone: "Mumbai Cluster",
      role: "Student Builder",
      content: "Just managed to optimize our custom reverse-proxy container routing parameters down to 14ms response envelopes. Check out the architecture ledger component inside our internal project room workspace!",
      codeSnippet: "const gateway = new IndosmGatewayRouter({\n  clusterMode: 'isolated',\n  telemetryCheck: true\n});",
      likes: 84, comments: 19, rank: "Level 14"
    },
    {
      author: "Priya Nair",
      zone: "Bangalore Node",
      role: "Moderator / Mentor",
      content: "Incubation cycle 04 verification structures are completely set up. All technical student teams carrying verified milestone completions in their workspace dashboard can now unlock stage 3 allocation rewards.",
      codeSnippet: null,
      likes: 142, comments: 32, rank: "Staff Architect"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-10">
      
      {/* LEFT COLUMN: ECOSYSTEM NAV CHANNELS */}
      <div className="lg:col-span-3 space-y-6">
        <div className="p-6 bg-brand-card border border-white/5 rounded-2xl space-y-4">
          <h4 className="text-xs font-mono text-brand-muted uppercase tracking-wider">Ecosystem Domains</h4>
          <ul className="space-y-1">
            {["Global Feed", "Study Groups", "State-wise Clusters", "College Clusters"].map((tab) => (
              <li 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-xs font-medium px-4 py-2.5 rounded-xl cursor-pointer transition-all ${
                  activeTab === tab ? "bg-white text-black font-bold" : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 bg-brand-card border border-white/5 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-brand-muted uppercase tracking-wider">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>Trending Ecosystem Tags</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {["#proxy-routing", "#redis-cluster", "#sandbox-metrics", "#cycle-04"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-neutral-900 border border-white/5 rounded-md text-[10px] text-neutral-400 font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CENTER COLUMN: DYNAMIC BROADCAST FEED PANEL */}
      <div className="lg:col-span-6 space-y-6">
        <div className="p-6 bg-brand-card border border-white/10 rounded-2xl space-y-4">
          <textarea 
            placeholder="Broadcast architectural insights, system queries, or code artifacts to the node network..."
            className="w-full min-h-[80px] bg-transparent text-sm text-white placeholder-neutral-600 focus:outline-none resize-none"
          />
          <div className="flex justify-between items-center pt-2 border-t border-white/5">
            <button className="px-3 py-1.5 bg-neutral-900 border border-white/10 text-[10px] font-mono rounded-lg text-neutral-400 hover:text-white">
              + Attach Code Block
            </button>
            <button className="px-4 py-2 bg-white text-black font-bold text-xs rounded-full">
              Broadcast Component
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {mockPosts.map((post, i) => (
            <div key={i} className="p-6 bg-brand-card border border-white/5 rounded-2xl space-y-4 hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{post.author}</h4>
                  <div className="flex gap-2 text-[10px] text-brand-muted font-mono mt-0.5">
                    <span>{post.zone}</span>
                    <span>•</span>
                    <span className="text-neutral-400">{post.role}</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono rounded-md text-white">
                  {post.rank}
                </span>
              </div>

              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">{post.content}</p>

              {post.codeSnippet && (
                <pre className="p-4 bg-black border border-white/10 rounded-xl font-mono text-xs text-neutral-400 overflow-x-auto">
                  <code>{post.codeSnippet}</code>
                </pre>
              )}

              <div className="flex items-center gap-6 pt-2 text-neutral-500 text-xs font-mono">
                <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Heart className="w-4 h-4" /> <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" /> <span>{post.comments}</span>
                </button>
                <button className="ml-auto hover:text-white transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN: REAL-TIME GLOBAL INTERN PANEL CHAT */}
      <div className="lg:col-span-3 bg-brand-card border border-white/5 rounded-2xl p-6 h-[fit-content] space-y-6">
        <div className="border-b border-white/5 pb-3">
          <h4 className="text-xs font-mono text-brand-muted uppercase tracking-wider">Ecosystem Global Room</h4>
          <p className="text-[10px] text-emerald-400 font-mono mt-0.5">● 1,402 builders executing code</p>
        </div>
        
        <div className="space-y-4 max-h-[300px] overflow-y-auto text-xs font-mono leading-normal pr-1">
          <p><span className="text-neutral-400">Rohan_K:</span> Anyone testing proxy rails on node-04?</p>
          <p><span className="text-neutral-400">Amit_Dev:</span> Yes, milestone tests passing smoothly.</p>
          <p><span className="text-neutral-400">Sneha_Matrix:</span> Incubation cycle registration is fully active.</p>
        </div>

        <input 
          type="text" 
          placeholder="Send real-time platform signal..."
          className="w-full px-3 py-2 bg-neutral-950 border border-white/10 rounded-xl font-mono text-[11px] text-white placeholder-neutral-700 focus:outline-none focus:border-white/30"
        />
      </div>

    </div>
  );
}