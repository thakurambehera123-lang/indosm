"use client";

import { Award, ShieldAlert, Zap, Layers, Trophy } from "lucide-react";

export default function GlobalLeaderboardPage() {
  const rankings = [
    { rank: "01", name: "Aarav Mehta", node: "West-01 Cluster", xp: "18,402 XP", tasks: "142 Sandboxes Resolved", badges: 12 },
    { rank: "02", name: "Divya Teja", node: "South-04 Node", xp: "16,190 XP", tasks: "124 Sandboxes Resolved", badges: 10 },
    { rank: "03", name: "Kabir Biswas", node: "East-02 Cluster", xp: "15,840 XP", tasks: "119 Sandboxes Resolved", badges: 9 }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-muted uppercase tracking-widest">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span>Platform Real-time Performance Ranks</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-none">Ecosystem Verification Index</h2>
        <p className="text-xs text-brand-muted font-mono uppercase tracking-wider">[Updates automatically on every verified compiler push]</p>
      </div>

      {/* MATRIX HIGH-FIDELITY LEADERBOARD LIST */}
      <div className="bg-brand-card/30 border border-white/5 rounded-3xl p-4 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/5 text-[10px] font-mono text-brand-muted uppercase tracking-wider">
          <div className="col-span-2">Rank Index</div>
          <div className="col-span-4">Student Builder Node</div>
          <div className="col-span-3">Performance XP Matrix</div>
          <div className="col-span-3 text-right">Verified Sprints</div>
        </div>

        <div className="divide-y divide-white/5">
          {rankings.map((user, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 px-4 py-5 items-center hover:bg-white/[0.02] transition-colors">
              <div className="col-span-2 font-mono text-sm font-bold text-neutral-400">{user.rank}</div>
              <div className="col-span-4">
                <h4 className="text-xs font-bold text-white tracking-tight">{user.name}</h4>
                <p className="text-[10px] text-neutral-500 font-mono">{user.node}</p>
              </div>
              <div className="col-span-3 font-mono text-xs text-white font-semibold">{user.xp}</div>
              <div className="col-span-3 text-right font-mono text-xs text-neutral-400">{user.tasks}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}