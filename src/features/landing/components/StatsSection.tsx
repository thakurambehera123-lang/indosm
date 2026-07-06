export default function StatsSection() {
  const stats = [
    { label: "Active Community Users", value: "10,000+" },
    { label: "Student Collaborations", value: "4,500+" },
    { label: "Projects Completed", value: "1,200+" },
    { label: "Community Messages Sent", value: "250K+" }
  ];

  return (
    <section className="py-12 bg-muted/50 border-y my-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-4xl font-bold tracking-tight text-primary">{stat.value}</h3>
            <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
