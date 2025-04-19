export const products = [
    {
      id: 1,
      title: "Energy Portal",
      slug: "energy-portal",
      description: "Our comprehensive digital platform provides real-time energy monitoring, analytics, and optimization tools for modern energy management.",
      image: "https://img.freepik.com/free-photo/wind-farms-fields_23-2149154470.jpg",
      category: "software",
      features: [
        "Real-time energy data visualization",
        "Predictive consumption analytics",
        "Customizable enterprise dashboards",
        "Multi-site management capabilities"
      ],
      details: {
        overview: "The Energy Portal serves as your centralized command center for all energy assets, providing actionable insights through advanced data processing.",
  
      },
      relatedProducts: [2, 3,4]
    },
    {
      id: 2,
      title: "Power Grid Solutions",
      slug: "power-grid-solutions",
      description: "Next-generation hardware and software solutions for modernizing power grid infrastructure and operations.",
      image: "https://img.freepik.com/free-photo/sun-setting-silhouette-electricity-pylons_1127-2986.jpg",
      category: "hardware",
      features: [
        "Grid resilience enhancement",
        "Dynamic load management",
        "Fault location isolation",
        "Renewable integration systems"
      ],
      details: {
        overview: "Our complete suite of grid solutions addresses the full spectrum of transmission and distribution challenges in the energy transition era.",

      },
      relatedProducts: [1, 4,5]
    },
    {
      id: 3,
      title: "Renewable Energy Services",
      slug: "renewable-energy-services",
      description: "End-to-end solutions for renewable energy development, integration, and optimization.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "services",
      features: [
        "Solar/Wind feasibility studies",
        "PPA structuring advisory",
        "Performance optimization",
        "Asset management services"
      ],
      details: {
        overview: "From greenfield development to operational excellence, we provide comprehensive support for your renewable energy portfolio.",
 
      },
      relatedProducts: [1, 5]
    },
    {
      id: 4,
      title: "Transmission & Distribution Solutions",
      slug: "transmission-distribution-solutions",
      description: "Specialized technologies for efficient and reliable power delivery across networks.",
      image: "https://img.freepik.com/free-photo/field-covered-greenery-with-transmission-towers-blurry-background_181624-9337.jpg",
      category: "hardware",
      features: [
        "Advanced conductor systems",
        "Smart switching devices",
        "Voltage regulation tech",
        "Condition monitoring"
      ],
      details: {
        overview: "The Energy Portal serves as your centralized command center for all energy assets, providing actionable insights through advanced data processing.",
      },
      relatedProducts: [2, 5,3]
    },
    {
      id: 5,
      title: "Consulting & Advisory Services",
      slug: "consulting-advisory-services",
      description: "Strategic guidance for energy transition, regulatory compliance, and technology adoption.",
      image: "https://img.freepik.com/free-photo/top-view-co-workers-planning-strategy_1098-2959.jpg",
      category: "services",
      features: [
        "Energy transition roadmaps",
        "Regulatory strategy",
        "Technology assessment",
        "Investment due diligence"
      ],
      details: {
        overview: "Leverage our deep industry expertise to navigate complex energy challenges and capitalize on emerging opportunities.",
    
      },
      relatedProducts: [1,2,3]
    }
  ];