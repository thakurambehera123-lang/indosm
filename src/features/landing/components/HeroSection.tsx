import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-5xl font-extrabold tracking-tight">
        The Ultimate Student Developer Ecosystem
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Build Together. Learn Together. Collaborate Together. Create Real Projects all directly inside the unified INDOSM ecosystem.
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/auth" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow hover:opacity-90 transition">
          Get Started
        </Link>
        <Link href="/projects" className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg border hover:bg-muted transition">
          Explore Projects
        </Link>
      </div>
    </section>
  );
}
