"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, Medal, Flame, Zap, Code2, 
  Search, ShieldCheck, Terminal, Star, ArrowUpRight 
} from "lucide-react";

interface DevProfile {
  rank: number;
  name: string;
  role: string;
  xp: number;
  streak: number;
  commits: number;
  isVerified: boolean;
  specialty: string;
}

export default function LeaderboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDev, setSelectedDev] = useState<DevProfile | null>(null);

  const [leaderboardData] = useState<DevProfile[]>([
    { rank: 1, name: "KABIR_CRYPT", role: "Founder Cluster", xp: 2100, streak: 24, commits: 142, isVerified: true, specialty: "Zero-Knowledge Proofs" },
    { rank: 2, name: "ANIKET_ARCH", role: "Student Cluster", xp: 1420, streak: 18, commits: 98, isVerified: true, specialty: "Rust Edge Proxies" },
    { rank: 3, name: "PRIYA_UX", role: "Mentor Cluster", xp: 1150, streak: 12, commits: 64, isVerified: false, specialty: "WebGL Shader Pipelines" },
    { rank: 4, name: "THAKURAMBEHERA111", role: "Student Cluster", xp: 950, streak: 7, commits: 41, isVerified: true, specialty: "Next.js Engine Runtimes" },
    { rank: 5, name: "MEERA_CORE", role: "Student Cluster", xp: 850, streak: 5, commits: 33, isVerified: false, specialty: "Distributed Key-Value Buffers" },
  ]);

  const filteredDevs = leaderboardData.filter(dev => 
    dev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dev.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      
      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/[0.06] pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Global Cluster Leaderboard</h2>
          </div>
          <p className="text-xs text-slate-400">Real-time rank optimization matrix tracking student commit velocities, streaks, and verified telemetry metrics.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT SECTOR: THE HIGH-CONTRAST LEADERBOARD LEDGER LIST */}
        <div className="lg:col-span-8 space-y-4">
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Query ecosystem nodes by handle or specialty..."
              className="w-full pl-12 pr-4 py-3 bg-[#0B0F19]/60 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500/30 transition-colors"
            />
          </div>

          <div className="space-y-2.5">
            {filteredDevs.map((dev) => (
              <div
                key={dev.name}
                onClick={() => setSelectedDev(dev)}
                className={`premium-card p-4 rounded-xl cursor-pointer flex items-center justify-between group border transition-all ${
                  selectedDev?.name === dev.name ? "border-indigo-500/40 bg-indigo-950/10" : "border-white/5"
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  {/* Rank Badge Indicator */}
                  <div className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center ${
                    dev.rank === 1 ? "bg-amber-400/10 border border-amber-400/30 text-amber-400" :
                    dev.rank === 2 ? "bg-slate-400/10 border border-slate-400/30 text-slate-300" :
                    dev.rank === 3 ? "bg-amber-700/10 border border-amber-700/30 text-amber-600" : "bg-black/40 text-slate-500"
                  }`}>
                    {dev.rank <= 3 ? <Medal className="w-4 h-4" /> : dev.rank}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-mono font-bold text-white tracking-tight truncate">{dev.name}</h4>
                      {dev.isVerified && <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />}
                    </div>
                    <span className="text-[10px] text-slate-500 block truncate">{dev.specialty}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6 font-mono text-xs text-right">
                  <div className="hidden sm:block">
                    <span className="text-slate-500 block text-[9px] uppercase">Streak</span>
                    <span className="text-amber-400 font-bold flex items-center gap-0.5 justify-end">
                      <Flame className="w-3.5 h-3.5" /> {dev.streak}d
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase">XP Pool</span>
                    <span className="text-indigo-400 font-bold flex items-center gap-0.5 justify-end">
                      <Zap className="w-3.5 h-3.5" /> {dev.xp}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTOR: PREVENTIVE GLASS CONTAINER METRIC DECK CARD */}
        <div className="lg:col-span-4 sticky top-24">
          <AnimatePresence mode="wait">
            {selectedDev ? (
              <motion.div
                key={selectedDev.name}
                initial={{ opacity: 0, scale: 0.98, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 5 }}
                className="premium-card p-6 rounded-2xl space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[40px] rounded-full pointer-events-none" />
                
                <div className="border-b border-white/[0.04] pb-4 space-y-2">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">// Structural Node Telemetry</span>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black text-white">{selectedDev.name}</h3>
                    {selectedDev.isVerified && <ShieldCheck className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <span className="inline-block px-2 py-0.5 bg-white/[0.03] border border-white/5 rounded text-[9px] font-mono text-slate-400">
                    {selectedDev.role}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                    <span className="text-slate-500 block text-[9px] uppercase mb-0.5">Code Commits</span>
                    <span className="text-white font-bold text-sm flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5 text-slate-400" /> {selectedDev.commits}
                    </span>
                  </div>
                  <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                    <span className="text-slate-500 block text-[9px] uppercase mb-0.5">Global Rank</span>
                    <span className="text-white font-bold text-sm flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-slate-400" /> #{selectedDev.rank}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-black/20 border border-white/5 rounded-xl space-y-1">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Assigned Sandbox Domain</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-semibold">{selectedDev.specialty}</p>
                </div>

              </motion.div>
            ) : (
              <div className="border border-dashed border-white/5 rounded-2xl p-12 text-center text-slate-600 text-[11px] font-mono">
                Select a terminal operator node ledger matrix card to parse live cluster parameters.
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}