import { useEffect, useRef } from "react";
import { ServiceCard } from "@/components/ui/service-card";
import { PenTool, MessageSquare, Target, BarChart3 } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "UX Writing",
    description: "Crafting clear, user-first copy that guides users through seamless digital experiences and reduces friction.",
    color: "primary"
  },
  {
    icon: MessageSquare,
    title: "Product Marketing Copy",
    description: "Building compelling product narratives that drive adoption and user engagement across all touchpoints.",
    color: "accent"
  },
  {
    icon: Target,
    title: "Content Strategy",
    description: "Developing content frameworks that align user needs with business objectives and brand voice.",
    color: "secondary"
  },
  {
    icon: BarChart3,
    title: "Copy Optimization",
    description: "Testing and refining copy based on user behavior and conversion metrics to maximize impact.",
    color: "portfolio"
  }
];

export const ServicesSection = () => {
  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!swiperRef.current || !(window as any).Swiper) return;
    const swiper = new (window as any).Swiper(swiperRef.current, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      loop: true,
      loopAdditionalSlides: 6,
      watchOverflow: true,
      speed: 6000,
      autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true },
      freeMode: { enabled: true, momentum: false },
      breakpoints: {
        640: { spaceBetween: 16 },
        1024: { spaceBetween: 24 },
      },
    });
    return () => swiper?.destroy?.();
  }, []);

  return (
    <section className="py-16 px-6 bg-muted/30 bg-services-red rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 text-primary rounded-full text-sm font-bold italic mb-3 text-5xl ">
            Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 font-bold italic text-text-gold">
            The services I offer are specifically<br />
            designed to bridge design and communication.
          </h2>
        </div>

        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {[...services, ...services].map((service, index) => (
              <div className="swiper-slide !w-auto" key={index}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color={service.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};