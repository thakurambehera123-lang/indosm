"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Layers, HardDrive, Cpu, Radio, Network, 
  Terminal as TermIcon, ShieldAlert, Server, Activity 
} from "lucide-react";

interface ServiceNode {
  name: string;
  type: "Core Engine" | "Network Layer" | "Security Gateway" | "UI Matrix";
  status: "Operational" | "Degraded" | "Syncing";
  load: string;
  uptime: string;
}

export default function ArchitectureMapPage() {
  const [selectedType, setSelectedType] = useState<string>("all");

  const [systemNodes] = useState<ServiceNode[]>([
    { name: "Next.js 16 Edge Runtime Rails", type: "UI Matrix", status: "Operational", load: "14%", uptime: "99.98%" },
    { name: "P2P WebRTC Signal Tunnel Mesh", type: "Network Layer", status: "Operational", load: "22%", uptime: "99.94%" },
    { name: "Cryptographic JWT Verification Gate", type: "Security Gateway", status: "Operational", load: "8%", uptime: "100.00%" },
    { name: "Isolated Browser DevFS Sandbox Containers", type: "Core Engine", status: "Syncing", load: "61%", uptime: "99.85%" },
    { name: "Distributed Memory Key-Value Cache Buffer", type: "Core Engine", status: "Operational", load: "42%", uptime: "99.99%" }
  ]);

  const filteredNodes = selectedType === "all" 
    ? systemNodes 
    : systemNodes.filter(node => node.type === selectedType);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      
      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/[0.06] pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Layers className="w-4 h-4 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Ecosystem Architecture Topology</h2>
          </div>
          <p className="text-xs text-slate-400">Live operational orchestration panel reporting state parameters, latency indexes, and core system health logs.</p>
        </div>
      </div>

      {/* COMPILER METRICS BANNER CLUSTER */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Target Services", value: "05 Live Nodes", icon: Server, color: "text-blue-400" },
          { label: "Network Bandwidth Load", value: "142.8 Mb/s", icon: Radio, color: "text-purple-400" },
          { label: "Active Memory Footprint", value: "4.12 GB / 8GB", icon: HardDrive, color: "text-cyan-400" },
          { label: "System Clock Drift", value: "±0.02 ms", icon: Activity, color: "text-emerald-400" }
        ].map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div key={i} className="premium-card p-5 rounded-xl space-y-2 border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{metric.label}</span>
                <Icon className={`w-4 h-4 ${metric.color}`} />
              </div>
              <h4 className="text-lg font-black text-white tracking-tight font-mono">{metric.value}</h4>
            </div>
          );
        })}
      </div>

      {/* FILTER CONTROL SEGMENTS */}
      <div className="flex flex-wrap gap-2 border-b border-white/[0.04] pb-4">
        {["all", "Core Engine", "Network Layer", "Security Gateway", "UI Matrix"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all ${
              selectedType === type ? "bg-white text-black font-bold" : "bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* PLATFORM TOPOLOGY LEDGER GRID */}
      <div className="space-y-3">
        {filteredNodes.map((node, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.04 }}
            className="premium-card p-5 rounded-xl border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:border-indigo-500/20"
          >
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">[NODE-0{index + 1}]</span>
                <h4 className="text-xs font-mono font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors truncate">{node.name}</h4>
              </div>
              <span className="inline-block px-2 py-0.5 bg-white/[0.02] border border-white/5 rounded text-[9px] font-mono text-slate-400 uppercase tracking-wider">
                {node.type}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono w-full md:w-auto justify-between md:justify-end">
              <div className="text-left md:text-right">
                <span className="text-slate-500 block text-[9px] uppercase">Core Load</span>
                <span className="text-white font-bold">{node.load}</span>
              </div>
              <div className="text-left md:text-right hidden sm:block">
                <span className="text-slate-500 block text-[9px] uppercase">Uptime Metric</span>
                <span className="text-slate-400">{node.uptime}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[9px] uppercase mb-0.5">Telemetry Status</span>
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wide border ${
                  node.status === "Operational" ? "bg-emerald-950/30 border-emerald-900/40 text-emerald-400" : "bg-amber-950/30 border-amber-900/40 text-amber-400"
                }`}>
                  {node.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}