import { IMAGES } from '../assets';

export interface MediaItem {
  id: string;
  title: string;
  category: 'Community Sports & Youth' | 'Field Execution & Engineering' | 'Institutional & Humanitarian';
  event: string;
  date: string;
  location: string;
  description: string;
  image: string;
  aspect?: 'landscape' | 'portrait' | 'square';
  highlights: string[];
}

export const MEDIA_GALLERY: MediaItem[] = [
  {
    id: "media-01",
    title: "Championship Trophy Presentation",
    category: "Community Sports & Youth",
    event: "Unity Cup Finals",
    date: "October 2026",
    location: "Owo Sports Arena, Ondo State",
    description: "Hon. Gbenga Abiodun Eleduma presenting the championship trophy and medals to the winning team.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.21_AM_ba6f7959.jpeg",
    aspect: "landscape",
    highlights: ["Grand Trophy", "Unity Cup"]
  },
  {
    id: "media-02",
    title: "Tournament Honours Presentation",
    category: "Community Sports & Youth",
    event: "Leadership Honours",
    date: "October 2026",
    location: "VIP Pavilion, Owo",
    description: "Hon. Gbenga Abiodun Eleduma presenting tournament honours and replica trophy to officials.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__5__3f9d339f.jpeg",
    aspect: "portrait",
    highlights: ["Leadership Award", "Replica Cup"]
  },
  {
    id: "media-03",
    title: "Medal Conferment & Handshake",
    category: "Community Sports & Youth",
    event: "Post-Match Ceremony",
    date: "October 2026",
    location: "VIP Pavilion, Ondo State",
    description: "Executive commendation and gold medal presentation to sports officials.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__4__e64e9f5f.jpeg",
    aspect: "portrait",
    highlights: ["Gold Medal", "Sports Patrons"]
  },
  {
    id: "media-04",
    title: "Unity Cup Handover",
    category: "Community Sports & Youth",
    event: "Tournament Finals",
    date: "October 2026",
    location: "Owo Sports Arena",
    description: "Conferring the Unity Cup on the tournament's outstanding player.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__3__205e52ff.jpeg",
    aspect: "portrait",
    highlights: ["Top Player", "Championship"]
  },
  {
    id: "media-05",
    title: "Referee Recognition & Award",
    category: "Community Sports & Youth",
    event: "Fair Play Honours",
    date: "October 2026",
    location: "Owo Stadium",
    description: "Honouring the match referee with a medal for integrity and fair play.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__2__b71ff493.jpeg",
    aspect: "portrait",
    highlights: ["Match Officials", "Fair Play"]
  },
  {
    id: "media-06",
    title: "Youth Athlete Merit Award",
    category: "Community Sports & Youth",
    event: "Talent Sponsorship",
    date: "October 2026",
    location: "Owo Sports Complex",
    description: "Presenting certificates and medals to promising young grassroots athletes.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__1__2234bd9f.jpeg",
    aspect: "portrait",
    highlights: ["Youth Talent", "Certificate"]
  },
  {
    id: "media-07",
    title: "Golden Glove Award",
    category: "Community Sports & Youth",
    event: "Individual Accolades",
    date: "October 2026",
    location: "Owo Sports Arena",
    description: "Awarding the Golden Glove trophy to the tournament's best goalkeeper.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM_9d299201.jpeg",
    aspect: "landscape",
    highlights: ["Best Goalkeeper", "Golden Glove"]
  },
  {
    id: "media-08",
    title: "Ceremonial Match Kickoff",
    category: "Community Sports & Youth",
    event: "Tournament Opening",
    date: "October 2026",
    location: "Championship Pitch, Owo",
    description: "Hon. Gbenga Abiodun Eleduma performing the official ceremonial kickoff.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.23_AM__1__91c76467.jpeg",
    aspect: "portrait",
    highlights: ["Official Kickoff", "Opening Match"]
  },
  {
    id: "media-09",
    title: "Victory Trophy Presentation",
    category: "Community Sports & Youth",
    event: "Finals Ceremony",
    date: "October 2026",
    location: "VIP Dais, Owo",
    description: "Community elders and CEO presenting the championship trophy to the team captain.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.23_AM_5e63e823.jpeg",
    aspect: "square",
    highlights: ["Team Captain", "Victory Cup"]
  },
  {
    id: "media-10",
    title: "Bulk Fuel Fleet Logistics",
    category: "Field Execution & Engineering",
    event: "Energy Logistics",
    date: "2024",
    location: "Tasha Energy Complex, Abuja",
    description: "Heavy-duty fuel bowser fleet supporting civil energy operations.",
    image: IMAGES.tashaEnergySupply,
    aspect: "landscape",
    highlights: ["Fleet Dispatch", "Energy"]
  },
  {
    id: "media-11",
    title: "Transmission Mast Assembly",
    category: "Field Execution & Engineering",
    event: "Infrastructure Works",
    date: "2024 - 2025",
    location: "Field Site Infrastructure Corridor",
    description: "Galvanized lattice mast installation for power transmission networks.",
    image: IMAGES.galvanizedInfrastructure,
    aspect: "portrait",
    highlights: ["Steel Mast", "Power Grid"]
  },
  {
    id: "media-12",
    title: "Foundation Concrete Casting",
    category: "Field Execution & Engineering",
    event: "Civil Subterranean Works",
    date: "2025",
    location: "Laloko Industrial Corridor",
    description: "Concrete foundation pouring and structural groundwork by Gatplus crews.",
    image: IMAGES.foundationCastingLaloko,
    aspect: "landscape",
    highlights: ["Concrete Pour", "Civil Works"]
  }
];
