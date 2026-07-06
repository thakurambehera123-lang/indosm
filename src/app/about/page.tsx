"use client";

import React from "react";
import { Info } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-4 text-center">
      <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto">
        <Info className="w-6 h-6 text-indigo-400" />
      </div>
      <h2 className="text-xl font-black text-white tracking-tight">About INDOSM Node</h2>
      <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
        Decentralized core workspace sandbox and developer telemetry mapping engine.
      </p>
    </div>
  );
}