export const IMAGES = {
  logo: "/logo-black.png",
  logoBlack: "/logo-black.png",
  logoWhite: "/logo-white.png",
  hero: "/hero.webp",
  heroAlt: "/hero-alt.webp",
  projects: [
    "/project-turbomax-closeup.webp",
    "/project-turbomax-wide.webp",
    "/project-gas-boiler-room.webp",
    "/project-plate-heat-exchanger.webp",
    "/plumbing-hero.webp",
    "/plumber-working.webp",
  ],
  hydronic: "/hydronic-heating.webp",
  steam: "/steam-boilers.webp",
  plumbing: "/commercial-plumbing.webp",
  boilerRoom: "/project-turbomax-closeup.webp",
  pipework: "/project-turbomax-wide.webp",
  gauges: "/backflow-testing.webp",
  stockServices: {
    plumbing: "/commercial-plumbing.webp",
    hydronic: "/hydronic-heating.webp",
    steam: "/steam-boilers.webp",
    backflow: "/backflow-testing.webp",
    consultation: "/consultation.webp",
  },
} as const;

export const SITE = {
  name: "Molinnus Plumbing & Heating",
  tagline: "Ontario's Commercial Plumbing & Heating Experts",
  phone: "(905) 831-1539",
  phoneTel: "tel:9058311539",
  email: "info@molinnusplumbingandheating.com",
  address: "Ontario, Canada",
  instagram: "https://www.instagram.com/molinnusplumbing",
  regions: [
    "Durham Region",
    "Greater Toronto Area",
    "Peterborough",
    "The Kawarthas",
    "Southern Ontario",
  ],
  yearsFounded: 2003,
  yearsExperience: 20,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "commercial-plumbing",
    title: "Commercial Plumbing",
    shortTitle: "Plumbing",
    navDesc: "High-rise plumbing, re-piping & backflow testing",
    description:
      "Full-service commercial plumbing solutions for high-rise buildings, property management firms, and institutional facilities across Ontario.",
    features: [
      "Commercial Backflow Testing & Certification",
      "High-Rise DHW Distribution Solutions",
      "Building Re-Piping & Water Main Replacement",
      "Commercial Water Main Replacement",
      "24/7 Emergency Plumbing Service",
    ],
    icon: "Wrench" as const,
  },
  {
    slug: "hydronic-heating",
    title: "Hydronic Heating Systems",
    shortTitle: "Hydronic Heating",
    navDesc: "Boiler installs, system design & efficiency upgrades",
    description:
      "Expert design, installation, and servicing of commercial hydronic heating systems refined over 20 years of delivering projects for property management firms across Ontario.",
    features: [
      "Boiler Replacements with Latest Technologies",
      "Hydronic System Design & Engineering",
      "Commercial Boiler System Optimization",
      "Complete Pump & Piping Service",
      "Energy Efficiency Upgrades",
    ],
    icon: "Flame" as const,
  },
  {
    slug: "steam-boilers",
    title: "Steam Boiler Systems",
    shortTitle: "Steam Boilers",
    navDesc: "TSSA-approved installs & Fulton certified",
    description:
      "TSSA-approved high-pressure steam boiler installations with a spotless safety record. Recommended Fulton boiler installer serving Southern Ontario.",
    features: [
      "High-Pressure Steam Boiler Installation",
      "Fulton Boiler Specialist",
      "TSSA Approved & Inspected",
      "Steam System Diagnostics & Repair",
      "Preventative Maintenance Programs",
    ],
    icon: "Gauge" as const,
  },
  {
    slug: "backflow-testing",
    title: "Backflow Testing & Prevention",
    shortTitle: "Backflow Testing",
    navDesc: "Certified testing & compliance programs",
    description:
      "Certified commercial backflow testing and cross-connection control programs to keep your building compliant and your water supply safe.",
    features: [
      "Annual Backflow Testing & Certification",
      "Cross-Connection Control Programs",
      "Backflow Prevention Device Installation",
      "Compliance Reporting & Documentation",
      "Municipal Liaison & Filing",
    ],
    icon: "ShieldCheck" as const,
  },
  {
    slug: "consultation",
    title: "Mechanical Consultation",
    shortTitle: "Consultation",
    navDesc: "Expert guidance before you commit",
    description:
      "Professional paid consultation services providing honest, expert guidance on commercial plumbing and heating projects before you commit.",
    features: [
      "Troubleshooting Existing Systems",
      "Expert Second Opinion on Ongoing Projects",
      "Future Project Design Consultation",
      "Energy Audit & Efficiency Review",
      "Code Compliance Assessment",
    ],
    icon: "MessageSquare" as const,
  },
] as const;

