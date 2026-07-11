import { type JSX } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const FOOTER_IMAGES: string[] = [
  "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783492581/IG-1_poruze.jpg",
  "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783492581/IG-2_w13dlh.jpg",
  "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783492581/IG-3_vm5jqq.jpg",
  "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783492581/IG-4_nelqam.jpg",
];

export default function Footer(): JSX.Element {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <footer className="w-full bg-[#0F3457]">
      <div ref={sectionRef} className="reveal-parent mx-auto max-w-[1920px] px-6 md:px-12 lg:px-20 xl:px-32 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {/* Left: brand + description */}
          <div className="reveal-slide-left">
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Hustle Studios
            </h2>

            <p className="mt-5 max-w-sm leading-relaxed text-white/70">
              Nestled in a beautiful terrace house in Surry Hills right by
              Central Station, Hustle Studios is both a unique team meeting
              room space and a gorgeous self service workshop and function
              venue.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-white">
              Follow Us:
            </h3>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:border-[#F5A25D] hover:bg-[#F5A25D] hover:text-white"
              >
                <FaFacebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:border-[#F5A25D] hover:bg-[#F5A25D] hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: address/email + image strip */}
          <div className="reveal-slide-right">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-white sm:text-base">
              <span>Level 1, 457 Elizabeth Street, Surry Hills</span>
              <span className="hidden text-white/30 sm:inline">|</span>
              <a
                href="mailto:hello@hustlestudios.com.au"
                className="text-[#F5A25D] transition-colors hover:text-white"
              >
                hello@hustlestudios.com.au
              </a>
            </p>

            <div className="mt-5 grid grid-cols-4 gap-3">
              {FOOTER_IMAGES.map((url, i) => (
                <div
                  key={i}
                  className="group hover-card-trigger aspect-square overflow-hidden rounded-lg"
                >
                  <img
                    src={url}
                    alt={`Hustle Studios space ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}