"use client";

import { useState } from "react";
import { useAuth, UserRole } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cpu, Rocket, UserCheck, Key, Mail, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const { loginSession, verifyOtpToken } = useAuth();
  const router = useRouter();

  const [role, setRole] = useState<UserRole>("Student");
  const [email, setEmail] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [otp, setOtp] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleRoleSelection = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid institution email address.");
      return;
    }
    setErrorMessage("");
    setStep(2);
  };

  const handleVerificationSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (otp.length < 6) {
      setErrorMessage("Cryptographic pin must be exactly 6 digits.");
      return;
    }
    setErrorMessage("");
    setIsProcessing(true);

    try {
      const isValid = await verifyOtpToken(otp);
      if (isValid) {
        // Direct absolute runtime authorization injection
        await loginSession(email, role);
        
        // Force state parameters synchronization past edge middleware blocks
        document.cookie = "indosm_edge_session=true; path=/; max-age=86400; SameSite=Strict";
        
        // Relocate screen straight into dashboard interface context
        window.location.href = "/dashboard";
      } else {
        setErrorMessage("Invalid registration token validation.");
      }
    } catch (err) {
      setErrorMessage("Platform handshake dropped.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 py-16 bg-[#050505] relative">
      <div className="w-full max-w-xl bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.9)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-white to-blue-500" />
        
        <div className="space-y-2 mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white">
            Initialize Sovereign Account
          </h2>
          <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
            NODE REGISTRATION PROTOCOL // PHASE 02
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-xs font-mono text-red-400">
            [ERROR] : {errorMessage}
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Communication Entry Node (Email)
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-4 h-4 text-neutral-600" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="builder@university.edu.in"
                    className="w-full pl-12 pr-4 py-4 bg-black border border-white/5 rounded-xl font-mono text-xs text-white focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Assign Cluster Context (Platform Role)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Student", desc: "Execute sandbox layers, assemble dev teams, log streaks.", icon: Cpu },
                    { name: "Mentor", desc: "Audit architecture branches, evaluate sprints, direct labs.", icon: ShieldCheck },
                    { name: "Founder", desc: "Deploy real problems, acquire platform talent pools.", icon: Rocket },
                    { name: "Admin", desc: "Orchestrate telemetry, configure global clusters.", icon: UserCheck }
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        onClick={() => setRole(item.name as UserRole)}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative ${
                          role === item.name
                            ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                            : "bg-black text-neutral-400 border-white/5 hover:border-white/10"
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-3 ${role === item.name ? "text-black" : "text-white"}`} />
                        <h4 className="text-sm font-bold tracking-tight mb-1">{item.name}</h4>
                        <p className="text-[11px] leading-tight opacity-70">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleRoleSelection}
                className="w-full py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl transition-all hover:bg-neutral-200"
              >
                Proceed to Verification Gate &gt;
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-8"
            >
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-xs font-mono text-neutral-400 space-y-1">
                <p>Node Target: <span className="text-white">{email}</span></p>
                <p>Config Role: <span className="text-white">{role}</span></p>
              </div>

              <div className="space-y-3">
                <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Cryptographic Token (6-Digit OTP)
                </label>
                <div className="relative">
                  <Key className="absolute left-4 top-4 w-4 h-4 text-neutral-600" />
                  <input
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    className="w-full pl-12 pr-4 py-4 bg-black border border-white/5 rounded-xl font-mono text-center tracking-widest text-sm text-white focus:outline-none focus:border-white/20"
                  />
                </div>
              </div>

              <button
                onClick={handleVerificationSubmit}
                disabled={isProcessing}
                className="w-full py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl transition-all hover:bg-neutral-200 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    Synchronizing Cluster Context...
                  </>
                ) : (
                  "Verify Credentials & Initialize Instance"
                )}
              </button>

              <button
                onClick={(e) => { e.preventDefault(); setStep(1); }}
                className="w-full block text-center text-xs font-mono text-neutral-500 hover:text-white transition-colors"
              >
                &lt; Return to Role Matrix Selection
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-neutral-400">
          Already verified?{" "}
          <Link href="/auth/login" className="text-white hover:underline">
            Connect via Console Session
          </Link>
        </div>
      </div>
    </div>
  );
}