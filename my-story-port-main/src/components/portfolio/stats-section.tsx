export const StatsSection = () => {
  const stats = [
    { value: "6", label: "UX Writing Projects", sublabel: "Projects" },
    { value: "100%", label: "User-First Approach", sublabel: "Focus" },
    { value: "Multiple", label: "Industries Served", sublabel: "Sectors" },
    { value: "Proven", label: "Impact & Results", sublabel: "Outcomes" }
  ];

return (
  <section className="py-20 px-6 bg-[#ca6702] rounded-3xl">
    <div className="max-w-4xl mx-auto">
      {/* Quote section */}
      <div className="text-center mb-16">
        <p className="text-lg md:text-xl font-bold italic text-[#e9d8a6] mb-6">
          “My approach focuses on user-first copy that”
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#e9d8a7] leading-tight">
          drives <span className="underline decoration-white/60">real results </span>
        </h2>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 bg-[#EBEBEB] p-10 rounded-2xl shadow-lg">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-extrabold text-black mb-3">
              {stat.value}
            </div>
            <div className="text-lg font-semibold text-black mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-gray-600">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

};