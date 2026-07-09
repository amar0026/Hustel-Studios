import { useEffect, useState, type JSX } from "react";

// Replace with your hosted hero image
const HERO_IMAGE_URL: string =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1783589973/850760fae7daed4f8a69c3ef7c1cba931662b0ca_lhzi4k.png";

export default function BusinessMeetingRoomHire(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Page title */}
      <div className="pt-8 text-center">
        <h1 className="text-base font-semibold text-gray-900 sm:text-lg">
         Hens Parties  & Bridal Showers
        </h1>
      </div>

      {/* Hero image with overlay badge */}
      <div className="mx-auto mt-6 max-w-5xl px-6">
        <div
          className={`relative overflow-hidden rounded-3xl shadow-lg transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <img
            src={HERO_IMAGE_URL}
            alt="Meeting room with pink chairs and wooden floors"
            className="h-auto  w-full object-cover sm:h-72 md:h-80"
          />
         
        </div>
      </div>

      {/* Intro copy */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-14">
        {/* <h2
          className={`text-center font-serif text-2xl leading-snug text-gray-900 transition-all duration-700 ease-out sm:text-3xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
        Workshop space hire in Sydney,<br/>
        lose to public transport*
        </h2> */}

        <p
          className={`mt-8 leading-relaxed text-gray-600 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "180ms" }}
        >
          To keep costs low we are now predominantly Self Service. If this
          is not suitable for you we offer Full Service for an extra $150
          per day or evening session.{" "}
          <a
            href="#"
            className="font-medium text-[#F5A25D] underline underline-offset-2 hover:text-[#e88f43]"
          >
            See self service and full service details.
          </a>
        </p>

        <p
          className={`mt-5 leading-relaxed text-gray-600 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "260ms" }}
        >
          Surry Hills Studio: Our meeting rooms are available 7 days a
          week from 7am til 10pm. The day session runs from 7am til 5pm
          and the evening session from 5.30pm til 10pm.
        </p>

        <p
          className={`mt-5 leading-relaxed text-gray-600 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "340ms" }}
        >
          Please note, we're located in a old heritage building with a
          'faded vintage glamour' kind of vibe. Our floors are uneven, the
          roof leaks during storms, we're perfectly imperfect. If you're
          after a creative space that's inspiring, and definitely not
          corporate, then we'd love to have you.
        </p>

        <h3
          className={`mt-8 font-semibold text-[#F5A25D] transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Things to note to ensure all our guests are comfortable:
        </h3>

        <ul
          className={`mt-4 space-y-3 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "460ms" }}
        >
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
          className={`mt-6 flex items-center gap-2 text-lg font-semibold text-[#F5A25D] transition-all duration-700 ease-out hover:text-[#e88f43] ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "520ms" }}
        >
          <span className="h-2 w-2 rounded-full bg-[#F5A25D]" />
          See Our Location!
        </a>

        <div
          className={`mt-10 flex justify-center transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "580ms" }}
        >
          <a
            href="#"
            className="rounded-full bg-[#F5A25D] px-10 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-[#e88f43] hover:shadow-md active:scale-95"
          >
            ENQUIRE NOW
          </a>
        </div>
      </div>
    </div>
  );
}