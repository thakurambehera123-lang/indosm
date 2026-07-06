"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, Plus, Kanban, BarChart3, Terminal, 
  Layers, CheckCircle2, Circle, AlertCircle, Clock, 
  ArrowUpRight, User, Tag, ShieldCheck, Cpu 
} from "lucide-react";

type TaskStatus = "Backlog" | "Todo" | "In_Progress" | "Done";
type TaskPriority = "Low" | "Medium" | "High";

interface SprintTask {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string;
  tags: string[];
}

interface ProjectNode {
  id: string;
  name: string;
  description: string;
  deploymentStatus: "Production" | "Staging" | "Offline";
  sprintVersion: string;
  tasks: SprintTask[];
}

export default function ProjectsPage() {
  const [activeView, setActiveView] = useState<"kanban" | "overview">("kanban");
  const [showTaskModal, setShowTaskModal] = useState(false);
  
  const [taskTitle, setTaskTitle] = useState("");
  const [taskStatus, setTaskStatus] = useState<TaskStatus>("Todo");
  const [taskPriority, setTaskPriority] = useState<TaskPriority>("Medium");
  const [taskAssignee, setTaskAssignee] = useState("");

  const [project, setProject] = useState<ProjectNode>({
    id: "INDOSM-PROJ-09",
    name: "Distributed Memory Caching Layer",
    description: "Architecting a localized, memory-mapped shared key-value cache buffer running inside custom cluster sandboxes.",
    deploymentStatus: "Staging",
    sprintVersion: "Sprint v2.4-Alpha",
    tasks: [
      { id: "ISM-101", title: "Configure IPC Shared Memory Segments", status: "In_Progress", priority: "High", assignee: "ANIKET_ARCH", tags: ["Systems", "C++"] },
      { id: "ISM-102", title: "Build Zero-Allocation JSON Parser Buffer", status: "Todo", priority: "High", assignee: "ROHAN_DEV", tags: ["Core", "JSON"] },
      { id: "ISM-103", title: "Design Custom Dev Shell Telemetry Overlay", status: "Backlog", priority: "Medium", assignee: "PRIYA_UX", tags: ["UI/UX", "WebGL"] },
      { id: "ISM-104", title: "Audit Cryptographic Token Signing Paths", status: "Done", priority: "High", assignee: "KABIR_CRYPT", tags: ["Security"] }
    ]
  });

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle) return;

    const newTask: SprintTask = {
      id: `ISM-${100 + project.tasks.length + 1}`,
      title: taskTitle,
      status: taskStatus,
      priority: taskPriority,
      assignee: taskAssignee || "UNASSIGNED",
      tags: ["Feature"]
    };

    setProject({
      ...project,
      tasks: [...project.tasks, newTask]
    });

    setTaskTitle("");
    setTaskAssignee("");
    setShowTaskModal(false);
  };

  const updateTaskStatus = (taskId: string, currentStatus: TaskStatus) => {
    const statusOrder: TaskStatus[] = ["Backlog", "Todo", "In_Progress", "Done"];
    const nextIndex = (statusOrder.indexOf(currentStatus) + 1) % statusOrder.length;
    const nextStatus = statusOrder[nextIndex];

    setProject({
      ...project,
      tasks: project.tasks.map(t => t.id === taskId ? { ...t, status: nextStatus } : t)
    });
  };

  const columns: { id: TaskStatus; label: string; icon: any; color: string }[] = [
    { id: "Backlog", label: "Backlog Cache", icon: AlertCircle, color: "text-slate-500 bg-slate-500/10 border-slate-500/20" },
    { id: "Todo", label: "Ready to Mount", icon: Circle, color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
    { id: "In_Progress", label: "Active Compiling", icon: Clock, color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
    { id: "Done", label: "Deployed & Verified", icon: CheckCircle2, color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-6 sm:space-y-10">
      
      {/* ENTERPRISE PROJECT CONSOLE HEADER - Adaptive Grid */}
      <div className="premium-card rounded-2xl p-5 sm:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative overflow-hidden">
        <div className="space-y-3 w-full lg:w-auto">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[9px] sm:text-[10px] font-mono text-indigo-400 tracking-widest uppercase">// System Cluster Project Node</span>
            <span className="px-2 py-0.5 rounded border border-amber-800 bg-amber-950/40 text-amber-400 text-[8px] sm:text-[9px] font-mono uppercase tracking-wider">
              ● Live {project.deploymentStatus} Rails
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight break-words">{project.name}</h2>
          <p className="text-[11px] sm:text-xs text-slate-400 max-w-2xl leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 text-xs font-mono w-full lg:w-auto">
          <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex-1 sm:flex-initial min-w-[130px]">
            <span className="text-slate-500 block text-[8px] sm:text-[9px] uppercase mb-0.5">Active Target</span>
            <span className="text-white font-bold text-xs">{project.sprintVersion}</span>
          </div>
          
          <button 
            onClick={() => setShowTaskModal(true)}
            className="premium-btn-primary px-5 py-3.5 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
          >
            <Plus className="w-4 h-4" />
            Dispatch Sprint Issue
          </button>
        </div>
      </div>

      {/* MATRIX VIEW SWITCHER TRACK */}
      <div className="flex justify-between items-center border-b border-white/[0.06] pb-4">
        <div className="flex gap-2 p-1 bg-black/40 border border-white/5 rounded-xl w-full sm:w-auto">
          <button 
            onClick={() => setActiveView("kanban")}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg font-mono text-[11px] sm:text-xs flex items-center justify-center gap-2 transition-all ${
              activeView === "kanban" ? "bg-white text-black font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            <Kanban className="w-3.5 h-3.5" />
            Linear Kanban
          </button>
          <button 
            onClick={() => setActiveView("overview")}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg font-mono text-[11px] sm:text-xs flex items-center justify-center gap-2 transition-all ${
              activeView === "overview" ? "bg-white text-black font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            Metrics Telemetry
          </button>
        </div>
      </div>

      {/* RENDER TARGET LAYOUTS - Responsive Kanban Matrix */}
      {activeView === "kanban" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {columns.map((col) => {
            const columnTasks = project.tasks.filter(t => t.status === col.id);
            const IconComponent = col.icon;
            return (
              <div key={col.id} className="space-y-3 sm:space-y-4">
                <div className={`p-3 border rounded-xl flex items-center justify-between font-mono text-[10px] sm:text-[11px] font-bold tracking-wide ${col.color}`}>
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4" />
                    <span>{col.label}</span>
                  </div>
                  <span className="px-1.5 py-0.5 bg-black/40 rounded text-[9px]">{columnTasks.length}</span>
                </div>

                <div className="space-y-3 sm:space-y-4 min-h-[100px] md:min-h-[400px]">
                  {columnTasks.map((task) => (
                    <div 
                      key={task.id}
                      onClick={() => updateTaskStatus(task.id, task.status)}
                      className="premium-card rounded-xl p-4 space-y-3 cursor-pointer border border-white/5 hover:border-indigo-500/20"
                    >
                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-500">
                        <span>{task.id}</span>
                        <span className={`px-1.5 py-0.5 rounded uppercase tracking-wider ${
                          task.priority === "High" ? "bg-red-950/30 text-red-400 border border-red-900/40" :
                          task.priority === "Medium" ? "bg-amber-950/30 text-amber-400 border border-amber-900/40" : "bg-slate-900 text-slate-400"
                        }`}>
                          {task.priority}
                        </span>
                      </div>

                      <h4 className="text-xs font-bold text-white leading-snug tracking-tight">
                        {task.title}
                      </h4>

                      <div className="flex items-center justify-between pt-2 border-t border-white/[0.03] text-[10px] font-mono">
                        <div className="flex items-center gap-1.5 text-slate-400 min-w-0">
                          <User className="w-3 h-3 text-slate-500 flex-shrink-0" />
                          <span className="truncate max-w-[70px]">{task.assignee}</span>
                        </div>

                        <div className="flex gap-1 flex-wrap justify-end">
                          {task.tags.map((tag, i) => (
                            <span key={i} className="px-1.5 py-0.2 bg-black/60 border border-white/5 rounded text-[8px] text-slate-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {columnTasks.length === 0 && (
                    <div className="h-20 sm:h-24 border border-dashed border-white/5 rounded-xl flex items-center justify-center text-[10px] font-mono text-slate-600">
                      Empty Segment Buffer
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="premium-card p-6 rounded-xl space-y-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <h4 className="text-sm font-bold text-white font-mono">Total Allocation Coverage</h4>
            <p className="text-2xl font-black text-white">
              {Math.round((project.tasks.filter(t => t.status === "Done").length / project.tasks.length) * 100)}%
            </p>
            <p className="text-[11px] text-slate-400 font-mono">Sprint metric pipeline compiled successfully.</p>
          </div>
        </div>
      )}

      {/* DISPATCH TASK DIALOG PORTAL MODAL - Mobile Friendly Padding */}
      <AnimatePresence>
        {showTaskModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="w-full max-w-md bg-[#0B0F19] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-5 relative"
            >
              <div className="space-y-1">
                <h3 className="text-sm font-mono text-white font-black uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  Mount Sprint Issue Token
                </h3>
              </div>

              <form onSubmit={handleCreateTask} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">Issue Metric Context</label>
                  <input 
                    type="text"
                    required
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    placeholder="e.g. Implement WebRTC Stream Session Handshake"
                    className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500/30"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">Initial Status</label>
                    <select 
                      value={taskStatus} 
                      onChange={(e) => setTaskStatus(e.target.value as TaskStatus)}
                      className="w-full px-3 py-2.5 bg-black border border-white/5 rounded-xl text-xs text-white font-mono focus:outline-none"
                    >
                      <option value="Backlog">Backlog</option>
                      <option value="Todo">Todo</option>
                      <option value="In_Progress">In Progress</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">Priority Weight</label>
                    <select 
                      value={taskPriority} 
                      onChange={(e) => setTaskPriority(e.target.value as TaskPriority)}
                      className="w-full px-3 py-2.5 bg-black border border-white/5 rounded-xl text-xs text-white font-mono focus:outline-none"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[9px] font-mono text-slate-400 uppercase tracking-widest">Target Core Node Assignee</label>
                  <input 
                    type="text"
                    value={taskAssignee}
                    onChange={(e) => setTaskAssignee(e.target.value)}
                    placeholder="e.g. ANIKET_ARCH"
                    className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl text-xs text-white font-mono focus:outline-none focus:border-indigo-500/30"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    type="button" 
                    onClick={() => setShowTaskModal(false)}
                    className="flex-1 py-3 bg-slate-900 border border-white/5 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors"
                  >
                    Abort
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 premium-btn-primary py-3 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md"
                  >
                    Inject Token
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}