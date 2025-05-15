export const countries = [
  {
    name: "Saudi Arabia",
    code: "SA",
    flag: "🇸🇦",
    description: "Led HR transformation for major corporations in banking, telecom and government sectors",
    coordinates: [45.0792, 23.8859],
    projects: ["HR Excellence Program", "Digital Transformation Initiative", "HRMS Implementation"],
    color: "#01A651"
  },
  {
    name: "Bahrain",
    code: "BH",
    flag: "🇧🇭",
    description: "Consulted on talent management and organizational restructuring projects",
    coordinates: [50.5577, 26.0667],
    projects: ["Leadership Development Program", "Talent Assessment Framework"],
    color: "#CE1126"
  },
  {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    description: "Collaborated with Fortune 500 companies on global HR strategies",
    coordinates: [-95.7129, 37.0902],
    projects: ["Global Workforce Planning", "Cross-cultural Leadership"],
    color: "#3C3B6E"
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    description: "Partnered with multinational firms on international HR initiatives",
    coordinates: [-3.4360, 55.3781],
    projects: ["Performance Management System", "Succession Planning Framework"],
    color: "#012169"
  },
  {
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    description: "Facilitated Eastern-Western business practices alignment for global corporations",
    coordinates: [104.1954, 35.8617],
    projects: ["Cross-cultural Integration Program", "Leadership Exchange Initiative"],
    color: "#DE2910"
  },
  {
    name: "Qatar",
    code: "QA",
    flag: "🇶🇦",
    description: "Developed strategic HR initiatives for government and private sector",
    coordinates: [51.1839, 25.3548],
    projects: ["National Talent Development", "Qatarization Strategy"],
    color: "#8D1B3D"
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    description: "Implemented comprehensive HR solutions across multiple industries",
    coordinates: [55.3047, 25.2697],
    projects: ["Organizational Excellence Model", "HR Digital Transformation", "Emiratization Program"],
    color: "#00732F"
  }
];

export const connectionLines = [
  { from: "Saudi Arabia", to: "United Arab Emirates" },
  { from: "Saudi Arabia", to: "Bahrain" },
  { from: "Saudi Arabia", to: "Qatar" },
  { from: "United States", to: "United Kingdom" },
  { from: "United States", to: "China" },
  { from: "United Kingdom", to: "United Arab Emirates" },
  { from: "United Kingdom", to: "Qatar" },
  { from: "China", to: "United Arab Emirates" }
];