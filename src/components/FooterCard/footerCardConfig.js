// Footer card configuration based on route paths
export const footerCardConfig = {
  "/": {
    title: "Next-Gen Industry is Here",
    highlightText: "Are You Ready to Lead?",
    buttonText: "Book a Demo",
    buttonHref: "#demo",
    description: "",
  },
  "/eagle": {
    title: "Explore Solutions from ",
    highlightText: "EAGLE",
    buttonText: "Explore Solutions",
    buttonHref: "#contact",
    redirectButton: "/connected-factories-solutions",
    description:
      "Using EAGLE, you can build comprehensive Connected Factory solutions — from Production and Quality to Tool-life and Maintenance.",
  },
  "/analytics": {
    title: "Ready to explore ",
    highlightText: "Tecosoft Analytics?",
    buttonText: "Book a Demo",
    buttonHref: "#analytics-demo",
    description:
      "Book a personalized demo and see how our platform can transform your data into decisions.",
  },
  "/solutions": {
    title: "Ready to modernize your ",
    highlightText: "factory?",
    buttonText: "Request a Pilot",
    buttonHref: "#request-pilot",
    description:
      "Experience how our platform connects every process, boosts efficiency, and turns data into smarter decisions.",
  },
  // Default fallback configuration
  default: {
    title: "Next-Gen Industry is Here",
    highlightText: "Are You Ready to Lead?",
    buttonText: "Request a Demo",
    buttonHref: "#demo",
  },
  "/connected-factories-solutions/production-digitization": {
    title: "Achieve 360° Production Visibility with  ",
    highlightText: "EAGLE",
    buttonText: "Request a Demo",
    buttonHref: "#contact",
    description:
      "Empower your manufacturing operations with real-time OEE tracking, closed-loop feedback, and performance-driven insights.",
  },
  "/connected-factories-solutions/inspection-digitization": {
    title: "Bring ",
    highlightText: "Inspection Digitization ",
    title2: "to Your Floor",
    buttonText: "Request a Demo",
    buttonHref: "#contact",
    description:
      "Reduce escapes, improve traceability, and enable intelligent process correction with Tecosoft's Inspection Digitization suite.",
  },
  "/connected-factories-solutions/tool-life-monitoring-digitization": {
    title: "Digitize Your",
    highlightText: " Tool Management",
    title2: " Today",
    buttonText: "Request a Demo",
    buttonHref: "#contact",
    description:
      "Transform tool management with Tecosoft's Tool Life Monitoring - enabling precision, accountability, and operational excellence.",
  },
  "/connected-factories-solutions/maintenance-digitization": {
    title: "From Paper to ",
    highlightText: "Performance",
    buttonText: "Request a Demo",
    buttonHref: "#contact",
    description:
      "Eliminate paperwork, improve accountability, and make audits effortless with digital records.",
  },
  "/ai-enabled-solutions": {
    title: "Ready to ",
    highlightText: "power the future",
    title2: " of your factory?",
    buttonText: "Request a Demo",
    buttonHref: "#contact",
    description:
      "Start with Energy Intelligence or Predictive Maintenance - or deploy both for compounding gains.",
  },
  "/ai-enabled-solutions/smart-energy-management": {
    title: "Ready to Power the ",
    highlightText: "Future with AI?",
    buttonText: "Request a Demo",
    buttonHref: "#contact",
    description:
      "Deploy AI‑enabled energy intelligence with EAGLE to forecast, optimize, and sustain - turning every kilowatt into a strategic advantage.",
  },
  "/ai-enabled-solutions/predictive-maintenance": {
    title: "Ready to ",
    highlightText: "Predict?",
    buttonText: "Request a Demo",
    buttonHref: "#contact",
    description:
      "Bring EAGLE-enabled edge intelligence and machine-specific AI to your shopfloor — reduce downtime and plan maintenance with confidence.",
  },
  "/digital-twin-solutions": {
    title: "Ready to build your ",
    highlightText: " living digital twin?",
    title2: "",
    buttonText: "Request a Demo",
    buttonHref: "#contact",
    description:
      "Begin with a pilot project or single site, then scale across all operations as value increases.",
  },
  "/industries": {
    title: "Bring Your Operations to a",
    highlightText: "Single Pane of Glass",
    title2: "",
    buttonText: "Book a Demo",
    buttonHref: "#contact",
    description: "",
  },
  "/blogs": {
    title: "Bring Your Operations to a",
    highlightText: "Single Pane of Glass",
    buttonText: "Book a Demo",
    buttonHref: "#contact",
    description:
      "",
  },
};
export const getFooterCardConfig = (pathname) => {
  const sanitize = (url) => url.replace(/\/$/, "") || "/";
  const sanitizedPathname = sanitize(pathname);

  // Exact match first
  if (footerCardConfig[sanitizedPathname]) {
    return footerCardConfig[sanitizedPathname];
  }

  // Handle dynamic blog slugs
  if (sanitizedPathname.startsWith("/blogs/")) {
    return footerCardConfig["/blogs"];
  }

  // Default fallback
  return footerCardConfig.default;
};
