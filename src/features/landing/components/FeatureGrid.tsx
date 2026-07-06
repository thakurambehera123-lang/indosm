export default function FeatureGrid() {
  const features = [
    { title: "🚀 Build Real Projects", desc: "Formulate concepts, collaborate, build, and deploy high-scale projects seamlessly without ever leaving the platform." },
    { title: "👥 Find Amazing Teammates", desc: "Connect with like-minded student builders based on skills, passions, and goals across India." },
    { title: "📚 Learn Modern Technologies", desc: "Gain deep architectural and execution engineering knowledge with structured sandbox environments." },
    { title: "🏆 Grow Your Developer Career", desc: "Build a bulletproof verification profile that maps directly to real-world code contributions." },
    { title: "💡 Participate in Hackathons", desc: "Join recurring platform challenges, sprint rounds, and win real rewards directly with your peers." },
    { title: "🌍 Connect Across India", desc: "Join the unified community network linking dedicated tech students together in one central engine space." }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto space-y-12">
      <h2 className="text-3xl font-bold text-center tracking-tight">Why Join the INDOSM Ecosystem?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, i) => (
          <div key={i} className="p-6 bg-card border rounded-xl space-y-3 shadow-sm hover:shadow transition">
            <h3 className="text-xl font-bold tracking-tight text-card-foreground">{feat.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
