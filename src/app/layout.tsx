import type { Metadata } from "next";
import RootShell from "@/components/layout/RootShell";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "INDOSM - Student Developer Ecosystem",
  description: "India's premier student developer ecosystem to build projects, collaborate, and learn modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-brand-dark">
        <AuthProvider>
          <RootShell>
            {children}
          </RootShell>
        </AuthProvider>
      </body>
    </html>
  );
}