// Footer card configuration based on route paths
export const footerCardConfig = {
  "/": {
    title: "Next-Gen Industry is Here",
    highlightText: "Are You Ready to Lead?",
    buttonText: "Talk to an Expert",
    buttonHref: "#demo",
    description: "", 
    
  },
  "/eagle": {
    title: "Explore Solutions from ",
    highlightText: "EAGLE",
    buttonText: "Explore Solutions",
    buttonHref: "#contact",
    description:
      "Using EAGLE, you can build comprehensive Connected Factory solutions — from Production and Quality to Tool-life and Maintenance.",
  },
  "/tecosoft-analytics": {
    title: "Ready to explore ",
    highlightText: "Tecosoft Analytics?",
    buttonText: "Book a Demo",
    buttonHref: "#analytics-demo",
    description:
      "Book a personalized demo and see how our platform can transform your data into decisions.",
  },
  // Default fallback configuration
  default: {
    title: "Next-Gen Industry is Here",
    highlightText: "Are You Ready to Lead?",
    buttonText: "Talk to an Expert",
    buttonHref: "#demo",
  },
};

// Helper function to get config based on pathname
export const getFooterCardConfig = (pathname) => {
  return footerCardConfig[pathname] || footerCardConfig.default;
};
