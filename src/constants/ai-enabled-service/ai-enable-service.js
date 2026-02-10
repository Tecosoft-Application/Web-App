// ===========================
// Banner Section
// ===========================

export const BANNER_SECTION = {
  title: "One platform. Two ",
  highlightText: "Super power potentials.",
  description:
    "Unify energy and machine health under a single AI layer. Forecast demand, prevent failures, and automate actions across your shopfloor.",
  buttonText: "Request Demo",
  heroImage:
    "/assets/pages/digital-twin-platform/4c1dc57c1e7b64d3e936b9fbfff3dec05024ba0b.png",
  aiEnabledImage: "/assets/pages/ai-enabled/banner-ai.gif",
  gradientStyle:
    "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(202.813deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)",
};

// ===========================
// How It Works Section
// ===========================

export const HOW_IT_WORKS_DATA = [
  {
    id: 1,
    title: "Connect",
    description:
      "Easily integrate meters, sensors, PLC/SCADA systems, and historians with the EAGLE Edge platform to improve data collection and analysis.",
  },
  {
    id: 2,
    title: "Ingest",
    description:
      "Stream data easily to your on-premises setup or a cloud data lake, featuring time-series indexing for improved management and analysis.",
  },
  {
    id: 3,
    title: "Analyze",
    description:
      "Use AI to boost forecasting accuracy, spot anomalies, predict Remaining Useful Life (RUL), and optimize processes for better efficiency.",
  },
  {
    id: 4,
    title: "Act",
    description:
      "Align all elements by effectively integrating schedules, set points, and work orders. This approach will help close the loop and boost operational efficiency.",
  },
];

// ===========================
// Why AI-Enabled Services Section
// ===========================

export const WHY_AI_SECTION = {
  title: "Why AI-Enabled Solutions",
  description:
    "Turn slow, manual processes into intelligent, self-improving workflows - spot issues sooner, maintain audit-ready trails, and let AI automate the heavy lifting across your operations.",
};

export const WHY_AI_FEATURES = [
  {
    id: "tangible-roi",
    title: "Tangible ROI",
    description: "Lower energy costs, fewer breakdowns, faster payback.",
    iconPath: "/assets/pages/ai-enabled/why-us/arrow-up-right.svg",
    bgColor: "#e1f5e8",
    iconColor: "#07AF40",
  },
  {
    id: "secure-by-design",
    title: "Secure by Design",
    description: "Edge-first data flow, role based access, and audit trails.",
    iconPath: "/assets/pages/ai-enabled/why-us/shield.svg",
    bgColor: "#def6fd",
    iconColor: "#00B7FF",
  },
  {
    id: "modular-scalable",
    title: "Modular & Scalable",
    description:
      "Plug-and-play with your existing meters, PLCs, SCADA, and CMMS.",
    iconPath: "/assets/pages/ai-enabled/why-us/layer.svg",
    bgColor: "#fdf1de",
    iconColor: "#F9B70E",
  },
  {
    id: "operational-fit",
    title: "Operational Fit",
    description:
      "Designed for shift operations, with approvals and escalations built-in.",
    iconPath: "/assets/pages/ai-enabled/why-us/programming-arrow.svg",
    bgColor: "#f9e0e0",
    iconColor: "#E53A3A",
  },
];

// ===========================
// Solutions Section
// ===========================

export const SOLUTIONS_SECTION = {
  title: "Solutions",
  description:
    "Deliver smarter, scalable solutions with AI-driven workflows that reduce errors, enhance decision-making, and streamline execution across teams, systems, and end-to-end business operations.",
};

export const SOLUTIONS_DATA = [
  {
    id: "smart-energy-management",
    title: "Smart Energy Management",
    routeName: "/ai-enabled-solutions/smart-energy-management",
    description:
      "Forecast, optimize, and automate energy efficiency across utilities and lines. Build a digital energy twin and let AI reduce cost, peaks, and carbon.",
    features: [
      {
        icon: "thunder",
        label: "Real-time Energy Metering",
        bgColor: "rgba(204,241,255,0.5)",
        iconColor: "#0098D4",
      },
      {
        icon: "cpu",
        label: "Edge Aggregation & Control",
        bgColor: "rgba(204,241,255,0.5)",
        iconColor: "#0098D4",
      },
      {
        icon: "battery",
        label: "Automated Load Balancing",
        bgColor: "rgba(204,241,255,0.5)",
        iconColor: "#0098D4",
      },
      {
        icon: "brain",
        label: "AI-driven Optimization",
        bgColor: "rgba(204,241,255,0.5)",
        iconColor: "#0098D4",
      },
    ],
    // images: [
    //   "/assets/pages/ai-enabled/cbd07f254dfbf3ad759e853c6d966c3252b8ad07.png",
    //   "/assets/pages/ai-enabled/f01f07ceb8ba38fc08ca15a17209afd0ee47f318.png",
    //   "/assets/pages/ai-enabled/f3618873d8cb715764fc03e465951335b8a8705c.png",
    // ],
    images: [
      "/assets/pages/ai-enabled/step-1.jpg",
      "/assets/pages/ai-enabled/step-2.jpg",
      "/assets/pages/ai-enabled/step-3.jpg",
    ],
  },
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance",
    routeName: "/ai-enabled-solutions/predictive-maintenance",
    description:
      "Move from reactive to proactive maintenance. Predict failures, schedule service automatically, and sustain peak performance across assets and shifts.",
    features: [
      {
        icon: "dashboard-add",
        label: "Sensors Integration",
        bgColor: "rgba(205,239,217,0.46)",
        iconColor: "#069235",
      },
      {
        icon: "star",
        label: "Edge Intelligence",
        bgColor: "rgba(205,239,217,0.46)",
        iconColor: "#069235",
      },
      {
        icon: "server",
        label: "Automated Maintenance",
        bgColor: "rgba(205,239,217,0.46)",
        iconColor: "#069235",
      },
      {
        icon: "dashboard",
        label: "Failure Prediction",
        bgColor: "rgba(205,239,217,0.46)",
        iconColor: "#069235",
      },
    ],
    // images: [
    //   "/assets/pages/ai-enabled/f01f07ceb8ba38fc08ca15a17209afd0ee47f318.png",
    //   "/assets/pages/ai-enabled/cbd07f254dfbf3ad759e853c6d966c3252b8ad07.png",
    //   "/assets/pages/ai-enabled/f3618873d8cb715764fc03e465951335b8a8705c.png",
    // ],
    images: [
      "/assets/pages/ai-enabled/card-1.jpg",
      "/assets/pages/ai-enabled/card-2.jpg",
      "/assets/pages/ai-enabled/card-3.jpg",
    ],
  },
];
