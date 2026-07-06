"use client";

import { motion } from "framer-motion";

export default function GlowCanvas() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0A0A0C]">
      {/* Top Ambient Lighting Layer */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-luxury-radial pointer-events-none" />

      {/* Floating High-End Soft Gradient Orb */}
      <motion.div 
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-15%] left-[15%] w-[900px] h-[700px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-[140px] rounded-full pointer-events-none"
      />

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
    </div>
  );
}