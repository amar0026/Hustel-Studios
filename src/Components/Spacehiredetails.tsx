import { type JSX } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function SpaceHireDetails(): JSX.Element {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={sectionRef} className="reveal-parent mx-auto max-w-[1920px] px-6 md:px-12 lg:px-20 xl:px-32 py-14 md:py-16">
      {/* Title */}
      <h1 className="reveal-slide-up text-center font-serif text-2xl text-gray-900 sm:text-3xl">
        Space hire details
      </h1>
      <p className="reveal-slide-up mt-1 text-center text-sm text-gray-500">Self service:</p>

      {/* Self service section */}
      <div className="reveal-slide-up mt-8">
        <h2 className="font-semibold text-[#F5A25D]">
          No staff on-site, contact-free self service.
        </h2>

        <ul className="mt-4 space-y-3">
          <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
            <span>
              We will give you the code to get in the front door and how
              to find your room.
            </span>
          </li>
          <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
            <span>
              Full instructions with wifi and bluetooth speaker passwords
              etc will be provided after full payment.
            </span>
          </li>
          <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
            <span>
              Help yourself to tea/coffee and chilled water from the
              shared kitchen. Please put all used water glasses and mugs
              in the dishwasher before you leave.
            </span>
          </li>
          <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
            <span>
              You are welcome to move the tables and use the extra chairs
              available. Please return the furniture to the original
              position before you leave.
            </span>
          </li>
          <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
            <span>
              Please place all rubbish in the rubbish bins, turn off the
              lights and close the front door when you leave.
            </span>
          </li>
        </ul>
      </div>

      {/* Full service label/divider */}
      <div className="reveal-slide-up mt-10 flex justify-center">
        <span className="rounded-full bg-[#F5A25D] px-8 py-2.5 text-sm font-semibold text-white shadow-sm">
          Full service
        </span>
      </div>

      {/* Full service section — always visible */}
      <div className="reveal-slide-up mt-10">
        <h2 className="font-semibold text-[#F5A25D]">Additional $150 Fee</h2>

        <p className="mt-4 leading-relaxed text-gray-600">
          A staff member will meet you at the studio to help you get set
          up; and return after you leave to tidy up. Please note, they
          will not be on-site throughout the whole session. If you need
          on-site support throughout the entire session please contact
          us for a quote.
        </p>

        <ul className="mt-4 space-y-3">
          <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
            <span>
              They will let you into the studio and set-up the room in
              your desired configuration including chilled water and
              glasses on the table.
            </span>
          </li>
          <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
            <span>Assist you to connect to the wifi, TV and air-con.</span>
          </li>
          <li className="flex gap-2 text-sm leading-relaxed text-gray-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
            <span>
              The staff member will also tidy up the room and kitchen
              after you leave, including washing up dishes and placing
              rubbish in the rubbish bins.
            </span>
          </li>
        </ul>
      </div>

      {/* Payments */}
      <div className="reveal-slide-up mt-10">
        <h2 className="font-semibold text-[#F5A25D]">Payments:</h2>
        <p className="mt-4 leading-relaxed text-gray-600">
          A 30% deposit is required to secure booking. The remaining
          balance is due four weeks prior to the event date. All payments
          are non-refundable and non-transferable.
        </p>
      </div>

      {/* Enquire button */}
      <div className="reveal-slide-up mt-10 flex justify-center">
        <a
          href="#"
          className="rounded-full bg-[#F5A25D] px-10 py-3 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-[#e88f43] hover:shadow-md active:scale-95"
        >
          ENQUIRE NOW
        </a>
      </div>
    </div>
  );
}