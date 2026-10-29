import { IMAGES } from '../assets';

export interface ProjectRecord {
  id: string;
  title: string;
  client: string;
  category: 'humanitarian' | 'aviation' | 'consulting' | 'procurement';
  year: string;
  location: string;
  summary: string;
  metrics: string;
  scope: string[];
  status: 'Completed & Certified' | 'Active Execution' | 'Retainer Framework';
}

export interface LeadershipMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  credentials: string[];
  focusAreas: string[];
}

export const CORPORATE_DATA = {
  name: "Gatplus Dynamic Resources Limited",
  shortName: "Gatplus Dynamic",
  cacNumber: "RC 1233350",
  incorporatedYear: "2014",
  yearsInOperation: "10+",
  address: "Suite 304, McLewis Plaza, Off Blantyre Crescent, Wuse II, Abuja, FCT, Nigeria",
  phone: "+234 (0) 9 291 8472 / +234 (0) 803 502 9182",
  email: "procurement@gatplusdynamic.com",
  inquiriesEmail: "info@gatplusdynamic.com",
  tin: "19284018-0001",
  bppCode: "BPP/IRR/2026/839102",
  pencomCert: "PEN-COMP-2026-0914",
  itfCert: "ITF-CLR-2026-44182",
  nsitfCert: "NSITF-COMP-2026-1029",
  directors: [
    {
      name: "Gbenga Abiodun Eleduma",
      role: "Managing Director / Chief Executive Officer",
      stakeholder: "Principal Executive & Procurement Strategist"
    },
    {
      name: "Oluwatoyin Faderemi Eleduma",
      role: "Executive Director",
      stakeholder: "Operations & Governance Oversight"
    }
  ]
};

export const PROJECTS: ProjectRecord[] = [
  {
    id: "proj-01",
    title: "Emergency Relief & Household Livelihood Distribution",
    client: "NCFRMI / Federal Ministry of Humanitarian Affairs",
    category: "humanitarian",
    year: "2024 - 2025",
    location: "Federal Transit Centers & Northern Host Communities",
    summary: "Turnkey procurement, supply chain logistics, and distribution of essential care materials, food items, artisanal toolkits, and household livelihood starter packages across host communities.",
    metrics: "Care & Maintenance Relief Distributions Executed",
    scope: [
      "Bulk procurement and quality-tested staging of staple nutritional foodstuff",
      "Assembly and packaging of artisanal trade starter toolkits for displaced families",
      "Coordinated logistics transit across designated federal humanitarian routes",
      "Biometric recipient handover documentation witnessed by NCFRMI field officers"
    ],
    status: "Completed & Certified"
  },
  {
    id: "proj-02",
    title: "Aviation Facility Support & Terminal Auxiliary Services",
    client: "Federal Ministry of Aviation & Aerospace Development",
    category: "aviation",
    year: "2024",
    location: "Nnamdi Azikiwe International Airport & Regional Federal Terminals",
    summary: "Mobilization, facility support services, and procurement delivery of specialized operational auxiliaries, equipment spares, and perimeter support infrastructure.",
    metrics: "Federal Infrastructure Mobilization & Facility Support",
    scope: [
      "Sourcing and delivery of precision terminal baggage conveyance spares",
      "Facility support apparatus and passenger flow auxiliary safety fixtures",
      "Perimeter security support installations and auxiliary lighting components",
      "Statutory vendor technical compliance documentation per ICAO benchmarks"
    ],
    status: "Completed & Certified"
  },
  {
    id: "proj-03",
    title: "Public Sector Strategic Leadership & Governance Capacity",
    client: "Institutional Strategy & Manpower Development",
    category: "consulting",
    year: "2024 - 2026 Retainer",
    location: "Abuja Executive Training Suites & Institutional Directorate",
    summary: "Executive training programs, strategic organizational coaching, and public procurement governance masterclasses delivered to public/private sector institutions.",
    metrics: "Executive Capacity & Strategy Frameworks Delivered",
    scope: [
      "Public Procurement Act (2007) regulatory compliance masterclasses",
      "Executive governance workshops for directorate-level civil servants",
      "Organizational strategy coaching and institutional change management",
      "Audit trail compliance, tender evaluation ethics, and risk mitigation"
    ],
    status: "Retainer Framework"
  },
  {
    id: "proj-04",
    title: "Federal Agricultural & Specialized Procurement Logistics",
    client: "Federal Ministries, Extra-Ministerial Departments & Agencies",
    category: "procurement",
    year: "2023 - 2024",
    location: "FCT Abuja & Selected Federal Operating Corridors",
    summary: "Sourcing, statutory procurement execution, and nationwide logistics delivery of specialized equipment, agricultural supplies, and corporate materials.",
    metrics: "100% Statutory Compliance & Delivery Standards",
    scope: [
      "Statutory procurement sourcing compliant with BPP thresholds and guidelines",
      "Agricultural supplies, equipment kits, and institutional consumables mobilization",
      "Full supply chain documentation, delivery verification, and JCC certification",
      "Strict fiscal governance, tax clearance, and statutory audit integrity"
    ],
    status: "Completed & Certified"
  }
];

