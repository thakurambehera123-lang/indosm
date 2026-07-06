"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, GraduationCap, Trophy, ChevronRight, CheckCircle2, 
  Circle, Lock, BookOpen, Clock, Play, Award, Sparkles 
} from "lucide-react";

interface RoadmapModule {
  id: string;
  title: string;
  duration: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  lessons: string[];
}

interface TrackNode {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedHours: number;
  unlockedXp: number;
  modules: RoadmapModule[];
}

export default function LearningTracksPage() {
  const [selectedTrackId, setSelectedTrackId] = useState<string>("TRACK-SYS-01");
  const [activeModuleId, setActiveModuleId] = useState<string | null>("MOD-01");

  // Production-grade educational matrix data structures
  const [tracks, setTracks] = useState<TrackNode[]>([
    {
      id: "TRACK-SYS-01",
      title: "Systems Architecture & Low-Level Engineering",
      description: "Master modern production networking, browser WASM runtimes, memory allocations, and optimized distributed networks.",
      difficulty: "Advanced",
      estimatedHours: 48,
      unlockedXp: 850,
      modules: [
        {
          id: "MOD-01",
          title: "Introduction to IPC & Shared Memory Allocations",
          duration: "6 hrs",
          isUnlocked: true,
          isCompleted: true,
          lessons: ["Understanding POSIX Memory Mappings", "Handling Race Conditions with Mutexes", "Allocating Memory Arenas in Rust"]
        },
        {
          id: "MOD-02",
          title: "WebRTC DataMesh & DHT Mesh Routers",
          duration: "14 hrs",
          isUnlocked: true,
          isCompleted: false,
          lessons: ["STUN/TURN Signaling Protocols", "Building a Kademlia DHT Pattern", "Edge Data Multi-plexing Flows"]
        },
        {
          id: "MOD-03",
          title: "Custom Compiler Optimization & WebAssembly Hooks",
          duration: "28 hrs",
          isUnlocked: false,
          isCompleted: false,
          lessons: ["AST Tokenizer Parsing Layouts", "LLVM IR Generation Strategies", "Streaming WASM Execution Buffers"]
        }
      ]
    },
    {
      id: "TRACK-UI-02",
      title: "High-Performance Graphics & UI Systems",
      description: "Deep dive into reactive DOM layout layers, GPU-accelerated canvas components, and frame orchestration pipelines.",
      difficulty: "Intermediate",
      estimatedHours: 32,
      unlockedXp: 500,
      modules: [
        {
          id: "MOD-04",
          title: "WebGL Core Foundations & Pixel Shader Shaders",
          duration: "12 hrs",
          isUnlocked: true,
          isCompleted: false,
          lessons: ["Matrix Transformations 101", "Writing Fragment Shaders", "GPU Context Performance Profiling"]
        }
      ]
    }
  ]);

  const activeTrack = tracks.find(t => t.id === selectedTrackId) || tracks[0];

  const handleToggleLessonComplete = (moduleId: string) => {
    setTracks(tracks.map(track => {
      return {
        ...track,
        modules: track.modules.map(mod => {
          if (mod.id === moduleId) {
            const nextCompleted = !mod.isCompleted;
            return { ...mod, isCompleted: nextCompleted };
          }
          // Dynamic cascade: Automatically unlock the subsequent module if the current one is completed
          const currentTrackIndex = track.modules.findIndex(m => m.id === moduleId);
          const targetsNextModule = track.modules[currentTrackIndex + 1]?.id === mod.id;
          if (targetsNextModule && !mod.isUnlocked) {
            return { ...mod, isUnlocked: true };
          }
          return mod;
        })
      };
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      
      {/* SECTION HEADER BLOCK */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/[0.06] pb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Interactive Learning Tracks</h2>
          </div>
          <p className="text-xs text-slate-400">Advance through custom engineering curricula, unlock backend sandboxes, and earn platform milestones.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: CURRICULUM SELECTOR MATRIX */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block px-2">Available Engineering Streams</span>
          
          <div className="space-y-3">
            {tracks.map((track) => (
              <div
                key={track.id}
                onClick={() => {
                  setSelectedTrackId(track.id);
                  setActiveModuleId(track.modules[0]?.id || null);
                }}
                className={`premium-card p-5 rounded-xl cursor-pointer text-left relative overflow-hidden border ${
                  selectedTrackId === track.id 
                    ? "border-indigo-500/30 bg-indigo-950/10" 
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono border ${
                    track.difficulty === "Advanced" ? "bg-red-950/30 border-red-900/40 text-red-400" : "bg-amber-950/30 border-amber-900/40 text-amber-400"
                  }`}>
                    {track.difficulty}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{track.estimatedHours} Hours</span>
                </div>
                <h4 className="text-xs font-black text-white mb-1.5 tracking-tight">{track.title}</h4>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">{track.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: ACTIVE SYLLABUS STEP TIMELINE VIEWPORT */}
        <div className="lg:col-span-8 space-y-6">
          <div className="premium-card rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/[0.04] pb-5">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest">// Operations Roadmap Syllabus</span>
                <h3 className="text-lg font-black text-white">{activeTrack.title}</h3>
              </div>
              <div className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-xl font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                <span>+{activeTrack.unlockedXp} XP Pool</span>
              </div>
            </div>

            {/* SYLLABUS STEPS TRACKER */}
            <div className="space-y-4">
              {activeTrack.modules.map((mod, idx) => {
                const isExpanded = activeModuleId === mod.id;
                return (
                  <div 
                    key={mod.id} 
                    className={`border rounded-xl transition-all overflow-hidden ${
                      !mod.isUnlocked ? "border-white/5 opacity-50 bg-black/10" :
                      isExpanded ? "border-indigo-500/20 bg-black/40 shadow-premium" : "border-white/5 bg-black/20 hover:border-white/10"
                    }`}
                  >
                    {/* Module Meta Bar Title Trigger */}
                    <div 
                      onClick={() => mod.isUnlocked && setActiveModuleId(isExpanded ? null : mod.id)}
                      className={`p-4 flex items-center justify-between cursor-pointer select-none ${!mod.isUnlocked ? "cursor-not-allowed" : ""}`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="flex-shrink-0">
                          {!mod.isUnlocked ? <Lock className="w-4 h-4 text-slate-600" /> :
                           mod.isCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> :
                           <Circle className="w-4 h-4 text-indigo-400 animate-pulse" />}
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <span className="text-[9px] font-mono text-slate-500 block">PHASE 0{idx + 1} // {mod.duration}</span>
                          <h4 className="text-xs font-bold text-white tracking-tight truncate">{mod.title}</h4>
                        </div>
                      </div>
                      {mod.isUnlocked && <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? "rotate-90" : ""}`} />}
                    </div>

                    {/* EXPANDED LESSON DETAILS */}
                    <AnimatePresence>
                      {isExpanded && mod.isUnlocked && (
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="border-t border-white/[0.04] bg-black/60 font-mono text-xs overflow-hidden"
                        >
                          <div className="p-4 space-y-4">
                            <div className="space-y-2">
                              <span className="text-[9px] text-slate-500 uppercase tracking-wider block">[Syllabus Core Items]</span>
                              {mod.lessons.map((lesson, i) => (
                                <div key={i} className="flex items-center gap-2.5 text-[11px] text-slate-300 py-1">
                                  <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                                  <span>{lesson}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-2 flex justify-end">
                              <button
                                onClick={() => handleToggleLessonComplete(mod.id)}
                                className={`px-4 py-2 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all ${
                                  mod.isCompleted 
                                    ? "bg-emerald-950/40 border border-emerald-800 text-emerald-400 hover:bg-emerald-900/30" 
                                    : "premium-btn-primary text-white shadow-md"
                                }`}
                              >
                                {mod.isCompleted ? "✓ Phase Target Satisfied" : "Initialize Verification Loop"}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}