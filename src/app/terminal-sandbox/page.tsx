"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Terminal as TermIcon, Network, Cpu, Play, 
  RefreshCw, Shield, AlertCircle, CheckCircle2 
} from "lucide-react";

interface LogEntry {
  type: "input" | "system" | "success" | "error";
  text: string;
  timestamp: string;
}

export default function TerminalSandboxPage() {
  const [command, setCommand] = useState("");
  const [p2pStatus, setP2pStatus] = useState<"Disconnected" | "Connecting" | "Synced">("Synced");
  const [sandboxStatus, setSandboxStatus] = useState<"Idle" | "Executing" | "Panicked">("Idle");
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: "system", text: "Initializing isolated container cluster mesh standard rails...", timestamp: "17:59:01" },
    { type: "system", text: "WebRTC peer handshake established cleanly with node_idx [0x9F42].", timestamp: "17:59:03" },
    { type: "success", text: "Virtual environment sandbox mounted at /workspace/sandbox successfully.", timestamp: "17:59:04" }
  ]);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const pushLog = (type: LogEntry["type"], text: string) => {
    const time = new Date().toTimeString().split(' ')[0];
    setLogs((prev) => [...prev, { type, text, timestamp: time }]);
  };

  const handleExecuteCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    const inputCmd = command.trim();
    pushLog("input", inputCmd);
    setCommand("");
    setSandboxStatus("Executing");

    setTimeout(() => {
      if (inputCmd === "help") {
        pushLog("system", "Available matrix commands: system-status | network-sync | clear | cluster-panic");
      } else if (inputCmd === "system-status") {
        pushLog("success", "CPU Core Threads: 8/8 Allocate | RAM Buffer: 4.12GB Staged | Sandbox Isolation: Level-4");
      } else if (inputCmd === "network-sync") {
        setP2pStatus("Connecting");
        pushLog("system", "Flushing active peer channels... re-establishing signal vectors...");
        setTimeout(() => {
          setP2pStatus("Synced");
          pushLog("success", "Re-synchronized peer mesh cleanly via edge WebRTC lanes.");
        }, 1500);
      } else if (inputCmd === "clear") {
        setLogs([]);
      } else if (inputCmd === "cluster-panic") {
        setSandboxStatus("Panicked");
        pushLog("error", "FATAL CRASH DETECTED: Kernel execution loop panicked. Flush environment cache immediately.");
      } else {
        pushLog("error", `Command parsing error: Reference token "${inputCmd}" not found.`);
      }

      if (inputCmd !== "cluster-panic") {
        setSandboxStatus("Idle");
      }
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      
      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/[0.06] pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <TermIcon className="w-4 h-4 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">P2P Collaborative Terminal Sandbox</h2>
          </div>
          <p className="text-xs text-slate-400">Run parallel sandbox kernels, debug system branches, and sync environment metrics directly over secure tunnels.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: TELEMETRY METRIC SWITCHBOARDS */}
        <div className="lg:col-span-4 space-y-6">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block px-2">Sandbox Cluster Nodes</span>
          
          <div className="premium-card p-5 rounded-xl space-y-4">
            <div className="flex justify-between items-center border-b border-white/[0.04] pb-3">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <Network className="w-3.5 h-3.5 text-slate-500" /> WebRTC Telemetry
              </span>
              <span className={`px-2 py-0.5 rounded text-[9px] font-mono border ${
                p2pStatus === "Synced" ? "bg-emerald-950/30 border-emerald-900/40 text-emerald-400" :
                p2pStatus === "Connecting" ? "bg-amber-950/30 border-amber-900/40 text-amber-400 animate-pulse" : "bg-red-950/30 border-red-900/40 text-red-400"
              }`}>
                {p2pStatus}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/[0.04] pb-3">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-slate-500" /> Execution Status
              </span>
              <span className={`px-2 py-0.5 rounded text-[9px] font-mono border ${
                sandboxStatus === "Idle" ? "bg-slate-900 border-slate-700 text-slate-400" :
                sandboxStatus === "Executing" ? "bg-indigo-950/30 border-indigo-900/40 text-indigo-400 animate-pulse" : "bg-red-950/30 border-red-900/40 text-red-400"
              }`}>
                {sandboxStatus}
              </span>
            </div>

            <button
              onClick={() => {
                setSandboxStatus("Idle");
                pushLog("system", "Flushing environment parameters... resetting local cluster registers.");
              }}
              className="w-full py-2.5 bg-slate-900 border border-white/5 text-slate-300 font-mono text-[11px] rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Container State
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-FIDELITY INTERACTIVE TERMINAL HUB */}
        <div className="lg:col-span-8 bg-[#04060a] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl pointer-events-none" />
          
          {/* Top Decorative Shell Control Header */}
          <div className="bg-black/80 px-5 py-3.5 border-b border-white/5 flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
              <span className="ml-2 text-slate-400">bash — system-terminal-mesh</span>
            </div>
            <span>Type 'help' for directions</span>
          </div>

          {/* Core Shell Logs Stream Area */}
          <div className="p-6 h-80 overflow-y-auto font-mono text-xs space-y-2.5 scrollbar-thin">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-3 leading-relaxed">
                <span className="text-slate-600 select-none flex-shrink-0">[{log.timestamp}]</span>
                <span className={`break-all ${
                  log.type === "input" ? "text-indigo-300" :
                  log.type === "success" ? "text-emerald-400" :
                  log.type === "error" ? "text-red-400 font-bold" : "text-slate-400"
                }`}>
                  {log.type === "input" ? `> ${log.text}` : log.text}
                </span>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Shell Input Field */}
          <form onSubmit={handleExecuteCommand} className="border-t border-white/5 bg-black/40 flex items-center">
            <div className="pl-6 text-indigo-400 font-mono text-xs select-none">&gt;</div>
            <input 
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              disabled={sandboxStatus === "Executing"}
              placeholder={sandboxStatus === "Executing" ? "Awaiting container thread return..." : "Mount console directive..."}
              className="w-full px-3 py-4 bg-transparent font-mono text-xs text-white focus:outline-none placeholder-slate-600 disabled:cursor-not-allowed"
            />
            <button 
              type="submit"
              disabled={sandboxStatus === "Executing"}
              className="px-6 py-4 bg-white/[0.02] border-l border-white/5 hover:bg-white/5 text-slate-400 hover:text-white transition-colors flex items-center justify-center disabled:cursor-not-allowed"
            >
              <Play className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}