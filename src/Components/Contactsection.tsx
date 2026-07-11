import { useState, type JSX, type FormEvent } from "react";
import { Phone, Mail } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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

export default function ContactUs(): JSX.Element {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const sectionRef = useScrollReveal();

  const handleChange = (
    field: keyof FormState,
    value: string
  ): void => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section ref={sectionRef} className="reveal-parent mx-auto max-w-[1920px] px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20">
      <div
        className="grid grid-cols-1 gap-8 rounded-3xl bg-[#F3F4FB] p-6 sm:p-8 md:grid-cols-2 md:p-10"
      >
        {/* Left: contact + form */}
        <div className="reveal-slide-left rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-serif text-2xl text-gray-900 sm:text-3xl">
            Get In <span className="text-[#F5A25D]">Touch !</span>
          </h2>

          <h3 className="mt-6 text-sm font-semibold text-gray-800">
            Contact Us
          </h3>

          <div className="mt-3 space-y-2 text-sm text-gray-600">
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#F5A25D]" strokeWidth={1.8} />
              Phone Mark (8.00am – 2.00pm): 0432891949
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#F5A25D]" strokeWidth={1.8} />
              Phone Hellen (2.00pm – 8.00pm): 0417325889
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#F5A25D]" strokeWidth={1.8} />
              hello@hustlestudios.com.au
            </p>
          </div>

          <h3 className="mt-6 text-sm font-semibold text-[#F5A25D]">
            Or use the form:
          </h3>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
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
              <p className="text-sm text-gray-700">Let me explain...</p>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-[#F7F8FC] px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-[#F5A25D]"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#F5A25D] px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#e88f43] hover:shadow-md active:scale-95"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right: map + address */}
        <div
          className="reveal-slide-right rounded-2xl bg-white p-6 shadow-sm sm:p-8 flex flex-col h-full"
        >
          <h3 className="text-sm font-semibold text-[#F5A25D]">Find us at:</h3>
          <p className="mt-2 text-sm font-medium text-gray-800">
            Level 1, 457 Elizabeth St, Surry Hills, NSW 2010
          </p>
          <p className="mt-1 text-xs text-gray-500">
            (Entrance is around the corner on Rutland Street)
          </p>

          <div className="mt-4 w-full flex-grow overflow-hidden rounded-xl min-h-[300px]">
            <iframe
              title="Hustle Studios location map"
              src="https://www.google.com/maps?q=Level+1,+457+Elizabeth+St,+Surry+Hills,+NSW+2010&output=embed"
              width="100%"
              height="100%"
              className="block h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}