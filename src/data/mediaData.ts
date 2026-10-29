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
    title: "Grand Championship Trophy Presentation",
    category: "Community Sports & Youth",
    event: "Baba Agba Unity Cup & Youth Championship",
    date: "October 2026",
    location: "Owo Sports Arena, Ondo State",
    description: "Hon. Gbenga Abiodun Eleduma (Baba Agba 1) joined by community leaders and sports dignitaries presenting the prestigious grand championship trophy and medals to the victorious team captain.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.21_AM_ba6f7959.jpeg",
    aspect: "landscape",
    highlights: ["1st Place Grand Trophy", "Medal of Honor", "Youth Empowerment"]
  },
  {
    id: "media-02",
    title: "Golden Trophy & Tournament Honours Presentation",
    category: "Community Sports & Youth",
    event: "Grassroots Football Leadership Honours",
    date: "October 2026",
    location: "VIP Pavilion, Owo Sports Complex",
    description: "Hon. Gbenga Abiodun Eleduma presenting the iconic Golden World Cup replica trophy and official championship distinctions to the technical tournament leadership.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__5__3f9d339f.jpeg",
    aspect: "portrait",
    highlights: ["Golden World Cup Replica", "Technical Leadership Recognition", "Grassroots Development"]
  },
  {
    id: "media-03",
    title: "Medal Conferment & Leadership Handshake",
    category: "Community Sports & Youth",
    event: "Post-Match Dignitary Felicitation Ceremony",
    date: "October 2026",
    location: "VIP Pavilion, Ondo State",
    description: "Warm executive handshake and presentation of the commemorative gold medallion to distinguished sporting patrons and club officials.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__4__e64e9f5f.jpeg",
    aspect: "portrait",
    highlights: ["Gold Medallion", "Executive Felicitation", "Youth Patronage"]
  },
  {
    id: "media-04",
    title: "Grand Unity Cup Handover to Outstanding Forward",
    category: "Community Sports & Youth",
    event: "Baba Agba Unity Tournament Finals",
    date: "October 2026",
    location: "Owo Sports Arena, Ondo State",
    description: "Hon. Gbenga Abiodun Eleduma conferring the towering championship cup upon the star tournament player amidst celebratory cheers.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__3__205e52ff.jpeg",
    aspect: "portrait",
    highlights: ["Tournament MVP", "Grand Unity Cup", "Player Recognition"]
  },
  {
    id: "media-05",
    title: "Gold Medal Presentation to Match Officials & FIFA Referee",
    category: "Community Sports & Youth",
    event: "Fair Play & Professional Officiating Honours",
    date: "October 2026",
    location: "VIP Pavilion, Owo Stadium",
    description: "Recognizing high standards at the grassroots: Baba Agba honoring the officiating FIFA-badged referee with a medal of merit and professional appreciation for integrity and fair play.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__2__b71ff493.jpeg",
    aspect: "portrait",
    highlights: ["FIFA Badged Referee", "Fair Play Recognition", "Sports Standards"]
  },
  {
    id: "media-06",
    title: "Certificate of Merit & Medal for Rising Talent",
    category: "Community Sports & Youth",
    event: "Youth Athlete Sponsorship & Talent Recognition",
    date: "October 2026",
    location: "Owo Sports Complex, Ondo State",
    description: "Hon. Gbenga Abiodun Eleduma encouraging young grassroots athletes with certificates of achievement, gold medals, and educational sponsorship support.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM__1__2234bd9f.jpeg",
    aspect: "portrait",
    highlights: ["Certificate of Merit", "Emerging Star", "Youth Mentorship"]
  },
  {
    id: "media-07",
    title: "Golden Glove / Best Goalkeeper Distinction",
    category: "Community Sports & Youth",
    event: "Tournament Individual Accolades Ceremony",
    date: "October 2026",
    location: "Owo Sports Arena, Ondo State",
    description: "Conferment of the coveted Golden Glove sculpture trophy and official parchment distinction to the tournament's top-performing shot-stopper.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.22_AM_9d299201.jpeg",
    aspect: "landscape",
    highlights: ["Best Goalkeeper", "Golden Glove Trophy", "Defensive Excellence"]
  },
  {
    id: "media-08",
    title: "Ceremonial Match Kickoff by Hon. Gbenga Abiodun Eleduma",
    category: "Community Sports & Youth",
    event: "Grand Opening Kickoff & Community Festival",
    date: "October 2026",
    location: "Championship Pitch, Owo, Ondo State",
    description: "Hon. Gbenga Abiodun Eleduma (Baba Agba 1) performing the official ceremonial kickoff on the pitch before hundreds of eager spectators and grassroots football enthusiasts.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.23_AM__1__91c76467.jpeg",
    aspect: "portrait",
    highlights: ["Ceremonial Kickoff", "Pitch Action", "Community Mobilization"]
  },
  {
    id: "media-09",
    title: "Championship Victory Ceremony with Community Elders",
    category: "Community Sports & Youth",
    event: "Grand Trophy Handover",
    date: "October 2026",
    location: "VIP Dais, Owo, Ondo State",
    description: "Dignitaries and community elders unite with Hon. Gbenga Abiodun Eleduma to present the championship trophy to the winning club captain wearing the golden captain's armband.",
    image: "/assets/aistudio/WhatsApp_Image_2026-10-29_at_2.55.23_AM_5e63e823.jpeg",
    aspect: "square",
    highlights: ["Community Elders", "Winning Captain", "Championship Joy"]
  },
  {
    id: "media-10",
    title: "Tasha Energy Supply & Bulk Fuel Fleet Logistics",
    category: "Field Execution & Engineering",
    event: "Commercial Logistics & Energy Depot Support",
    date: "2024",
    location: "Tasha Energy Complex, FCT Abuja",
    description: "Gatplus heavy-duty fuel bowser and bulk logistics dispatch supporting major civil energy operations.",
    image: IMAGES.tashaEnergySupply,
    aspect: "landscape",
    highlights: ["Energy Logistics", "Bulk Fleet", "Abuja FCT"]
  },
  {
    id: "media-11",
    title: "Heavy Galvanized Mast & Power Transmission Assembly",
    category: "Field Execution & Engineering",
    event: "Structural Infrastructure Delivery",
    date: "2024 - 2025",
    location: "Field Site Infrastructure Corridor",
    description: "Erection of high-capacity galvanized lattice masts and transmission hardware engineered for long-term municipal resilience.",
    image: IMAGES.galvanizedInfrastructure,
    aspect: "portrait",
    highlights: ["Civil Infrastructure", "Structural Galvanized Steel", "Public Utilities"]
  },
  {
    id: "media-12",
    title: "Reinforced Concrete Foundation Casting at Laloko",
    category: "Field Execution & Engineering",
    event: "Civil Works Execution",
    date: "2025",
    location: "Laloko Industrial Corridor, Ogun / Ondo Boundary",
    description: "On-site heavy concrete pouring and structural subterranean groundwork by Gatplus Dynamic engineering crews.",
    image: IMAGES.foundationCastingLaloko,
    aspect: "landscape",
    highlights: ["Subterranean Engineering", "Reinforced Concrete", "Quality Certified"]
  }
];
