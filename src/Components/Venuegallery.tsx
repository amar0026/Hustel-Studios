import { type JSX } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type GalleryItem = {
  label: string;
  labelPosition: "top" | "bottom";
  imageUrl: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    label: "Business and Meeting Rooms",
    labelPosition: "top",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783490768/Mask_Group_1_cmypjs.png",
  },
  {
    label: "Function and Event Venue Hire",
    labelPosition: "bottom",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783490768/Mask_Group_2_lurvp7.png",
  },
  {
    label: "Workshop and class Space",
    labelPosition: "top",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783490768/Mask_Group_3_ais6sd.png",
  },
  {
    label: "Hens and Bridal Shower",
    labelPosition: "top",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783490768/Mask_Group_4_hhaanj.png",
  },
  {
    label: "Classes with Glasses",
    labelPosition: "bottom",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783490768/Mask_Group_5_spljx8.png",
  },
  {
    label: "Balcony Space",
    labelPosition: "top",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/f_auto,q_auto/v1783490768/Mask_Group_3_ais6sd.png",
  },
];

export default function VenueGallery(): JSX.Element {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section ref={sectionRef} className="reveal-parent mx-auto max-w-[1920px] px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20">
      {/* Heading */}
      <div className="reveal-slide-up text-center">
        <h2 className="font-serif text-2xl leading-snug text-gray-900 sm:text-3xl">
          Hustle Studios ... the perfect venue
          <br />
          for functions and events!
        </h2>
        <p className="mt-3 text-sm text-gray-500">
          Versatile spaces designed to adapt to your unique needs.
        </p>
      </div>

      {/* Gallery grid */}
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.label}
            className="reveal-flip-in flex flex-col"
          >
            {item.labelPosition === "top" && (
              <h3 className="mb-3 text-center text-sm font-semibold text-[#F5A25D] sm:text-base">
                {item.label}
              </h3>
            )}

            <div className="group hover-card-trigger overflow-hidden rounded-xl">
              <img
                src={item.imageUrl}
                alt={item.label}
                className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {item.labelPosition === "bottom" && (
              <h3 className="mt-3 text-center text-sm font-semibold text-[#F5A25D] sm:text-base">
                {item.label}
              </h3>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}