"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bell, CheckCircle2, AlertCircle, FolderGit2, 
  Users, BookOpen, Clock, Settings, Filter 
} from "lucide-react";

type EventType = "project" | "team" | "learning" | "system";

interface ActivityEvent {
  id: string;
  type: EventType;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}

export default function ActivityFeedPage() {
  const [filter, setFilter] = useState<EventType | "all">("all");
  
  const [events] = useState<ActivityEvent[]>([
    { id: "EVT-01", type: "project", title: "Project: Distributed Memory Cache", description: "Task [ISM-101] marked as 'Done' by ANIKET_ARCH.", timestamp: "2m ago", read: false },
    { id: "EVT-02", type: "team", title: "Team: Delta-4 Mesh", description: "You have been invited to collaborate on the Web3 Mesh Router.", timestamp: "1h ago", read: false },
    { id: "EVT-03", type: "learning", title: "Learning: Systems Architecture", description: "Phase 02 [WebRTC] verified. 850 XP added to total.", timestamp: "4h ago", read: true },
    { id: "EVT-04", type: "system", title: "Environment Update", description: "Cluster node [cluster-04] maintenance cycle complete.", timestamp: "6h ago", read: true },
  ]);

  const filteredEvents = filter === "all" ? events : events.filter(e => e.type === filter);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end border-b border-white/[0.06] pb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
            <Bell className="w-6 h-6 text-indigo-400" />
            Global Activity Stream
          </h2>
          <p className="text-xs text-slate-400">Unified telemetry logs for all workspace modules.</p>
        </div>
        
        <div className="flex gap-2">
          {["all", "project", "team", "learning", "system"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as EventType | "all")}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all ${
                filter === cat ? "bg-white text-black font-bold" : "bg-white/[0.03] text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FEED LIST */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`premium-card p-5 rounded-xl border flex gap-4 ${
                !event.read ? "border-indigo-500/20 bg-indigo-950/[0.02]" : "border-white/5 bg-black/20"
              }`}
            >
              <div className={`mt-1 p-2 rounded-lg ${
                event.type === "project" ? "bg-blue-950/30 text-blue-400" :
                event.type === "team" ? "bg-purple-950/30 text-purple-400" :
                event.type === "learning" ? "bg-emerald-950/30 text-emerald-400" : "bg-slate-900 text-slate-400"
              }`}>
                {event.type === "project" ? <FolderGit2 className="w-4 h-4" /> :
                 event.type === "team" ? <Users className="w-4 h-4" /> :
                 event.type === "learning" ? <BookOpen className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-xs font-bold text-white">{event.title}</h4>
                  <span className="text-[9px] font-mono text-slate-500">{event.timestamp}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{event.description}</p>
              </div>

              {!event.read && (
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredEvents.length === 0 && (
          <div className="p-12 text-center text-slate-600 border border-dashed border-white/5 rounded-2xl">
            <p className="text-[11px] font-mono">No active events in stream channel.</p>
          </div>
        )}
      </div>

    </div>
  );
}