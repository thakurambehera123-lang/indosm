export default function ContactPage() {
  const contactChannels = [
    { name: "Community Support", details: "Interact with fellow student builders inside our system dashboard chat panels." },
    { name: "Help Center", details: "Read complete documentation, architecture playbooks, and structural step guides." },
    { name: "Contact Team", details: "Reach out to INDOSM operational administrators directly for organizational updates." },
    { name: "Student Success", details: "Get career advice, mentorship directions, and verification assistance metrics." },
    { name: "Email Support", details: "Send operational tickets straight to support@indosm.org for immediate care." }
  ];

  return (
    <main className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-center">Get in Touch with INDOSM Support</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {contactChannels.map((channel, i) => (
          <div key={i} className="p-6 bg-card border rounded-xl space-y-2">
            <h3 className="text-lg font-bold text-primary">{channel.name}</h3>
            <p className="text-sm text-muted-foreground">{channel.details}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