export interface DistinctionRecord {
  id: number;
  fullTitle: string;
  organization: string;
  citation: string;
  year?: string;
  badgeLabel?: string;
}

export const AWARDS_AND_DISTINCTIONS: DistinctionRecord[] = [
  {
    id: 1,
    fullTitle: "Chief Mayedero of Isuada Land (Traditional Title)",
    organization: "Isuada Land, Owo Local Government, Ondo State",
    citation: "Conferred Traditional Chieftaincy Title for Community Stewardship & Leadership",
    badgeLabel: "Traditional Title"
  },
  {
    id: 2,
    fullTitle: "Chief Asiwaju Bobaselu of Upenmen Kingdom (Traditional Title)",
    organization: "Upenmen Kingdom, Owo Local Government, Ondo State",
    citation: "Conferred Royal Chieftaincy Title for Exemplary Royal Service & Community Development",
    badgeLabel: "Traditional Title"
  },
  {
    id: 3,
    fullTitle: "International Association of World Peace Advocates – Chartered Fellowship Award as Eminent Peace Ambassador (2023)",
    organization: "International Association of World Peace Advocates",
    citation: "Chartered Fellowship Award as Eminent Peace Ambassador",
    year: "2023",
    badgeLabel: "Chartered Fellowship"
  },
  {
    id: 4,
    fullTitle: "Arewa Youth Gamji Emirate Royal Council – Sir Ahmadu Bello Sardauna Merit Title / Garkuwan Matasa Gamji",
    organization: "Arewa Youth Gamji Emirate Royal Council",
    citation: "Sir Ahmadu Bello Sardauna Merit Title / Garkuwan Matasa Gamji",
    badgeLabel: "Royal Council Merit"
  },
  {
    id: 5,
    fullTitle: "Diocese of Owo (Church of Nigeria - Anglican Communion) – Excellent Performance Ambassador Award (2024)",
    organization: "Diocese of Owo (Church of Nigeria - Anglican Communion)",
    citation: "Excellent Performance Ambassador Award for Unwavering Service & Leadership",
    year: "2024",
    badgeLabel: "Ambassador Award"
  },
  {
    id: 6,
    fullTitle: "Oodua Special Recognition Award (OSRA) – Brand Ambassador for OSRA (2024, Ile-Ife)",
    organization: "Oodua Special Recognition Award (OSRA)",
    citation: "Brand Ambassador for OSRA, Conferred at Ile-Ife",
    year: "2024",
    badgeLabel: "Brand Ambassador"
  },
  {
    id: 7,
    fullTitle: "Oodua Special Recognition Award (OSRA) – The Oōdua Special Recognition Award (2022)",
    organization: "Oodua Special Recognition Award (OSRA)",
    citation: "The Oōdua Special Recognition Award for Pan-Regional Leadership & Impact",
    year: "2022",
    badgeLabel: "Special Recognition"
  },
  {
    id: 8,
    fullTitle: "Amalgamated APC Support Group & BSCION NSG – Award of Alliance (2023)",
    organization: "Amalgamated APC Support Group & BSCION NSG",
    citation: "Award of Alliance for Strategic Political Mobilization & Grassroots Support",
    year: "2023",
    badgeLabel: "Alliance Award"
  },
  {
    id: 9,
    fullTitle: "Owo PMAN (Performing Musician Association of Nigeria) – Merit Award as Most Faithful and Integrity Leader of the Year (2021)",
    organization: "Performing Musician Association of Nigeria (PMAN, Owo)",
    citation: "Merit Award as Most Faithful and Integrity Leader of the Year",
    year: "2021",
    badgeLabel: "Integrity Award"
  },
  {
    id: 10,
    fullTitle: "All Okedogbon Youth Development Owo – Award of Excellence (2021)",
    organization: "All Okedogbon Youth Development Owo",
    citation: "Award of Excellence for Grassroots Youth Empowerment & Community Upliftment",
    year: "2021",
    badgeLabel: "Award of Excellence"
  },
  {
    id: 11,
    fullTitle: "City Track Magazine – Ambassador Award as Icon of Excellence (2021)",
    organization: "City Track Magazine",
    citation: "Ambassador Award as Icon of Excellence in Business Leadership",
    year: "2021",
    badgeLabel: "Icon of Excellence"
  },
  {
    id: 12,
    fullTitle: "Diocese of Owo (Cathedral Church of St. Andrew Youths) – Humanitarian Award (2021)",
    organization: "Diocese of Owo (Cathedral Church of St. Andrew Youths)",
    citation: "Humanitarian Award for Selfless Service to the Needy and Sick",
    year: "2021",
    badgeLabel: "Humanitarian Award"
  },
  {
    id: 13,
    fullTitle: "Ondo State Leadership Award of Excellence – Ondo State Business Mogul of the Year (2019)",
    organization: "Ondo State Leadership Award of Excellence",
    citation: "Ondo State Business Mogul of the Year for Enterprise & Construction Stewardship",
    year: "2019",
    badgeLabel: "Business Mogul of the Year"
  },
  {
    id: 14,
    fullTitle: "Ondo Student's Association (Uni-Abuja Chapter) – Merit Award for Selfless Service (2019)",
    organization: "Ondo Student's Association (Uni-Abuja Chapter)",
    citation: "Merit Award for Selfless Service & Student Welfare Sponsorship",
    year: "2019",
    badgeLabel: "Selfless Service"
  },
  {
    id: 15,
    fullTitle: "The Royal Ambassador Club – Award of Honor as The Best Supporting Travel Agent Company (2017/2018)",
    organization: "The Royal Ambassador Club",
    citation: "Award of Honor as The Best Supporting Travel Agent Company",
    year: "2017/2018",
    badgeLabel: "Award of Honor"
  }
];

