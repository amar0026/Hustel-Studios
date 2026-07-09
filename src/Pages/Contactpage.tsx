import { useEffect, useState, type JSX, type FormEvent } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";

// Replace with your hosted illustration image
const ILLUSTRATION_URL: string =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1783499453/Mobile_login-pana_1_eqobby.png";

type LookingFor = "room-hire" | "something-else";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  lookingFor: LookingFor;
  message: string;
};

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  lookingFor: "room-hire",
  message: "",
};

export default function ContactPage(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>(INITIAL_STATE);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (field: keyof FormState, value: string): void => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: wire up to your backend / email service
  };

  return (
    <div className="w-full">
      {/* Map / address block */}
      <section className="mx-auto max-w-4xl px-6 pt-16 text-center md:pt-20">
        <h2
          className={`font-serif text-2xl text-[#F5A25D] transition-all duration-700 ease-out sm:text-3xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Find Hustle Studios at:
        </h2>
        <p className="mt-4 text-base font-semibold text-gray-900 sm:text-lg">
          Level 1, 457 Elizabeth St, Surry Hills, NSW 2010
        </p>
        <p className="mt-1 text-sm text-gray-500">
          (Entrance is around the corner on Rutland Street)
        </p>

        <div className="mt-6 w-full overflow-hidden rounded-2xl shadow-md">
          <iframe
            title="Hustle Studios location map"
            src="https://www.google.com/maps?q=Level+1,+457+Elizabeth+St,+Surry+Hills,+NSW+2010&output=embed"
            width="100%"
            height="100%"
            className="block h-64 w-full border-0 sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Contact form block */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="text-center">
          <h2
            className={`font-serif text-2xl text-[#F5A25D] transition-all duration-700 ease-out sm:text-3xl ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Contact us
          </h2>
          <p className="mt-2 text-sm font-medium text-gray-700">
            Meeting Rooms | Workshops | Space Hire for Events
          </p>
        </div>

        <div
          className={`relative mt-10 grid grid-cols-1 gap-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-700 ease-out sm:p-8 md:grid-cols-2 md:gap-8 md:p-10 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {/* Vertical social pill on the edge */}
          <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 flex-col gap-2 rounded-full bg-white p-1.5 shadow-md md:flex">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A25D]/10 text-[#F5A25D] transition-colors hover:bg-[#F5A25D] hover:text-white"
            >
              <FaFacebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A25D]/10 text-[#F5A25D] transition-colors hover:bg-[#F5A25D] hover:text-white"
            >
              <FaInstagram className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Left: form */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Get in touch
            </h3>
            <p className="mt-1 text-sm font-medium text-[#F5A25D]">
              We are here for you! How can we help?
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="rounded-lg border border-gray-200 bg-[#F7F8FC] px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-[#F5A25D]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="rounded-lg border border-gray-200 bg-[#F7F8FC] px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-[#F5A25D]"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-[#F7F8FC] px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-[#F5A25D]"
              />

              <div>
                <p className="text-sm text-gray-700">I'm Looking for...</p>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="lookingFor"
                      checked={form.lookingFor === "room-hire"}
                      onChange={() => handleChange("lookingFor", "room-hire")}
                      className="h-4 w-4 accent-[#F5A25D]"
                    />
                    Room Hire
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="lookingFor"
                      checked={form.lookingFor === "something-else"}
                      onChange={() =>
                        handleChange("lookingFor", "something-else")
                      }
                      className="h-4 w-4 accent-[#F5A25D]"
                    />
                    Something else (please elaborate below)
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-700">Message</p>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-[#F7F8FC] px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-[#F5A25D]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#F5A25D] px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#e88f43] hover:shadow-md active:scale-95"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: illustration + contact details */}
          <div className="flex flex-col justify-between">
            <img
              src={ILLUSTRATION_URL}
              alt="Person browsing venue options on a phone"
              className="mx-auto h-56 w-auto object-contain"
            />

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900">
                Contact Us
              </h3>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <Phone
                    className="h-4 w-4 text-[#F5A25D]"
                    strokeWidth={1.8}
                  />
                  Phone Mark (8.00am – 2.00pm): 0432891949
                </p>
                <p className="flex items-center gap-2">
                  <Phone
                    className="h-4 w-4 text-[#F5A25D]"
                    strokeWidth={1.8}
                  />
                  Phone Hellen (2.00pm – 8.00pm): 0417325889
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#F5A25D]" strokeWidth={1.8} />
                  hello@hustlestudios.com.au
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual address CTA */}
      <section className="mx-auto max-w-2xl px-6 pb-16 text-center md:pb-20">
        <h3 className="font-serif text-xl text-[#F5A25D] sm:text-2xl">
          Looking for
        </h3>
        <p className="mt-2 text-lg font-semibold text-gray-900 sm:text-xl">
          Bustle Studios Virtual Address
        </p>
        <p className="text-lg font-semibold text-[#F5A25D] sm:text-xl">
          service?
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-base font-semibold text-[#1E2A4A] underline underline-offset-4 transition-colors hover:text-[#F5A25D]"
        >
          Click here
        </a>
      </section>
    </div>
  );
}