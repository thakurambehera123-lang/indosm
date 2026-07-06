"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Shield, Cpu, Layout, 
  Terminal, Search, Plus, CheckCircle2, X 
} from "lucide-react";
import FormInput from "@/components/FormInput";

interface TeamMember {
  name: string;
  role: string;
  status: "Online" | "Offline" | "Compiling";
  xp: number;
}

interface TeamNode {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  maxMembers: number;
  tags: string[];
  members: TeamMember[];
}

export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamDesc, setNewTeamDesc] = useState("");
  const [formError, setFormError] = useState("");

  const [teams, setTeams] = useState<TeamNode[]>([
    {
      id: "TEAM-DELTA-4",
      name: "Delta-4 Web3 Mesh Router",
      description: "Assembling an ultra-low latency DHT mesh network router layer inside standard browser edge contexts.",
      memberCount: 3,
      maxMembers: 5,
      tags: ["Next.js", "Rust", "WASM", "WebRTC"],
      members: [
        { name: "ANIKET_ARCH", role: "Lead Architect", status: "Compiling", xp: 1420 },
        { name: "ROHAN_DEV", role: "Backend Engineer", status: "Online", xp: 980 },
        { name: "PRIYA_UX", role: "UI Engineer", status: "Online", xp: 1150 }
      ]
    },
    {
      id: "TEAM-CYPHER",
      name: "Sovereign Auth Matrix",
      description: "Developing decentralized, zero-knowledge verification proofs for modern open-source student ecosystem access tokens.",
      memberCount: 2,
      maxMembers: 4,
      tags: ["Cryptography", "ZKP", "Go", "TypeScript"],
      members: [
        { name: "KABIR_CRYPT", role: "Security Lead", status: "Online", xp: 2100 },
        { name: "MEERA_CORE", role: "Systems Engineer", status: "Offline", xp: 850 }
      ]
    }
  ]);

  const handleCreateTeam = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!newTeamName.trim()) {
      setFormError("Team identity label field cannot be executed empty.");
      return;
    }
    if (!newTeamDesc.trim()) {
      setFormError("Architectural scope definition description is required.");
      return;
    }

    const newTeam: TeamNode = {
      id: `TEAM-${newTeamName.substring(0, 4).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      name: newTeamName,
      description: newTeamDesc,
      memberCount: 1,
      maxMembers: 6,
      tags: ["Next.js", "Tailwind v4"],
      members: [
        { name: "CREATOR_NODE", role: "Lead Architect", status: "Online", xp: 100 }
      ]
    };

    setTeams([newTeam, ...teams]);
    setNewTeamName("");
    setNewTeamDesc("");
    setShowCreateModal(false);
  };

  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      
      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/[0.06] pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Users className="w-4 h-4 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Team Allocation Hub</h2>
          </div>
          <p className="text-xs text-slate-400">Assemble sovereign groups, manage engineering hierarchies, and target milestones together.</p>
        </div>

        <button 
          onClick={() => setShowCreateModal(true)}
          className="premium-btn-primary px-5 py-3 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Initialize Team Node
        </button>
      </div>

      {/* SEARCH TRACKER BAR */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter cluster teams by technology or stack..."
          className="w-full pl-12 pr-4 py-3 bg-[#0B0F19]/60 border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500/30 transition-colors focus:ring-2 focus:ring-indigo-500/10"
        />
      </div>

      {/* TEAM ARCHITECTURE GRID */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredTeams.map((team) => (
          <div key={team.id} className="premium-card rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">{team.id}</span>
                  <h4 className="text-lg font-black text-white">{team.name}</h4>
                </div>
                <span className="px-2.5 py-1 bg-white/[0.03] border border-white/5 rounded-lg text-[10px] font-mono text-slate-400">
                  ⚡ {team.memberCount} / {team.maxMembers} Nodes Active
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{team.description}</p>
              <div className="flex flex-wrap gap-2">
                {team.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-slate-900 border border-white/5 rounded text-[10px] font-mono text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/[0.04] pt-4 space-y-3">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">Active Operations Roster</span>
              <div className="grid sm:grid-cols-2 gap-3">
                {team.members.map((member, idx) => (
                  <div key={idx} className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between">
                    <div className="space-y-0.5 min-w-0">
                      <h5 className="text-xs font-bold text-white font-mono truncate">{member.name}</h5>
                      <span className="text-[10px] text-slate-500 block">{member.role}</span>
                    </div>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      member.status === "Compiling" ? "bg-amber-400 animate-pulse" :
                      member.status === "Online" ? "bg-emerald-400" : "bg-slate-600"
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CREATE TEAM LEDGER MODAL DIALOG */}
      <AnimatePresence>
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-[#0B0F19] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-6 relative animate-fade-in"
            >
              <button 
                onClick={() => { setShowCreateModal(false); setFormError(""); }}
                className="absolute top-4 right-4 p-1 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-indigo-400" />
                  Spawn Workspace Cluster Team
                </h3>
                <p className="text-xs text-slate-400">Initialize a custom infrastructure pipeline context to house collaborative codes.</p>
              </div>

              <form onSubmit={handleCreateTeam} className="space-y-4">
                {/* Reusable Core Validation Input Component */}
                <FormInput 
                  label="Team Identity Label"
                  type="text"
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                  placeholder="e.g. Cypherpunk Data Core"
                  error={formError && !newTeamName ? "Name directive missing" : undefined}
                />

                <div className="space-y-1.5 text-left w-full">
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">Architectural Scope Definition</label>
                  <textarea 
                    value={newTeamDesc}
                    onChange={(e) => setNewTeamDesc(e.target.value)}
                    rows={3}
                    placeholder="Provide detailed mapping descriptors regarding team target branches..."
                    className={`w-full px-4 py-3 bg-black border rounded-xl text-xs text-white focus:outline-none placeholder-slate-600 resize-none transition-all duration-200 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 ${
                      formError && !newTeamDesc ? "border-red-500/50" : "border-white/5"
                    }`}
                  />
                </div>

                {formError && (
                  <p className="text-[10px] font-mono text-red-400 bg-red-950/20 border border-red-900/40 px-3 py-2 rounded-lg">
                    ⚡ Error: {formError}
                  </p>
                )}

                <button 
                  type="submit"
                  className="w-full premium-btn-primary py-3.5 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
                >
                  Confirm Ledger Record Initialization
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}