export interface PhysicalAwardRecord {
  id: string;
  image: string;
  title: string;
  presenter: string;
  dateOrYear: string;
  badgeLabel: string;
  inscription: string;
}

export const PHYSICAL_AWARDS_GALLERY: PhysicalAwardRecord[] = [
  {
    id: "osra-trophy",
    image: IMAGES.awardOsraTrophy,
    title: "Oōdua Special Recognition Award (OSRA)",
    presenter: "Oōdua Special Recognition Award Directorate · Ile-Ife",
    dateOrYear: "2022 / 2024",
    badgeLabel: "Special Recognition Honor",
    inscription: "Conferred upon Hon. Gbenga Abiodun Eleduma by the Oōdua Special Recognition Award (OSRA, Ile-Ife) in celebration of visionary leadership, indigenous empowerment, and pan-Yoruba cultural excellence."
  },
  {
    id: "ondo-business-mogul",
    image: IMAGES.awardOndoBusinessMogul,
    title: "Ondo State Business Mogul of the Year",
    presenter: "Ondo State Leadership Award of Excellence (NOLA / HERO)",
    dateOrYear: "7th December, 2019",
    badgeLabel: "Acrylic Flame Trophy",
    inscription: "Presented to Chief Gbenga Eleduma as Ondo State Business Mogul of the Year by Ondo State Leadership Award of Excellence celebrating enterprise innovation, youth employment creation, and general construction excellence."
  },
  {
    id: "apc-alliance",
    image: IMAGES.awardApcAlliance,
    title: "Award of Alliance & Grassroots Dedication",
    presenter: "Amalgamated APC Support Group & BSCION NSG",
    dateOrYear: "28th May, 2023",
    badgeLabel: "National Alliance Crest",
    inscription: "Presented to Hon. Gbenga Eleduma Abiodun with great appreciation and love for dedication, grassroots mobilization, and hard work in support of national democratic development."
  },
  {
    id: "okedogbon-youth",
    image: IMAGES.awardOkedogbonYouth,
    title: "Award of Excellence for Community Development",
    presenter: "All Okedogbon Youth Development Owo",
    dateOrYear: "24th December, 2021",
    badgeLabel: "Crystal Flame Trophy",
    inscription: "Presented to Hon. Eleduma Gbenga (Bsps Ydps) by All Okedogbon Youth Development Owo in recognition of sterling support for youth livelihood, security, and community progress."
  },
  {
    id: "owo-pman",
    image: IMAGES.awardOwoPman,
    title: "Most Faithful and Integrity Leader of the Year",
    presenter: "Performing Musician Association of Nigeria (PMAN, Owo)",
    dateOrYear: "19th December, 2021",
    badgeLabel: "Merit Citation Plaque",
    inscription: "Merit Award presented to Hon. Gbenga Abiodun Eleduma as The Most Faithful and Integrity Leader of the Year by PMAN Owo Chapter for principled governance and steadfast cultural arts patronage."
  },
  {
    id: "uni-abuja-students",
    image: IMAGES.awardUniAbujaStudents,
    title: "Merit Award for Selfless Service to God & Students",
    presenter: "Ondo Student's Association (Uni-Abuja Chapter)",
    dateOrYear: "2019",
    badgeLabel: "Gold Laurel Medal Plaque",
    inscription: "Presented to Mr. Olugbenga Eleduma Abiodun in recognition of selfless service to God and continuous welfare sponsorship of Ondo State students at the University of Abuja."
  },
  {
    id: "royal-ambassador",
    image: IMAGES.awardRoyalAmbassadorClub,
    title: "The Best Supporting Corporate Partner",
    presenter: "The Royal Ambassador Club",
    dateOrYear: "2017 / 2018",
    badgeLabel: "Award of Honor Plaque",
    inscription: "Award of Honor presented to Ambassador Gbenga Eleduma, C.E.O Gatplus Dynamic Resources Ltd, as The Best Supporting Travel Agent Company for operational integrity and exceptional corporate support."
  },
  {
    id: "nollywood-supporters",
    image: IMAGES.awardNollywoodSupporters,
    title: "Nollywood Supporters Award",
    presenter: "Bjos Media Network / Creative Arts Directorate",
    dateOrYear: "Patron of Excellence",
    badgeLabel: "Royal Hardwood Plaque",
    inscription: "Presented to Eleduma Gbenga Abiodun, C.E.O Gatplus Dynamic Resources Ltd, courtesy of Bjos Media Network for invaluable sponsorship and championing of the Nigerian creative film industry."
  },
  {
    id: "anglican-isuada-ambassador",
    image: IMAGES.awardAnglicanIsuada,
    title: "Excellent Performance Ambassador Award",
    presenter: "Diocese of Owo (Anglican Communion) · St. Paul's Church, Isuada",
    dateOrYear: "20th October, 2024",
    badgeLabel: "Archdiocesan Plaque",
    inscription: "Presented to Hon. Chief & Chief (Mrs) Gbenga Abiodun Eleduma for exemplary leadership, commitment to populist causes, and selfless service to humanity and community by Revd. Faith Temitope Adubika and The Rt Revd. Dr Stephen Ayodeji Fagbemi, FICT, Diocesan Bishop."
  },
  {
    id: "un-peace-ambassador",
    image: IMAGES.awardUnPeaceAmbassador,
    title: "Eminent Peace Ambassador (Chartered Fellowship Award)",
    presenter: "International Association of World Peace Advocates (UN Peace Volunteers)",
    dateOrYear: "16th June, 2023",
    badgeLabel: "UN Peace Seal & Fellowship",
    inscription: "Conferred upon Hon. Eleduma Gbenga Abiodun as Eminent Peace Ambassador under the 1984 United Nations Declaration on the Right of Peoples to Peace, certified with official seal by His Excellency Ambassador Per Stafsen, JP, MP, World Peace President, Denmark."
  },
  {
    id: "arewa-gamji-garkuwan",
    image: IMAGES.awardArewaGamjiTitle,
    title: "Sir Ahmadu Bello Sardauna Merit Title (Garkuwan Matasa Gamji)",
    presenter: "Arewa Youth Gamji Emirate Royal Council",
    dateOrYear: "Royal Investiture",
    badgeLabel: "Gilded Royal Crest Plaque",
    inscription: "Sir Ahmadu Bello Sardauna Merit Title presented to Hon. Gbenga Eleduma (CEO, Gatplus Dynamic Resources) as Garkuwan Matasa Gamji in recognition of selfless service, visionary leadership, and enormous contribution towards community and societal development."
  },
  {
    id: "osra-2024-brand-ambassador",
    image: IMAGES.awardOsraAmbassadorPlate,
    title: "Brand Ambassador for The Oodua Special Recognition Awards",
    presenter: "Oōdua Special Recognition Award Directorate · Ile-Ife",
    dateOrYear: "OSRA 2024 (Ile-Ife)",
    badgeLabel: "Gold Crest Presentation Case",
    inscription: "Conferred upon Ambassador Honourable Gbenga Eleduma Abiodun as Brand Ambassador for The Oodua Special Recognition Awards (OSRA 2024, Ile-Ife) in celebration of outstanding cultural leadership and socio-economic empowerment."
  },
  {
    id: "st-andrew-humanitarian",
    image: IMAGES.awardStAndrewHumanitarian,
    title: "Humanitarian Award for Youth Growth & Development",
    presenter: "The Cathedral Church of St Andrew Youths · Diocese of Owo",
    dateOrYear: "26th December, 2021",
    badgeLabel: "Youth Directorate Honor",
    inscription: "Presented to Hon. Gbenga Eleduma in recognition of your dedicated support to youth growth and development as well as unwavering humanitarian service to the community."
  },
  {
    id: "city-track-magazine-icon",
    image: IMAGES.awardCityTrackIcon,
    title: "Ambassador Award as Icon of Excellence",
    presenter: "City Track Magazine · Ondo State, Nigeria",
    dateOrYear: "15th August, 2021",
    badgeLabel: "Icon of Excellence Plaque",
    inscription: "Presented to Mr. Gbenga Eleduma as an Icon of Excellence for his commitment and contribution to the development of the community on the occasion of the Ambassador Award."
  },
  {
    id: "owo-sports-developer",
    image: IMAGES.awardOwoSportsDeveloper,
    title: "Owo Youth and Sports Developer of the Year",
    presenter: "Baba Agba Constituency Peace Cup Directorate",
    dateOrYear: "31st August, 2018",
    badgeLabel: "Grassroots Sports Plaque",
    inscription: "Conferred upon Hon. Olugbenga Eleduma (Baba Agba) in honor of grassroots athletic development, fostering peace, and championing youth empowerment across Owo."
  }
];

