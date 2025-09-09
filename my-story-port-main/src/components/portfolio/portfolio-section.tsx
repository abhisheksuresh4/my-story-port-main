import { PortfolioCard } from "@/components/ui/portfolio-card";

const portfolioProjects = [
  {
    title: "Partner Companies Showcase",
    description: "Landing page highlighting trusted partners. Created headline that inspires trust with supportive subhead for women's career advancement platform.",
    tags: ["UX Writing", "Landing Page", "Trust Building"],
    metrics: [
      { label: "Credibility", value: "Built" },
      { label: "Trust Factor", value: "High" },
      { label: "User Impact", value: "Instant" }
    ]
  },
  {
    title: "Universal Search Enhancement",
    description: "Transformed basic search into guided discovery. Added category hints to improve user understanding of searchable content.",
    tags: ["UX Copy", "Search UX", "Discoverability"],
    metrics: [
      { label: "Discoverability", value: "Improved" },
      { label: "User Guidance", value: "Clear" },
      { label: "Search Usage", value: "Enhanced" }
    ]
  },
  {
    title: "OTP Verification Flow",
    description: "Redesigned email-based login copy from dry instructions to welcoming, helpful guidance that reduces user friction.",
    tags: ["Authentication", "User Flow", "Microcopy"],
    metrics: [
      { label: "Login Friction", value: "Reduced" },
      { label: "User Experience", value: "Welcoming" },
      { label: "Instructions", value: "Proactive" }
    ]
  },
  {
    title: "Stay Updated Opt-in",
    description: "Created clear, low-friction consent language that encourages users to opt-in for updates with conversational tone.",
    tags: ["Consent UX", "Notifications", "Conversion"],
    metrics: [
      { label: "Opt-in Rate", value: "Increased" },
      { label: "Friction", value: "Low" },
      { label: "Clarity", value: "High" }
    ]
  },
  {
    title: "Request Callback Form",
    description: "Humanized transactional form copy to sound more helpful and reassuring, encouraging user engagement.",
    tags: ["Form UX", "Human Tone", "Engagement"],
    metrics: [
      { label: "Response Rate", value: "Encouraged" },
      { label: "Tone", value: "Human" },
      { label: "Trust", value: "Reassuring" }
    ]
  },
  {
    title: "Confirmation Screen",
    description: "Added gratitude and reassurance to post-submission experience, providing clear closure and next steps.",
    tags: ["Confirmation UX", "Gratitude", "Closure"],
    metrics: [
      { label: "User Assurance", value: "Clear" },
      { label: "Closure", value: "Complete" },
      { label: "Next Steps", value: "Defined" }
    ]
  }
];

export const PortfolioSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            UX Writing Samples
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real projects showcasing user-first copy that drives engagement and reduces friction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              metrics={project.metrics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};