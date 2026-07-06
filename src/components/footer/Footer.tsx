import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 px-6 text-neutral-400">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 space-y-4">
          <div className="text-xl font-black tracking-tighter text-white">INDOSM</div>
          <p className="text-sm leading-relaxed max-w-sm">
            INDOSM is India\'s student developer ecosystem where students build projects, collaborate, learn modern technologies, join teams, participate in hackathons, and grow together.
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase">Ecosystem</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-white transition">About</Link></li>
              <li><Link href="#mission" className="hover:text-white transition">Mission</Link></li>
              <li><Link href="#vision" className="hover:text-white transition">Vision</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-white transition">Community</Link></li>
              <li><Link href="#features" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="#events" className="hover:text-white transition">Events</Link></li>
            </ul>
          </div>
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="text-xs font-semibold text-white tracking-widest uppercase">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="#privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-6 text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>&copy; 2026 INDOSM. All platform capabilities hosted internally.</span>
      </div>
    </footer>
  );
}

// Fallback default export to handle both import styles
export default Footer;