export const CEO_AUTOBIOGRAPHY_PARAGRAPHS = [
  "Chief Eleduma Gbenga Abiodun is an accomplished businessman, politician, and philanthropist of great repute. An indigene of Owo Local Government Area in Ondo State, Nigeria, Chief Eleduma has earned widespread recognition for his visionary leadership, dedication to community development, and unwavering commitment to humanity.",
  "A firm believer in the power of education, Chief Eleduma began his academic journey at Saint Martin Primary School, Owo, and proceeded to Imade College, Owo, for his secondary education. He later earned a degree in Accounting from Rufus Giwa Polytechnic, Owo and proceed to Imo State University to obtain a Bachelor Degree in Accountacy laying the foundation for his exceptional career in business and public service. He is currently a postgraduate student of Accountacy in Abia State University where he is pursuing his Masters degree.",
  "Currently, Chief Eleduma serves as the Managing Director and Chief Executive Officer of Gatplus Dynamics Resources Limited, Nigeria. Under his stewardship, Gatplus has flourished as a leading firm in general construction, training, and empowerment of unemployed youths and women, as well as the supply of agricultural materials and healthcare items. The company’s success is a testament to his entrepreneurial ingenuity and passion for economic empowerment.",
  "Chief Eleduma’s philanthropic endeavors are as notable as his professional achievements. He has demonstrated unwavering commitment to improving lives through medical outreach programs for the sick, and support initiatives for the aged and the needy. His contributions to humanity have earned him numerous traditional titles, including Chief Mayedero of Isuada Land and Chief Asiwaju Bobaselu of Upenmen Kingdom, both in Owo Local Government, Ondo State.",
  "In addition to his traditional honors, Chief Eleduma has received several prestigious awards, such as the Arewa Youth Gamji Award, The Odua Special Recognition Award, Meritorious Award from the National Association of Polytechnic Students, Nigerian Youth Frontier Award, Church of Nigeria Anglican Communion Leadership Award, All Okedogbon Youth Award, and the Distinguished Leadership Award from the National Association of Legislative Aides Caucus (South West).",
  "Beyond his professional and philanthropic endeavors, Chief Eleduma is a devoted family man. He is happily married to his supportive wife, Oluwatoyin Faderemi Eleduma, and together they are blessed with God-fearing children.",
  "As he receives this well-deserved national honor, Chief Eleduma Gbenga Abiodun stands as a shining example of selfless service, visionary leadership, and a deep commitment to the development of Nigeria and its people. His life and work are an inspiration to many, and his legacy continues to grow."
];

