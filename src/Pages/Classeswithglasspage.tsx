import { useEffect, useState, type JSX } from "react";

// Replace with your hosted images
const HERO_IMAGE_URL: string =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1783511255/673203244eaa609ee763e9f0131aaea753583462_jhqxpp.png";

type ClassItem = {
  label: string;
  imageUrl: string;
};

const CLASS_ITEMS: ClassItem[] = [
  { label: "UV Paint Pouring Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511245/Group_9_rqbxaz.png" },
  { label: "Clay Flower Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511244/Group_9_1_mhjbqu.png" },
  { label: "Drawing Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511244/Group_9_2_k1y9uh.png" },
  { label: "Watercolour Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511243/Group_9_3_bq7yzp.png" },
  { label: "Resin Plant Pot Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511244/Group_9_4_j1rxlo.png" },
  { label: "Clay Planter Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511243/Group_9_5_cmsogy.png" },
  { label: "Paint & Print Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511244/Group_9_6_lw7mcn.png" },
  { label: "Flower Crown Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511243/Group_9_7_rie4ll.png" },
  { label: "Resin Goddess Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511515/Group_9_8_rk5e5v.png" },
  { label: "Acrylic on Canvas Painting Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511515/Group_9_9_vevahq.png" },
  { label: "Resin Coaster Classes", imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783511515/Group_9_10_jsskrx.png" },
];

export default function ClassesWithGlasses(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Breadcrumb pill */}
      <div className="pt-8 text-center">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F5A25D]" />
          Classes with Glasses:
        </span>
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
            alt="Group enjoying a creative BYO drinks workshop"
            className="h-56 w-full object-cover sm:h-72 md:h-80"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-[#0F3457] px-4 py-1.5 text-xs font-semibold text-[#FFA629] sm:text-sm">
            Creative Workshops - BYO Drinks
          </span>
        </div>
      </div>

      {/* Intro copy */}
      <div className="mx-auto max-w-3xl px-6 py-12 text-center md:py-14">
        <h1
          className={`font-serif text-2xl text-gray-900 transition-all duration-700 ease-out sm:text-3xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          Team building activities in Sydney
        </h1>
        <p
          className={`mt-2 text-sm font-semibold text-[#F5A25D] transition-all duration-700 ease-out sm:text-base ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "180ms" }}
        >
          Corporate and private group bookings
        </p>

        <p
          className={`mt-5 text-left leading-relaxed text-gray-600 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "260ms" }}
        >
          Looking for team building activities in Sydney that your
          workmates will actually enjoy? Organising a hens party and want
          to learn something new? All our private Classes with Glasses
          are perfect for groups who want to have fun and do a bit of
          bonding at the same time. All our classes are BYO drinks and
          you are welcome to BYO catering as well.
        </p>

        <p
          className={`mt-4 text-left leading-relaxed text-gray-600 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "340ms" }}
        >
          Classes with Glasses are held at Hustle Studios in Surry
          Hills. A beautiful heritage listed terrace house situated only
          3 mins walk from Central Station.
        </p>

        <p
          className={`mt-4 text-left leading-relaxed text-gray-600 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Email{" "}
          <a
            href="mailto:hello@hustlestudios.com.au"
            className="font-semibold text-[#F5A25D] hover:underline"
          >
            hello@hustlestudios.com.au
          </a>{" "}
          to check availability and for a quote for your group.
        </p>
      </div>

      {/* Class gallery */}
      <div className="mx-auto max-w-5xl px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          {CLASS_ITEMS.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col transition-all duration-700 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${450 + i * 60}ms` }}
            >
              <div className="group aspect-square overflow-hidden rounded-xl shadow-sm">
                <img
                  src={item.imageUrl}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <p className="mt-2 text-center text-xs font-medium text-[#F5A25D] sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}