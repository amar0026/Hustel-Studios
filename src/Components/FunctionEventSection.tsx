import { type JSX } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const HERO_IMAGE_URL: string =
  "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783589975/c07152b7e169ae8ef6933b6ecc18a89cbc82f311_lrm7td.png";

export default function FunctionEventSection(): JSX.Element {
  const introRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="w-full">
      {/* Page title */}
      <div className="pt-8 text-center">
        <h1 className="text-base font-semibold text-gray-900 sm:text-lg">
          Functions &amp; Events Venue Hire
        </h1>
      </div>

      {/* Hero image & content */}
      <section ref={introRef} className="reveal-parent mx-auto mt-6 max-w-[1920px] px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="reveal-scale-down relative overflow-hidden rounded-3xl shadow-lg">
          <img
            src={HERO_IMAGE_URL}
            alt="Meeting room with pink chairs and wooden floors"
            className="h-56 w-full object-cover sm:h-72 md:h-80"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-[#0F3457] px-4 py-1.5 text-xs font-semibold text-[#FFA629] sm:text-sm">
            Located in Surry Hills, Sydney
          </span>
        </div>

        {/* Intro copy */}
        <div className="mx-auto max-w-3xl py-12 md:py-14">
          <h2 className="reveal-slide-left text-center font-serif text-2xl leading-snug text-gray-900 sm:text-3xl">
            Room hire for functions and events in Sydney,
            <br />
            close to public transport*
          </h2>

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