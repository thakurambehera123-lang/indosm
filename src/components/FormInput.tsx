"use client";

import React from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function FormInput({ label, error, ...props }: FormInputProps) {
  return (
    <div className="space-y-1.5 text-left w-full">
      <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 bg-black border rounded-xl text-xs text-white placeholder-slate-600 transition-all duration-200 outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 ${
          error ? "border-red-500/50 focus:border-red-500/60 focus:ring-red-500/10" : "border-white/5"
        }`}
      />
      {error && (
        <p className="text-[10px] font-mono text-red-400 mt-1 animate-pulse">
          ⚡ {error}
        </p>
      )}
    </div>
  );
}