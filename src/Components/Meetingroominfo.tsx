import { useEffect, useState, type JSX } from "react";

// Replace with your hosted image URL
const SECTION_IMAGE_URL: string =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1783487640/Mask_Group_b5krkt.png";

const NOTES: string[] = [
  "Dog friendly, so please ensure your guests know this as we have regular pets at the studio.",
  "Access is via a staircase, we are on the first and second floor, so we may not be suitable for guests with physical disabilities/limitations.",
  "We would like to acknowledge the Gadigal people of the Eora Nation, the traditional custodians of this land and pay our respects to their Elders, both past and present.",
];

export default function MeetingRoomInfo(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full">
      {/* Heading */}
      <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-16">
        <h2
          className={`font-serif text-2xl leading-snug text-gray-900 transition-all duration-700 ease-out sm:text-3xl md:text-[2.15rem] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Meeting Room Hire, Workshop Space,
          <br />
          and BYO Function Hire.
        </h2>
      </div>

      {/* Content band */}
      <div className="w-full bg-[#EAEBF7] py-16 md:py-20">
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-10">
          {/* Left: copy */}
          <div
            className={`transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="leading-relaxed text-gray-600">
              We have multiple spaces available for workshops, product
              launches, team meetings, photo shoots, small hens parties, baby
              showers and networking events. Our mix of retro and vintage
              style is designed to make you feel comfortable and inspired.
              BYO food and drinks allowed.
            </p>

            <p className="mt-5 leading-relaxed text-gray-600">
              To keep costs low our room hire is predominantly self-service.
              If this is not suitable we offer full service for an extra
              $150.
            </p>

            <h3 className="mt-8 font-semibold text-[#1E2A4A]">
              Things to note to ensure all our guests are comfortable:
            </h3>

            <ul className="mt-4 space-y-3">
              {NOTES.map((note, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-gray-600"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image with decorative circle */}
          <div
            className={`relative flex justify-center transition-all duration-1000 ease-out md:justify-end ${
              mounted ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            {/* decorative navy circle */}
            <div className="absolute right-0 top-1/2 -z-10 h-64 w-64 -translate-y-1/2 translate-x-10 rounded-full bg-[#1E2A4A] md:h-72 md:w-72" />

            <div className="overflow-hidden rounded-tl-[3rem] rounded-tr-[3rem] rounded-bl-md rounded-br-[3rem] shadow-xl">
              <img
                src={SECTION_IMAGE_URL}
                alt="Workshop attendees at a shared table"
                className="h-105 w-full max-w-md object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}