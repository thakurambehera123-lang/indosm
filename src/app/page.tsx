"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Sparkles, ArrowRight, Activity } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-24 pb-32">
      {/* HERO SECTION WITH LUXURY RADIAL ILLUMINATION */}
      <section className="relative pt-28 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Glowing Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-950/40 border border-indigo-500/30 rounded-full text-[10px] font-mono tracking-widest text-indigo-300 uppercase backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          CENTRAL WORKSPACE PLATFORM ACTIVE v4.0
        </motion.div>
        
        {/* Multi-layered High-contrast Dynamic Gradient Heading */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent max-w-5xl">
          Where India’s Student Developers <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Execute Enterprise Systems.
          </span>
        </h1>
        
        <p className="text-sm md:text-base text-slate-400 max-w-2xl leading-relaxed">
          INDOSM is a containerized technical ecosystem. Move from raw local architecture designs straight into production-ready staging rails without ever breaking your compiler flow.
        </p>

        {/* Premium Button Matrices */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/auth/signup" className="premium-btn-primary px-8 py-4 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg block">
            Initialize Your Node Node
          </Link>
          <Link href="/community-hub" className="px-8 py-4 bg-slate-900/60 border border-white/10 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-800/80 hover:border-white/20 transition-all flex items-center gap-2 backdrop-blur-md">
            Enter Live Feed Matrix <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
          </Link>
        </div>
      </section>

      {/* COMPILER TELEMETRY GRID VISUAL PREVIEW */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="premium-card rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                SYSTEM LIVE ENVIRONMENT // OBSERVAIBILITY
              </span>
              <h3 className="text-3xl font-black tracking-tight text-white leading-tight">
                An Absolute Structural Canvas. <br />Built-In.
              </h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                Bypass fragmented third-party setups. Streamline, test, monitor, and scale code sandboxes inside a native web terminal interface hard-coded directly into your digital identity framework.
              </p>
            </div>

            {/* High-fidelity Neon Code Box */}
            <div className="lg:col-span-7 bg-[#05070c]/90 border border-white/5 rounded-2xl p-6 font-mono text-xs text-slate-400 space-y-3 shadow-2xl relative">
              <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl pointer-events-none" />
              <div className="flex items-center justify-between border-b border-white/5 pb-3 text-[10px] tracking-wider uppercase text-slate-500">
                <span>[indosm-cluster-node-04]</span>
                <span className="text-cyan-400 animate-pulse">STATUS: ACTIVE COMPILATION</span>
              </div>
              <p className="text-indigo-400">&gt; mount -t devfs ecosystem /workspace/sandbox</p>
              <p className="text-slate-500">&gt; initializing isolated team orchestration containers...</p>
              <p className="text-purple-300">&gt; metrics tracked: 12,402 builds recorded this cycle</p>
              
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden mt-4 border border-white/5">
                <motion.div 
                  animate={{ width: ["20%", "95%", "60%"] }} 
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 h-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}