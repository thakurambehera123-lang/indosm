import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-black tracking-tighter bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          INDOSM
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#features" className="hover:text-white transition">Features</Link>
          <Link href="#learning" className="hover:text-white transition">Learning</Link>
          <Link href="#events" className="hover:text-white transition">Events</Link>
          <Link href="#faq" className="hover:text-white transition">FAQ</Link>
        </div>
      </div>
      <Link 
        href="#cta" 
        className="px-4 py-2 bg-white text-black font-semibold text-sm rounded-full hover:bg-neutral-200 transition shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      >
        Join INDOSM
      </Link>
    </nav>
  );
}
