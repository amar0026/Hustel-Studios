import { type JSX } from "react";
import { Sun, Users, Utensils, ParkingCircle, Wifi } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Feature = {
  icon: React.ElementType;
  label: string;
};

const FEATURES: Feature[] = [
  { icon: Sun, label: "NATURAL LIGHT" },
  { icon: Users, label: "FLEXIBLE LAYOUTS" },
  { icon: Utensils, label: "BYO FOOD & DRINKS" },
  { icon: ParkingCircle, label: "EASY PARKING" },
  { icon: Wifi, label: "HIGH-SPEED WIFI" },
];

const HERO_IMAGE_URL: string =
  "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783426840/b2394ac1baa4b3f0def311630503f983fb36e962_ppo3gn.png";

export default function Hero(): JSX.Element {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="reveal-parent relative mx-auto max-w-[1920px] overflow-visible px-6 md:px-12 lg:px-20 xl:px-32 pb-24 pt-16 md:pb-28 md:pt-20"
    >
      <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Left: copy */}
        <div className="reveal-slide-left flex flex-col justify-center">
          <h1 className="font-serif text-5xl leading-tight text-gray-900 sm:text-5xl md:text-[3.4rem]">
            <span className="block">Beautiful</span>
            <span className="block">Spaces for</span>
            <span className="block">
              every <span className="text-[#F5A25D]">Occasion.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-gray-500">
            Workshops, meeting, celebrations and events in inspiring
            surroundings.
          </p>
        </div>

        {/* Right: image */}
        <div className="reveal-scale-up relative">
          <div className="group overflow-hidden rounded-[2.5rem] shadow-xl">
            <img
              src={HERO_IMAGE_URL}
              alt="Bright living room event space"
              className="h-105 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Features + CTA — wide bar overlapping the bottom of the image */}
      <div
        className="reveal-slide-up absolute bottom-23 z-20 w-[92%] max-w-4xl -translate-x-1/2 md:left-[37%] md:w-[80%] md:-translate-x-1/2"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 rounded-full border border-gray-100 bg-white px-8 py-4 shadow-xl sm:gap-8 sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-15">
            {FEATURES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-1.5 text-center"
              >
                <Icon
                  className="h-5 w-5 text-[#F5A25D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                  strokeWidth={1.8}
                />
                <span className="whitespace-nowrap text-[9px] font-semibold tracking-wide text-gray-500">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <button className="whitespace-nowrap rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 transition-all duration-300 hover:border-[#F5A25D] hover:bg-[#F5A25D] hover:text-white hover:shadow-md active:scale-95">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}