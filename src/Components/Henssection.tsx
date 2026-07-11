import { type JSX } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HERO_IMAGE_URL: string =
  "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783589973/850760fae7daed4f8a69c3ef7c1cba931662b0ca_lhzi4k.png";

export default function HensSection(): JSX.Element {
  const introRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="w-full">
      {/* Page title */}
      <div className="pt-8 text-center">
        <h1 className="text-base font-semibold text-gray-900 sm:text-lg">
          Hens Parties &amp; Bridal Showers
        </h1>
      </div>

      {/* Hero image and content */}
      <section ref={introRef} className="reveal-parent mx-auto mt-6 max-w-[1920px] px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="reveal-scale-up relative overflow-hidden rounded-3xl shadow-lg">
          <img
            src={HERO_IMAGE_URL}
            alt="Hens Parties & Bridal Showers"
            className="h-auto w-full object-cover sm:h-72 md:h-80"
          />
        </div>

        {/* Intro copy */}
        <div className="mx-auto max-w-3xl py-12 md:py-14">
          <p className="reveal-slide-up mt-8 leading-relaxed text-gray-600">
            To keep costs low we are now predominantly Self Service. If this
            is not suitable for you we offer Full Service for an extra $150
            per day or evening session.{" "}
            <a
              href="#"
              className="font-medium text-[#F5A25D] underline underline-offset-2 hover:text-[#e88f43] transition-colors"
            >
              See self service and full service details.
            </a>
          </p>

          <p className="reveal-slide-up mt-5 leading-relaxed text-gray-600">
            Surry Hills Studio: Our meeting rooms are available 7 days a
            week from 7am til 10pm. The day session runs from 7am til 5pm
            and the evening session from 5.30pm til 10pm.
          </p>

          <p className="reveal-slide-up mt-5 leading-relaxed text-gray-600">
            Please note, we're located in a old heritage building with a
            'faded vintage glamour' kind of vibe. Our floors are uneven, the
            roof leaks during storms, we're perfectly imperfect. If you're
            after a creative space that's inspiring, and definitely not
            corporate, then we'd love to have you.
          </p>

          <h3 className="reveal-slide-up mt-8 font-semibold text-[#F5A25D]">
            Things to note to ensure all our guests are comfortable:
          </h3>

          <ul className="reveal-slide-up mt-4 space-y-3">
            <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
              <span>
                We're a dog-friendly venue so please ensure your guests know
                this as we have regular pets at the studio.
              </span>
            </li>
            <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
              <span>
                Access is via a staircase, we are on the first and second
                floor, so we may not be suitable for guests with physical
                disabilities/limitations.
              </span>
            </li>
          </ul>

          <a
            href="#"
            className="reveal-slide-up mt-6 flex items-center gap-2 text-lg font-semibold text-[#F5A25D] hover:text-[#e88f43] transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-[#F5A25D]" />
            See Our Location!
          </a>

          <div className="reveal-slide-up mt-10 flex justify-center">
            <a
              href="#"
              className="rounded-full bg-[#F5A25D] px-10 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-[#e88f43] hover:shadow-md active:scale-95"
            >
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}