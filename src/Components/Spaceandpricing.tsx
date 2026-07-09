import { type JSX } from "react";

type RoomOption = {
  name: string;
  imageUrl: string;
  galleryUrl: string;
  pricing: string[];
  description: string[];
};

// Replace each field with your actual room details, images, and gallery links.
// Only the first entry (First Floor) has real content from the screenshot —
// the remaining 8 are placeholders ready for you to fill in.
const ROOM_OPTIONS: RoomOption[] = [
  {
    name: "First Floor CLICK IMAGE FOR GALLERY",
    imageUrl:
      "https://res.cloudinary.com/dquki4xol/image/upload/v1783577299/35f5570330efe2737976d8b4272018b9e00b66e9_wmd2ns.png",
    galleryUrl: "#",
    pricing: [
      "Full day OR night: $900 (Winter special, usually $1,000)",
      "Full day AND night: $1,300",
      "After hours special: $450 (from 5.30pm, conditions apply; lower evening rate as you may need to reset the room after the daytime group)",
      "Sat / Sun: $580 (Conditions apply)",
      "Full service option: Add $150",
      "Cleaning fee (if BYOing food and drinks): $120",
      "Refundable bond (functions only): $500",
      "Glassware, cutlery and crockery package for up to 20 pax: $129 including washing up",
    ],
    description: [
      "120 sqm. Max 30 pax in total per booking. Includes exclusive use of The Living Room & The Balcony Room and The Garden Room and shared use of the kitchen and outdoor rooftop.",
      "The Living Room comes with tables and chairs, 55\u201D TV screen with HDMI cable to plug your laptop in, 5G broadband, HD 1080p webcam with wide 90\u00B0 field, large whiteboard and air-con.",
      "The Balcony Room has a table to layout catering, or for an extra 4 pax workshop style, private bathroom, couch break out space and small smokers balcony.",
      "The Garden Room comes with tables and chairs, TV with HDMI cable to plug your laptop in, webcam, 5G broadband, whiteboard and air-con.",
    ],
  },
  {
    name: "Living Room + Balcony Room (1st Floor) CLICK IMAGE FOR GALLERY",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783577298/eeeb850ab353454988a52fb5f0d14efe1eb7a8af_wzlmd0.png",
    galleryUrl: "#",
    pricing: [
        "Full day OR night: $600 (Winter special, usually $750)",
        "Full day AND night: $950",
        "After hours special: $350 (from 5.30pm, conditions apply; lower evening rate as you may need to reset the room after the daytime group)",
        "Sat / Sun: $450 (Conditions apply)",
        "Full service option: Add $150",
        "Cleaning fee (if BYOing food and drinks): $90",
        "Refundable bond (functions only): $500",
        "Glassware, cutlery and crockery package for up to 20 pax: $129 including washing up",
    ],
    description: [
        "65 sqm. 24 pax workshop, 30 cocktail/theatre style. Includes use of shared outdoor terrace (weather dependent) and kitchen.",
        "The Living Room comes with tables and chairs, 55” TV screen with HDMI cable to plug your laptop in, 5G broadband, HD 1080p webcam with wide 90° field, large whiteboard and air-con.",
        "The Balcony Room has a table to layout catering, or for an extra 4 pax workshop style, private bathroom, couch break out space and small smokers balcony.",
    ],
  },
  {
    name: "Living Room (1st Floor) - CLICK IMAGE FOR GALLERY",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783577297/7b00bd207e066a7888a76db7837f84d1e392911d_fqbndw.png",
    galleryUrl: "#",
    pricing: [ 
        "Full day OR night: $450 (Winter special, usually $550)",
        "Full day AND night: $700",
        "After hours special: $300 (from 5.30pm, conditions apply; lower evening rate as you may need to reset the room after the daytime group)",
        "Sat / Sun: $400 (Conditions apply)",
        "Full service option: Add $150",
        "Cleaning fee (if BYOing food and drinks): $90",
        "Refundable bond (functions only): $500",
        "Glassware, cutlery and crockery package for up to 20 pax: $129 including washing up.",
    ],
    description: [
        "40 sqm. 12 pax workshop / cocktail / theatre style. Includes use of shared outdoor terrace (weather dependent) and kitchen.",
        "Groups of more than 12 pax are required to use Living Room and Balcony Room Hire.",
        "Room comes with tables and chairs, 55” TV screen with HDMI cable to plug your laptop in, 5G broadband, HD 1080p webcam with wide 90° field, large whiteboard and air-con.",
    ],
  },
  {
    name: "Garden Room (1st Floor) CLICK IMAGE FOR GALLERY",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783577295/306f2238691174b28573b01641fdba3b618370d5_b8yzdv.png",
    galleryUrl: "#",
    pricing: [
        "Full day OR night: $320", 
        "Full day AND night: $500",
        "After hours special: $160 (from 5.30pm, conditions apply; lower evening ate as you may need to reset the room after the daytime group)",
        "Sat / Sun: $250 (Conditions apply)",
        "Full service option: Add $150",
        "Cleaning fee (if BYOing food and drinks): $90",
        "Refundable bond (functions only): $500",
        "Glassware, cutlery and crockery package for up to 20 pax: $129 including washing up",
    ],
    description: [
        "20 sqm 10 pax workshop. Includes use of shared outdoor terrace (weather dependent) and kitchen.",
        "Room comes with tables and chairs, TV with HDMI cable to plug your laptop in, webcam, 5G broadband, whiteboard and air-con.",
    ],
  },
  {
    name: "Le Grand Bureau (2nd Floor) - CLICK IMAGE FOR GALLERY",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783577298/bbb6b5033da6112f6574ef7d0c5c4be43d266762_kjew5f.png",
    galleryUrl: "#",
    pricing: [
        "Full day OR night: $280",
        "Full day AND night: $380",
        "After hours: $140 (from 5.30pm, conditions apply; lower evening rate as you may need to reset the room after the daytime group)",
        "Sat / Sun: $225 (Conditions apply)",
        "Full service option: Add $150",
        "NOT SUITABLE FOR FUNCTIONS.",
    ],
    description: [
        "30 sqm. 6–7 pax boardroom/workshop style. Includes use of shared outdoor terrace (weather dependent) and kitchen on the first floor.",
        "Room hire comes with tables and chairs, TV screen with HDMI cable to plug your laptop in, 4G broadband, HD 1080p webcam with wide 90° field, whiteboard and air-con.",
    ],
  },
  {
    name: "Le Petit Bureau (2nd Floor) CLICK IMAGE FOR GALLERY",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783577294/31b8db5584a02dfe3ce8eb7e4ae068b62db4ac79_cmpnxv.png",
    galleryUrl: "#",
    pricing: [
        "Per hour: $45", 
        "Full service option: Add $150", 
        "Full day: $180",
        "Full day AND night: $230",
        "NOT SUITABLE FOR FUNCTIONS.",
    ],
    description: [
        "12 sqm. 4 pax workshop style. Includes use of shared outdoor terrace (weather dependent) and kitchen.",
        "Room comes with table and chairs, TV with HDMI cable, web cam, whiteboard and 4G broadband",
    ],
  },
  {
    name: "Entire Studio (1st & 2nd Floors) - CLICK IMAGE FOR GALLERY",
    imageUrl: "https://res.cloudinary.com/dquki4xol/image/upload/v1783577298/6aed4aa2353e89058cc7c6f10cc23680506c102f_wdeg4j.png",
    galleryUrl: "#",
    pricing: [
        "Full day OR night: $1100 (Winter special, usually $1,300)", 
        "Full day AND night: $1,450", 
        "After hours special: $550 (Sfrom 5.30pm, conditions apply; lower evening rate as you may need to reset the room after the daytime group)",
        "Sat / Sun: $700 (Conditions apply)", 
        "Full service option: Add $150", 
        "Cleaning fee (if BYOing food and drinks): $150",
        "Refundable bond (functions only): $500", 
        "Glassware, cutlery and crockery package for up to 20 pax: $129 including washing up.", 
    ],
    description: [
        "200 sqm. 24 pax workshop, 30 cocktail/theatre style. Includes exclusive use of the whole studio across two floors including The Living Room & The Balcony Room, The Garden Room, Le Grand Bureau and Le Petit Bureau, outdoor terrace (weather dependent) and kitchen.", 
        "The Living Room (1st Floor) comes with tables and chairs, 55” TV screen with HDMI cable to plug your laptop in, 5G broadband, HD 1080p webcam with wide 90° field, large whiteboard and air-con.", 
        "The Balcony Room (1st Floor) has a table to layout catering, or for an extra 4 pax workshop style, private bathroom, couch break out space and small smokers balcony.",
        "Le Grand Bureau Room (2nd Floor) comes with tables and chairs, small chaise lounge, TV screen with HDMI cable to plug your laptop in, 4G broadband, HD 1080p webcam with wide 90° field, whiteboard and air-con.", 
        "Le Petit Bureau (2nd Floor) comes with table and chairs, TV with HDMI cable, web cam, whiteboard and 4G broadband.", 
    ],
  },
];

function RoomCard({ room }: { room: RoomOption }): JSX.Element {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#0F3457] p-5 shadow-md sm:p-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <a
          href={room.galleryUrl}
          className="group block overflow-hidden rounded-xl"
        >
          <img
            src={room.imageUrl}
            alt={room.name}
            className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:h-full"
          />
        </a>

        <div>
          <h3 className="text-base font-semibold leading-snug text-[#F5A25D] sm:text-lg">
            {room.name}
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/90">
            {room.pricing.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 space-y-4 border-t border-white/10 pt-5">
        {room.description.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-white/80">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function SpaceHireOptionsAndPricing(): JSX.Element {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-16">
      <h1 className="text-center font-serif text-2xl text-gray-900 sm:text-3xl">
        Space hire options and pricing
      </h1>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">
        Replace this intro paragraph with your actual copy — a short
        overview of how pricing works across the different rooms, any
        minimum hire periods, and what's included (e.g. tables, chairs,
        wifi) before guests scroll through the individual room options
        below.
      </p>

      <div className="mt-8 space-y-8">
        {ROOM_OPTIONS.map((room) => (
          <RoomCard key={room.name} room={room} />
        ))}
      </div>
    </div>
  );
}