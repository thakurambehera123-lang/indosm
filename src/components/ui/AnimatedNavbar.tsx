"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Compass, Layers, Award, ChevronDown } from "lucide-react";

export default function AnimatedNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { name: "Ecosystem", icon: Layers, items: ["About Platform", "Ecosystem Roadmap", "Platform Metrics"] },
    { name: "Workspace", icon: Compass, items: ["Community Hub", "Native Projects", "Learning Tracks"] },
    { name: "Operations", icon: Award, items: ["Global Leaderboard", "Platform Sandboxes", "Incubations"] }
  ];

  return (
    <nav 
      onMouseLeave={() => setActiveDropdown(null)}
      className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0A0A0C]/75 backdrop-blur-md px-8 py-3.5 flex items-center justify-between transition-all duration-300"
    >
      <div className="flex items-center gap-12">
        <Link href="/" className="text-sm font-black tracking-widest text-[#F8FAFC] flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Terminal className="w-4 h-4 text-indigo-400" />
          INDOSM
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#94A3B8]">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              className="relative py-2 cursor-pointer hover:text-[#F8FAFC] flex items-center gap-1 transition-colors"
              onMouseEnter={() => setActiveDropdown(item.name)}
            >
              <span>{item.name}</span>
              <ChevronDown className="w-3 h-3 transition-transform duration-200" style={{ transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              
              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.12, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-1.5 w-60 bg-[#121218]/95 backdrop-blur-xl border border-white/[0.06] rounded-xl p-3 shadow-premium z-50"
                  >
                    <ul className="space-y-0.5">
                      {item.items.map((subItem) => (
                        <li key={subItem}>
                          <Link 
                            href={`/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-3 py-2 text-[11px] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.03] rounded-lg transition-all"
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/auth/login" className="text-xs font-semibold text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
          Console Login
        </Link>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link 
            href="/auth/signup" 
            className="px-4 py-2 bg-brand-gradient text-[#F8FAFC] font-bold text-[11px] tracking-wider uppercase rounded-lg shadow-glow-sm hover:shadow-glow-md transition-all duration-300 block"
          >
            Initialize Account
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}