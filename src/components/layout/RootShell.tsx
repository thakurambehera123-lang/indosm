"use client";

import AnimatedNavbar from "@/components/ui/AnimatedNavbar";
import Footer from "@/components/footer/Footer";
import GlowCanvas from "@/components/ui/GlowCanvas";
import { ReactNode } from "react";

interface RootShellProps {
  children: ReactNode;
}

export default function RootShell({ children }: RootShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-brand-dark text-white selection:bg-white selection:text-black antialiased">
      {/* Luxury Radial Physics & Matrix Grid Backcloth */}
      <GlowCanvas />

      {/* Stripe/Linear-Inspired Navigation Dropdown Layer */}
      <AnimatedNavbar />

      {/* Main Feature Viewport Execution Canvas */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Structured Platform Bottom Footer */}
      <Footer />
    </div>
  );
}