export const PROJECTS = [
  {
    title: "Glycol Snow Melt System Installation",
    location: "Ontario",
    category: "Hydronic Heating",
    description:
      "First half of the ramp completed for a new glycol snow melt system, delivering reliable ice and snow prevention through precision hydronic piping and glycol circulation.",
    image: "/p10.webp",
  },
  {
    title: "Commercial Storage Tank Replacement",
    location: "Toronto, GTA",
    category: "Commercial Plumbing",
    description:
      "Removed and replaced aging domestic hot water storage tanks in a commercial basement mechanical room, including new piping connections and system re-commissioning.",
    image: "/p6.webp",
  },
  {
    title: "Gas-Fired Boiler Room Upgrade",
    location: "Durham Region",
    category: "Steam Boilers",
    description:
      "Complete gas-fired boiler room overhaul including equipment removal, new gas line routing, and flue venting upgrades to meet current TSSA safety standards.",
    image: "/project-gas-boiler-room.webp",
  },
  {
    title: "TurboMax DHW System Installation",
    location: "Peterborough",
    category: "Commercial Plumbing",
    description:
      "Installed a TurboMax indirect water heater with full copper and black iron piping distribution, delivering high-volume domestic hot water for a multi-unit commercial building.",
    image: "/project-turbomax-wide.webp",
  },
  {
    title: "Heat Exchanger & Boiler Replacement",
    location: "Ontario",
    category: "Steam Boilers",
    description:
      "Removed and replaced aging heat exchangers and boiler units with buried copper steam lines, improving system reliability and energy efficiency for a commercial heating plant.",
    image: "/project-plate-heat-exchanger.webp",
  },
  {
    title: "Boiler Plant Redundancy Upgrade",
    location: "Ontario",
    category: "Hydronic Heating",
    description:
      "Engineered and installed 2-inch copper bypass piping with Victaulic and Viega fittings to add zone redundancy to a dual-boiler heating plant, eliminating single points of failure and ensuring uninterrupted heat across all zones.",
    image: "/p3.webp",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Molinnus completely transformed our building's heating system. Their expertise with hydronic systems saved us thousands in energy costs and their team was professional from start to finish.",
    author: "R. Thompson",
    role: "Property Manager",
    company: "Durham Property Group",
  },
  {
    quote:
      "We've relied on Molinnus for over a decade for all our commercial plumbing needs. Their 24/7 emergency response has saved us from major water damage more than once.",
    author: "S. Patel",
    role: "Facilities Director",
    company: "GTA Commercial Realty",
  },
  {
    quote:
      "The steam boiler installation was flawless. TSSA approved on the first inspection. You can tell they take pride in their work. Every joint, every connection was perfect.",
    author: "M. Chen",
    role: "Operations Manager",
    company: "Ontario Manufacturing Co.",
  },
  {
    quote:
      "Their consultation service alone was worth every penny. They identified issues our previous contractor missed and saved us from a costly mistake on our re-piping project.",
    author: "J. Williams",
    role: "Building Superintendent",
    company: "Kawartha Towers Inc.",
  },
  {
    quote:
      "Top-notch quality and professionalism every step of the way. The work was done right, on schedule, and at a fair price. Honest, reliable, and great value for the level of service you get.",
    author: "Krista Munch",
    role: "Google Review",
    company: "Verified Customer",
  },
] as const;

export const CERTIFICATIONS = [
  "TSSA Licensed & Approved",
  "Ontario College of Trades",
  "WSIB Covered",
  "Fulton Recommended Installer",
  "Gas Fitter Certified",
  "Steamfitter Licensed",
] as const;
