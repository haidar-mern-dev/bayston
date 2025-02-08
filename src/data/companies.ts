import { CompanyDetails } from "@/types/company";

// Continued from the previous list
export const companies: CompanyDetails[] = [
  {
    id: "1",
    imageUrl: "/logos/air-algerie.jpeg",
    name: "Air Algérie",
    location: "Algiers",
    tagline: "Your gateway to the world",
    logo: "/logos/air-algerie.jpeg",
    jobTitle: "Flight Operations",
    description: [
      "Air Algérie is Algeria's national airline, offering domestic and international flights.",
      "Committed to safety, punctuality, and excellent service.",
    ],
    contact: {
      email: "info@airalgerie.dz",
      phone: "+213 21 98 63 63",
      location: "Dar El Beïda, Algiers",
      website: "https://www.airalgerie.dz",
    },
    Jobs: [
      {
        id: "1-1",
        title: "Pilot",
        company: "Air Algérie",
        location: "Algiers",
        description: [
          "Responsible for flying domestic and international routes.",
          "Ensuring passenger safety and adhering to strict flight protocols.",
        ],
        logo: "https://example.com/logos/air-algerie.png",
      },
      {
        id: "1-2",
        title: "Cabin Crew",
        company: "Air Algérie",
        location: "Oran",
        description: [
          "Ensures passenger comfort and safety during flights.",
          "Provides exceptional in-flight service.",
        ],
      },
    ],
  },
  {
    id: "2",
    imageUrl: "/logos/sonatrach.jpeg",
    name: "Sonatrach",
    location: "Hassi Messaoud",
    tagline: "Energy for tomorrow",
    logo: "/logos/sonatrach.jpeg",
    jobTitle: "Energy Sector Jobs",
    description: [
      "Sonatrach is Algeria's largest oil and gas company, operating globally.",
      "Focused on sustainable energy solutions.",
    ],
    contact: {
      email: "careers@sonatrach.dz",
      phone: "+213 29 74 11 11",
      location: "Hassi Messaoud",
      website: "https://www.sonatrach.dz",
    },
    Jobs: [
      {
        id: "2-1",
        title: "Petroleum Engineer",
        company: "Sonatrach",
        location: "Hassi R'mel",
        description: [
          "Oversees the extraction of oil and gas.",
          "Improves efficiency in drilling operations.",
        ],
      },
      {
        id: "2-2",
        title: "Geologist",
        company: "Sonatrach",
        location: "In Salah",
        description: [
          "Analyzes rock formations to identify oil and gas reserves.",
          "Prepares detailed geological reports.",
        ],
      },
    ],
  },
  {
    id: "3",
    imageUrl: "/logos/cosider.jpg",
    name: "Cosider",
    location: "Algiers",
    tagline: "Building a better Algeria",
    logo: "/logos/cosider.png",
    jobTitle: "Construction Jobs",
    description: [
      "Cosider is a leading construction company in Algeria, specializing in public works.",
      "Known for large-scale infrastructure projects.",
    ],
    contact: {
      email: "contact@cosider.dz",
      phone: "+213 21 50 50 50",
      location: "Algiers",
      website: "https://www.cosider.dz",
    },
    Jobs: [
      {
        id: "3-1",
        title: "Civil Engineer",
        company: "Cosider",
        location: "Constantine",
        description: [
          "Designs and supervises construction projects.",
          "Ensures compliance with safety standards.",
        ],
      },
      {
        id: "3-2",
        title: "Project Manager",
        company: "Cosider",
        location: "Oran",
        description: [
          "Leads construction projects from start to finish.",
          "Coordinates teams and manages budgets.",
        ],
      },
    ],
  },

  {
    id: "4",
    imageUrl: "/logos/djezzy.jpg",
    name: "Djezzy",
    location: "Algiers",
    tagline: "Connecting Algeria",
    logo: "/logos/djezzy.jpg",
    jobTitle: "Telecom Jobs",
    description: [
      "Djezzy is one of Algeria's leading telecommunications providers.",
      "Offering innovative solutions to keep Algeria connected.",
    ],
    contact: {
      email: "careers@djezzy.dz",
      phone: "+213 21 78 90 12",
      location: "Algiers",
      website: "https://www.djezzy.dz",
    },
    Jobs: [
      {
        id: "4-1",
        title: "Network Engineer",
        company: "Djezzy",
        location: "Tizi Ouzou",
        description: [
          "Maintains and optimizes telecommunication networks.",
          "Ensures minimal downtime and excellent service.",
        ],
        logo: "/logos/djezzy.png",
      },
      {
        id: "4-2",
        title: "Customer Support Representative",
        company: "Djezzy",
        location: "Algiers",
        description: [
          "Provides support to customers with technical and billing queries.",
          "Ensures customer satisfaction and quick issue resolution.",
        ],
      },
    ],
  },
  {
    id: "5",
    imageUrl: "https://example.com/images/condor.jpg",
    name: "Condor Electronics",
    location: "Bordj Bou Arreridj",
    tagline: "Innovation for everyday life",
    logo: "https://example.com/logos/condor.png",
    jobTitle: "Electronics Manufacturing",
    description: [
      "Condor Electronics is a leading brand in Algeria for home appliances and electronics.",
      "Committed to quality and innovation.",
    ],
    contact: {
      email: "hr@condor.dz",
      phone: "+213 35 68 12 34",
      location: "Bordj Bou Arreridj",
      website: "https://www.condor.dz",
    },
    Jobs: [
      {
        id: "5-1",
        title: "Production Engineer",
        company: "Condor Electronics",
        location: "Bordj Bou Arreridj",
        description: [
          "Oversees the manufacturing process for home appliances.",
          "Ensures efficiency and product quality.",
        ],
      },
      {
        id: "5-2",
        title: "Sales Executive",
        company: "Condor Electronics",
        location: "Oran",
        description: [
          "Drives sales and builds relationships with distributors.",
          "Focuses on meeting regional sales targets.",
        ],
      },
    ],
  },
  {
    id: "6",
    imageUrl: "https://example.com/images/cna.jpg",
    name: "CNA Rouiba",
    location: "Rouiba",
    tagline: "Refreshing Algeria",
    logo: "https://example.com/logos/cna.png",
    jobTitle: "Food & Beverage Manufacturing",
    description: [
      "CNA Rouiba is a leader in the beverage industry in Algeria, known for its juices and refreshments.",
      "Focused on sustainability and quality.",
    ],
    contact: {
      email: "jobs@cna.dz",
      phone: "+213 23 88 55 66",
      location: "Rouiba",
      website: "https://www.cna.dz",
    },
    Jobs: [
      {
        id: "6-1",
        title: "Food Quality Manager",
        company: "CNA Rouiba",
        location: "Rouiba",
        description: [
          "Ensures product quality meets industry standards.",
          "Supervises production and quality control teams.",
        ],
      },
      {
        id: "6-2",
        title: "Logistics Coordinator",
        company: "CNA Rouiba",
        location: "Blida",
        description: [
          "Manages supply chain and delivery processes.",
          "Optimizes logistics for cost and efficiency.",
        ],
      },
    ],
  },
  {
    id: "7",
    imageUrl: "https://example.com/images/biopharm.jpg",
    name: "Biopharm",
    location: "Dar El Beïda",
    tagline: "Health for a better life",
    logo: "https://example.com/logos/biopharm.png",
    jobTitle: "Pharmaceutical Jobs",
    description: [
      "Biopharm is one of Algeria's leading pharmaceutical companies.",
      "Focused on improving healthcare and accessibility.",
    ],
    contact: {
      email: "careers@biopharm.dz",
      phone: "+213 21 70 90 12",
      location: "Dar El Beïda, Algiers",
      website: "https://www.biopharm.dz",
    },
    Jobs: [
      {
        id: "7-1",
        title: "Pharmaceutical Sales Representative",
        company: "Biopharm",
        location: "Constantine",
        description: [
          "Promotes pharmaceutical products to healthcare providers.",
          "Builds strong client relationships.",
        ],
      },
      {
        id: "7-2",
        title: "Research Scientist",
        company: "Biopharm",
        location: "Algiers",
        description: [
          "Develops and tests new medications.",
          "Collaborates with regulatory teams for approval processes.",
        ],
      },
    ],
  },

  {
    id: "8",
    imageUrl: "https://example.com/images/naftal.jpg",
    name: "Naftal",
    location: "Algiers",
    tagline: "Fueling Algeria's future",
    logo: "https://example.com/logos/naftal.png",
    jobTitle: "Energy Distribution Jobs",
    description: [
      "Naftal is a leading company in the distribution of petroleum products in Algeria.",
      "Dedicated to innovation and reliable energy solutions.",
    ],
    contact: {
      email: "info@naftal.dz",
      phone: "+213 21 77 88 99",
      location: "Algiers",
      website: "https://www.naftal.dz",
    },
    Jobs: [
      {
        id: "8-1",
        title: "Supply Chain Analyst",
        company: "Naftal",
        location: "Blida",
        description: [
          "Monitors and optimizes the supply chain for fuel distribution.",
          "Analyzes data to improve delivery efficiency.",
        ],
      },
      {
        id: "8-2",
        title: "Maintenance Technician",
        company: "Naftal",
        location: "Oran",
        description: [
          "Ensures proper functioning of distribution equipment.",
          "Performs routine maintenance and troubleshooting.",
        ],
      },
    ],
  },
  {
    id: "9",
    imageUrl: "https://example.com/images/cacobatph.jpg",
    name: "CACOBATPH",
    location: "Algiers",
    tagline: "Building Algeria's future",
    logo: "https://example.com/logos/cacobatph.png",
    jobTitle: "Construction Materials Jobs",
    description: [
      "CACOBATPH specializes in providing construction materials for large-scale projects.",
      "Trusted by contractors across Algeria.",
    ],
    contact: {
      email: "contact@cacobatph.dz",
      phone: "+213 21 45 67 89",
      location: "Algiers",
      website: "https://www.cacobatph.dz",
    },
    Jobs: [
      {
        id: "9-1",
        title: "Sales Representative",
        company: "CACOBATPH",
        location: "Constantine",
        description: [
          "Develops relationships with construction firms to supply materials.",
          "Meets sales targets and ensures customer satisfaction.",
        ],
      },
      {
        id: "9-2",
        title: "Warehouse Manager",
        company: "CACOBATPH",
        location: "Tlemcen",
        description: [
          "Oversees inventory and ensures timely delivery of materials.",
          "Manages a team to streamline warehouse operations.",
        ],
      },
    ],
  },
  {
    id: "10",
    imageUrl: "https://example.com/images/ooredoo.jpg",
    name: "Ooredoo Algeria",
    location: "Algiers",
    tagline: "Empowering connections",
    logo: "https://example.com/logos/ooredoo.png",
    jobTitle: "Telecommunications Jobs",
    description: [
      "Ooredoo Algeria is a leader in telecommunications, offering cutting-edge services and products.",
      "Committed to innovation and customer satisfaction.",
    ],
    contact: {
      email: "jobs@ooredoo.dz",
      phone: "+213 21 30 50 70",
      location: "Algiers",
      website: "https://www.ooredoo.dz",
    },
    Jobs: [
      {
        id: "10-1",
        title: "IT Support Specialist",
        company: "Ooredoo Algeria",
        location: "Annaba",
        description: [
          "Provides technical support to maintain network uptime.",
          "Resolves customer and internal IT issues efficiently.",
        ],
      },
      {
        id: "10-2",
        title: "Marketing Manager",
        company: "Ooredoo Algeria",
        location: "Algiers",
        description: [
          "Develops marketing campaigns to promote telecom services.",
          "Collaborates with teams to drive brand visibility.",
        ],
      },
    ],
  },
];
