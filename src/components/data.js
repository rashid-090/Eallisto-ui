export const products = [
    {
      id: 1,
      title: "Energy Portal",
      slug: "energy-portal",
      description: "Our comprehensive digital platform provides real-time energy monitoring, analytics, and optimization tools for modern energy management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "software",
      features: [
        "Real-time energy data visualization",
        "Predictive consumption analytics",
        "Customizable enterprise dashboards",
        "Multi-site management capabilities"
      ],
      details: {
        overview: "The Energy Portal serves as your centralized command center for all energy assets, providing actionable insights through advanced data processing.",
        specifications: [
          "Cloud-based SaaS platform",
          "API integrations with major energy systems",
          "Role-based access control",
          "Automated reporting engine"
        ],
        benefits: [
          "Achieve 15-30% operational cost reduction",
          "Monitor all facilities from single pane",
          "Data-driven sustainability planning",
          "Scalable from SME to enterprise"
        ]
      },
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      ],
      relatedProducts: [2, 3]
    },
    {
      id: 2,
      title: "Power Grid Solutions",
      slug: "power-grid-solutions",
      description: "Next-generation hardware and software solutions for modernizing power grid infrastructure and operations.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "hardware",
      features: [
        "Grid resilience enhancement",
        "Dynamic load management",
        "Fault location isolation",
        "Renewable integration systems"
      ],
      details: {
        overview: "Our complete suite of grid solutions addresses the full spectrum of transmission and distribution challenges in the energy transition era.",
        specifications: [
          "Modular hardware components",
          "Cybersecurity-certified software",
          "Substation automation ready",
          "Legacy system compatibility"
        ],
        benefits: [
          "Increase grid uptime to 99.98%",
          "Accelerate renewable penetration",
          "Reduce technical losses by 18-25%",
          "Future-ready architecture"
        ]
      },
      gallery: [
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      ],
      relatedProducts: [1, 4]
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
        specifications: [
          "Technology-agnostic solutions",
          "Financial modeling tools",
          "O&M best practices",
          "Regulatory compliance support"
        ],
        benefits: [
          "Maximize project ROI",
          "Reduce development risks",
          "Improve asset performance",
          "Navigate complex policies"
        ]
      },
      gallery: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      ],
      relatedProducts: [1, 5]
    },
    {
      id: 4,
      title: "Transmission & Distribution Solutions",
      slug: "transmission-distribution-solutions",
      description: "Specialized technologies for efficient and reliable power delivery across networks.",
      image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "hardware",
      features: [
        "Advanced conductor systems",
        "Smart switching devices",
        "Voltage regulation tech",
        "Condition monitoring"
      ],
      details: {
        overview: "Engineered solutions that enhance capacity, efficiency, and reliability of power transmission and distribution infrastructure.",
        specifications: [
          "Increased line capacity solutions",
          "Fault current limiters",
          "Dynamic line rating systems",
          "Vegetation management tech"
        ],
        benefits: [
          "Defer capital expenditures",
          "Improve power quality",
          "Reduce system losses",
          "Extend asset lifespan"
        ]
      },
      gallery: [
        "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      ],
      relatedProducts: [2, 5]
    },
    {
      id: 5,
      title: "Consulting & Advisory Services",
      slug: "consulting-advisory-services",
      description: "Strategic guidance for energy transition, regulatory compliance, and technology adoption.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "services",
      features: [
        "Energy transition roadmaps",
        "Regulatory strategy",
        "Technology assessment",
        "Investment due diligence"
      ],
      details: {
        overview: "Leverage our deep industry expertise to navigate complex energy challenges and capitalize on emerging opportunities.",
        specifications: [
          "Bespoke consulting engagements",
          "Market intelligence reports",
          "Technology benchmarking",
          "Regulatory tracking"
        ],
        benefits: [
          "Informed strategic decisions",
          "Risk mitigation",
          "Accelerated innovation adoption",
          "Competitive advantage"
        ]
      },
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
      ],
      relatedProducts: [1, 3]
    }
  ];