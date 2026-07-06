"use client";

import { useState } from "react";
import { useAuth, UserRole } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Terminal, Key, Mail, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const { loginSession } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("Student");
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorText("All session connection credentials must be satisfied.");
      return;
    }
    setErrorText("");
    setIsConnecting(true);

    try {
      // Establish user workspace allocation variables
      await loginSession(email, selectedRole);
      router.push("/dashboard");
    } catch (err) {
      setErrorText("Console rejected entry authorization keys.");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6 py-16 bg-[#050505]">
      <div className="w-full max-w-md bg-[#0a0a0a] border border-white/5 rounded-[30px] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.8)] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neutral-800 via-neutral-400 to-neutral-800" />
        
        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-black tracking-tight text-white flex items-center justify-center gap-2">
            <Terminal className="w-5 h-5" />
            Ecosystem Console
          </h3>
          <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            Establish Session Handshake
          </p>
        </div>

        {errorText && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-xs font-mono text-red-400">
            [DENIED] : {errorText}
          </div>
        )}

        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                Target Node Context (Role)
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as UserRole)}
                className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl font-mono text-xs text-white focus:outline-none focus:border-white/20 cursor-pointer"
              >
                <option value="Student">Student Matrix</option>
                <option value="Mentor">Mentor Council</option>
                <option value="Founder">Founder Cluster</option>
                <option value="Admin">System Admin</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                Account Communication Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-4 h-4 text-neutral-600" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@university.edu.in"
                  className="w-full pl-12 pr-4 py-3.5 bg-black border border-white/5 rounded-xl font-mono text-xs text-white focus:outline-none focus:border-white/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                Cryptographic Key (Password)
              </label>
              <div className="relative">
                <Key className="absolute left-4 top-3.5 w-4 h-4 text-neutral-600" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-black border border-white/5 rounded-xl font-mono text-xs text-white focus:outline-none focus:border-white/20"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isConnecting}
            className="w-full py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl shadow-lg hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
          >
            {isConnecting ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Connecting Pipeline Terminal...
              </>
            ) : (
              "Connect Session Terminal"
            )}
          </button>
        </form>

        <div className="text-center pt-2">
          <Link href="/auth/signup" className="text-xs text-neutral-500 font-mono hover:text-white transition-colors">
            Initialize new runtime identity ledger &gt;
          </Link>
        </div>
      </div>
    </div>
  );
}