export const EXECUTIVE_PROFILE = {
  name: "Chief Eleduma Gbenga Abiodun",
  role: "Managing Director & Chief Executive Officer",
  title: "Accomplished Businessman, Politician & Philanthropist of Great Repute",
  image: IMAGES.ceoPortrait,
  bio: CEO_AUTOBIOGRAPHY_PARAGRAPHS.join("\n\n"),
  autobiography: CEO_AUTOBIOGRAPHY_PARAGRAPHS,
  distinctions: AWARDS_AND_DISTINCTIONS,
  leadershipPillars: [
    "Chief Mayedero of Isuada Land & Chief Asiwaju Bobaselu of Upenmen Kingdom",
    "Managing Director & CEO, Gatplus Dynamics Resources Limited (RC 1233350)",
    "Accomplished Businessman, Politician & Grassroots Philanthropist (Ondo State)",
    "Recipient of 15+ Verified Royal, Ecclesiastical, Academic & National Honors"
  ],
  focusAreas: [
    "General Construction & Critical Civil Infrastructure Projects",
    "Training & Vocational Empowerment of Unemployed Youths and Women",
    "Procurement & Supply of Agricultural Materials & Healthcare Items",
    "Humanitarian Medical Outreach, Elder Care & Civic Community Development"
  ],
  philanthropyHighlights: [
    {
      title: "Medical Outreach & Support for the Sick and Elderly",
      description: "Direct sponsorship of healthcare treatments, medical outreaches for the sick, and compassionate support initiatives for the aged and needy across Ondo State."
    },
    {
      title: "Youth & Women Economic Empowerment",
      description: "Hands-on vocational training, starter kits, and livelihood empowerment programs designed specifically for unemployed youths and women."
    },
    {
      title: "Agricultural Supplies & Community Welfare",
      description: "Sustained distribution of vital agricultural inputs, farming materials, and community relief drives to elevate rural household productivity."
    }
  ]
};

export const GOVERNANCE_DIRECTOR = {
  name: "Oluwatoyin Faderemi Eleduma",
  role: "Executive Director, Operations & Corporate Governance",
  title: "B.Sc, M.Sc Corporate Strategy",
  bio: "Oluwatoyin Faderemi Eleduma oversees Gatplus Dynamic Resources Limited's internal operations, financial stewardship, risk governance, and compliance protocols. She champions lean logistics workflows, ISO alignment, and ethical vendor management, ensuring all corporate operations mirror highest standards of transparency and client accountability.",
  credentials: [
    "12+ Years Enterprise Financial & Operational Management",
    "Specialist in Statutory Compliance (CAC, FIRS, PENCOM, ITF, NSITF)",
    "Senior Risk & Contract Assurance Strategist"
  ]
};
