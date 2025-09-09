export const StatsSection = () => {
  const stats = [
    { value: "6", label: "UX Writing Projects", sublabel: "Projects" },
    { value: "100%", label: "User-First Approach", sublabel: "Focus" },
    { value: "Multiple", label: "Industries Served", sublabel: "Sectors" },
    { value: "Proven", label: "Impact & Results", sublabel: "Outcomes" }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-4">
            My approach focuses on user-first copy that
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            drives real results.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-foreground font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};