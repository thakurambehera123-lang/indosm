"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export type UserRole = "Student" | "Mentor" | "Founder" | "Admin";

export interface UserSession {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  streak: number;
  xp: number;
  initialized: boolean;
}

interface AuthContextType {
  user: UserSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginSession: (email: string, role: UserRole) => Promise<boolean>;
  logoutSession: () => void;
  verifyOtpToken: (otp: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const PUBLIC_ROUTES = ["/", "/about", "/mission", "/vision", "/roadmap", "/contact", "/auth/login", "/auth/signup"];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const savedSession = localStorage.getItem("indosm_secure_session");
    if (savedSession) {
      try {
        setUser(JSON.parse(savedSession));
      } catch (e) {
        localStorage.removeItem("indosm_secure_session");
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const isPublic = PUBLIC_ROUTES.includes(pathname);
      if (!user && !isPublic) {
        router.push("/auth/login");
      } else if (user && (pathname === "/auth/login" || pathname === "/auth/signup")) {
        router.push("/dashboard");
      }
    }
  }, [user, pathname, isLoading, router]);

  const loginSession = async (email: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    const mockUser: UserSession = {
      id: `usr_${Math.random().toString(36).substr(2, 9)}`,
      email: email,
      role: role,
      name: email.split("@")[0].toUpperCase(),
      streak: 1,
      xp: 100,
      initialized: true,
    };

    // Inject secure structural cookie payload for the Next.js edge middleware check
    document.cookie = "indosm_edge_session=true; path=/; max-age=86400; SameSite=Strict";
    
    setUser(mockUser);
    localStorage.setItem("indosm_secure_session", JSON.stringify(mockUser));
    setIsLoading(false);
    return true;
  };

  const verifyOtpToken = async (otp: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return otp.length === 6;
  };

  const logoutSession = () => {
    document.cookie = "indosm_edge_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setUser(null);
    localStorage.removeItem("indosm_secure_session");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, loginSession, logoutSession, verifyOtpToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be invoked safely within an active AuthProvider node boundary.");
  }
  return context;
}

export default AuthProvider;