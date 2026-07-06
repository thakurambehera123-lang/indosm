"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { 
  LogOut, Terminal, LayoutDashboard, Zap, Award, Activity, 
  MessageSquare, Layers, ShieldCheck, Cpu, Bell, Code, 
  ChevronRight, Calendar, Users, FolderGit2, CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user, logoutSession } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("overview");

  const recentNotifications = [
    { type: "invite", message: "Team Delta-4 requested a architecture validation check.", time: "4m ago" },
    { type: "milestone", message: "Successfully logged +50 XP for daily compiler streak alignment.", time: "1h ago" },
    { type: "system", message: "Ecosystem sandbox environment update deployed safely.", time: "3h ago" }
  ];

  const ongoingProjects = [
    { id: "INDOSM-91", name: "Custom Reverse-Proxy Mesh Router", status: "Active Dev", type: "Core Dev" },
    { id: "INDOSM-94", name: "Sovereign JWT Validation Filter", status: "Staged", type: "Security Engine" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT ARCHITECTURE COLUMN: STRIPE/LINEAR INSPIRED APP SIDEBAR */}
        <div className="lg:col-span-3 bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">// Operator Node</span>
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-black text-white truncate">{user?.name || "BUILDER"}</h3>
            </div>
            <div className="inline-block px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-md text-[9px] font-mono text-neutral-400 uppercase tracking-wider">
              {user?.role || "Student"} Cluster
            </div>
          </div>

          <div className="h-[1px] bg-white/5" />

          <div className="space-y-1">
            <span className="text-[9px] font-mono text-neutral-600 uppercase tracking-widest block px-3 mb-2">Workspace Navigation</span>
            {[
              { id: "overview", label: "Central Operations", icon: LayoutDashboard },
              { id: "projects", label: "My Project Stacks", icon: FolderGit2 },
              { id: "learning", label: "Assigned Tracks", icon: Code },
              { id: "teams", label: "Active Team Nodes", icon: Users }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-mono text-xs transition-all ${
                    activeTab === tab.id 
                      ? "bg-white text-black font-bold" 
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="h-[1px] bg-white/5" />

          <button 
            onClick={logoutSession}
            className="w-full py-3 bg-red-950/20 border border-red-900/20 text-red-400 font-mono text-xs rounded-xl hover:bg-red-950/40 transition-colors flex items-center justify-center gap-2"
          >
            <LogOut className="w-3.5 h-3.5" />
            Disconnect Terminal
          </button>
        </div>

        {/* RIGHT ARCHITECTURE COLUMN: DYNAMIC TELEMETRY VIEWPORTS */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* HEADER HUB WITH RUNTIME XP METRICS */}
          <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-[28px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden">
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-emerald-400 tracking-widest uppercase block">● System Sync Stable</span>
              <h2 className="text-2xl font-black text-white tracking-tight">Ecosystem Operations Console</h2>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono w-full sm:w-auto">
              <div className="p-3 bg-black border border-white/5 rounded-xl text-center flex-1 sm:flex-initial min-w-[100px]">
                <span className="text-neutral-500 block text-[9px] uppercase mb-0.5">Daily Streak</span>
                <span className="text-white font-bold text-sm">🔥 {user?.streak || 1} Days</span>
              </div>
              <div className="p-3 bg-black border border-white/5 rounded-xl text-center flex-1 sm:flex-initial min-w-[100px]">
                <span className="text-neutral-500 block text-[9px] uppercase mb-0.5">Accumulated XP</span>
                <span className="text-white font-bold text-sm">⚡ {user?.xp || 100}</span>
              </div>
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="grid md:grid-cols-12 gap-8">
              
              {/* PRIMARY VIEWPORT SUBFOLD: LINEAR TASK BOARD AND INCUBATOR CARDS */}
              <div className="md:col-span-8 space-y-6">
                <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <h4 className="text-xs font-mono text-neutral-300 uppercase tracking-wider flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-neutral-400" />
                      Active Task Matrix Sprints
                    </h4>
                    <Link href="/native-projects" className="text-[10px] font-mono text-neutral-500 hover:text-white transition-colors">
                      Open Kanban Board &gt;
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {ongoingProjects.map((project) => (
                      <div key={project.id} className="p-4 bg-black border border-white/5 rounded-xl flex items-center justify-between hover:border-white/10 transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-[10px] font-mono">
                            <span className="text-neutral-500">{project.id}</span>
                            <span className="text-neutral-600">•</span>
                            <span className="text-neutral-400">{project.type}</span>
                          </div>
                          <h5 className="text-xs font-bold text-white tracking-tight">{project.name}</h5>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono border ${
                          project.status === "Staged" 
                            ? "bg-emerald-950/30 border-emerald-900/50 text-emerald-400" 
                            : "bg-blue-950/30 border-blue-900/50 text-blue-400"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RUNTIME CORE STATUS DOCK */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl space-y-2">
                    <Cpu className="w-5 h-5 text-neutral-400 mb-1" />
                    <h5 className="text-xs font-bold text-white font-mono">Interactive Run Nodes</h5>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">Secure isolated browser sandboxes are allocated and waiting for source file updates.</p>
                  </div>
                  <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl space-y-2">
                    <Activity className="w-5 h-5 text-neutral-400 mb-1" />
                    <h5 className="text-xs font-bold text-white font-mono">Compiler Health Telemetry</h5>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">Structural check metrics normal. Dynamic error validation scripts operating smoothly.</p>
                  </div>
                </div>
              </div>

              {/* SECONDARY VIEWPORT SUBFOLD: REAL-TIME INTERNAL NOTIFICATION FEED */}
              <div className="md:col-span-4 bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 space-y-4">
                <h4 className="text-xs font-mono text-neutral-300 uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-3">
                  <Bell className="w-4 h-4 text-neutral-400" />
                  Ecosystem Alerts
                </h4>

                <div className="space-y-3">
                  {recentNotifications.map((notif, idx) => (
                    <div key={idx} className="p-3.5 bg-black border border-white/5 rounded-xl space-y-1 hover:border-white/10 transition-colors">
                      <p className="text-[11px] text-neutral-300 leading-normal font-medium">{notif.message}</p>
                      <span className="text-[9px] font-mono text-neutral-600 block text-right">{notif.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeTab !== "overview" && (
            <div className="p-12 bg-[#0a0a0a] border border-white/5 rounded-2xl text-center space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
                <Layers className="w-5 h-5 text-neutral-400" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-white font-mono uppercase tracking-wider">Submodule Loading Interface</h5>
                <p className="text-[11px] text-neutral-500 max-w-xs mx-auto">Click on central operations sidebar to display your main tracking matrix charts.</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}