import { useEffect, useRef } from "react";
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
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const SwiperGlobal = (window as any).Swiper;
    if (!SwiperGlobal) return;

    const makeSwiper = (el: HTMLDivElement, reverse = false) =>
      new SwiperGlobal(el, {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        loopAdditionalSlides: 6,
        speed: 7000,
        freeMode: { enabled: true, momentum: false },
        autoplay: { delay: 0, disableOnInteraction: false, reverseDirection: reverse },
        breakpoints: {
          640: { spaceBetween: 16 },
          1024: { spaceBetween: 24 },
        },
      });

    const top = topRef.current ? makeSwiper(topRef.current, true) : null;
    const bottom = bottomRef.current ? makeSwiper(bottomRef.current, false) : null;

    return () => {
      top?.destroy?.();
      bottom?.destroy?.();
    };
  }, []);

  const top = portfolioProjects.slice(0, 3);
  const bottom = portfolioProjects.slice(3, 6);

  return (
    <section className="py-16 px-6 rounded-3xl bg-[#ee9b00]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            UX Writing Samples
          </h2>
          <p className=" text-black font-bold text-lg max-w-2xl mx-auto font-bold italic text-[#e9d8a6]">
            Real projects showcasing user-first copy that drives engagement and reduces friction.
          </p>
        </div>

        <div className="space-y-8">
          <div className="swiper" ref={topRef}>
            <div className="swiper-wrapper">
              {[...top, ...top].map((project, index) => (
                <div className="swiper-slide !w-auto" key={`top-${index}`}> 
                  <div className="w-[240px] md:w-[260px] h-[300px] md:h-[320px]">
                    <PortfolioCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      metrics={project.metrics}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="swiper" ref={bottomRef}>
            <div className="swiper-wrapper">
              {[...bottom, ...bottom].map((project, index) => (
                <div className="swiper-slide !w-auto" key={`bottom-${index}`}> 
                  <div className="w-[240px] md:w-[260px] h-[300px] md:h-[320px]">
                    <PortfolioCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      metrics={project.metrics}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};