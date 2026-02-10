export const heroContent = {
  title: "Inspection",
  highlight: "Digitization",
  description:
    "Digitize inspections across operator, line, and final packing stages - integrate gauges, control plans, and closed-loop actions for reliable quality.",
  video: "/assets/video/inspection-digitization.mp4",
  imagepath: "",
  image:
    "/assets/pages/solutions/production-digitization/722868975ad87bdad1f880aefbc37c33e60f610d.png",
  imageAlt: "EAGLE Edge inspection Digitization",
};

export const featuresContent = {
  sectionTitle: "Key Features",
  sectionDescription:
    "Digitize every inspection point - from first piece to final packing - to enhance visibility, accuracy, and accountability.",
  backgroundImage:
    "/assets/pages/solutions/production-digitization/3a380a8126032af34701f98b609fdbd9e932781c.png",
  // backgroundImage:
  //   "linear-gradient(90deg, rgba(0, 184, 219, 0.12) 0%, rgba(0, 184, 219, 0.12) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
  features: [
    {
      id: "operator-inspection",
      icon: "people",
      title: "Operator Inspection Digitized",
      description:
        "Record inspection results across operator, line, and final stages with automatic validation.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "digital-gauge",
      icon: "ruler",
      title: "Digital Gauge Integration",
      description:
        "Capture real-time gauge readings and feed them into the system for fast action.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "stage-control",
      icon: "folder",
      title: "Stage Control Plan (SCP)",
      description:
        "Configure stages and frequencies to ensure inspections occur at the right time.",
      bgColor: "rgba(204,241,255,0.5)",
    },
    {
      id: "quality-traceability",
      icon: "search",
      title: "Quality Traceability",
      description:
        "Ensure part-level traceability with complete, audit-ready records at every checkpoint.",
      bgColor: "rgba(204,241,255,0.5)",
    },
  ],
};

export const whyDigitizeContent = {
  sectionTitle: "Why Digitize Inspection?",
  sectionDescription:
    "Turn manual checks into a fast, auditable, and automated inspection system — detect problems early, keep clear records, and close the loop with machines.",
  image: "/assets/pages/solutions/inspection-digitization/why-us-image.png",
  imageAlt: "Digital inspection on tablet device",
  benefits: [
    {
      id: "reliable-data",
      icon: "/assets/pages/solutions/inspection-digitization/file.svg",
      title: "Reliable Data Capture",
      description:
        "Automated, standardized logging - no more handwritten sheets.",
      bgColor: "rgba(204, 241, 223, 1)",
    },
    {
      id: "reports-digitization",
      icon: "/assets/pages/solutions/inspection-digitization/folder.svg",
      title: "Inspection Reports Digitization",
      description:
        "Generate audit-ready digital reports for traceability and compliance.",
      bgColor: "rgba(204, 241, 255, 1)",
      iconColor: "#00B8DB",
    },
    {
      id: "end-to-end-traceability",
      icon: "/assets/pages/solutions/inspection-digitization/chart.svg",
      title: "End-to-End Traceability",
      description: "Follow every part from operator checks to final packing.",
      bgColor: "rgba(255, 243, 224, 1)",
      iconColor: "#FF9500",
    },
    {
      id: "closed-loop-correction",
      icon: "/assets/pages/solutions/inspection-digitization/refresh.svg",
      title: "Closed-Loop Correction",
      description:
        "Feed gauge feedback to machines to reduce rework and escapes.",
      bgColor: "rgba(255, 224, 230, 1)",
      iconColor: "#FF3B30",
    },
  ],
};

export const workflowContent = {
  sectionTitle: "Workflow : A Connected Inspection Journey",

  steps: [
    {
      id: 0,
      title: "Define Master Data",
      description:
        "Configure essential details, quality checks, and critical parameters for precise manufacturing.",
      iconPath:
        "/assets/pages/solutions/inspection-digitization/workflow/directbox-notif.svg",
    },
    {
      id: 1,
      title: "Establish SCP",
      description:
        "Define the sampling plan, acceptance criteria, and control limits for the inspection process.",

      iconPath:
        "/assets/pages/solutions/inspection-digitization/workflow/calendar.svg",
    },
    {
      id: 2,
      title: "Sync with EAGLE",
      description:
        "Seamlessly transmit inspection data to EAGLE, ensuring real-time synchronization of setups and results.",

      iconPath:
        "/assets/pages/solutions/inspection-digitization/workflow/sync.svg",
    },
    {
      id: 3,
      title: "First-Piece Check",
      description:
        "Validate the initial part produced to identify and address any defects early in the production cycle.",
      iconPath:
        "/assets/pages/solutions/inspection-digitization/workflow/tick-square.svg",
    },
    {
      id: 4,
      title: "Interval Inspections",
      description:
        "Scheduled checks with automated alerts ensure consistent quality and immediate response.",
      iconPath:
        "/assets/pages/solutions/inspection-digitization/workflow/clock.svg",
    },
    {
      id: 5,
      title: "Closed-loop Gauge Feedback",
      description:
        "Real-time gauge data automatically adjusts machine offsets, ensuring consistent part quality and reducing manual adjustments.",
      iconPath:
        "/assets/pages/solutions/inspection-digitization/workflow/refresh-2.svg",
    },
    {
      id: 6,
      title: "Review & Improve",
      description:
        "All inspection data is securely stored, enabling comprehensive audits and immediate improvements.",
      iconPath:
        "/assets/pages/solutions/inspection-digitization/workflow/chart.svg",
    },
  ],
};

export const statsContent = {
  sectionTitle: "Performance at a Glance",
  sectionDescription:
    "Get a clear snapshot of your maintenance readiness — daily machine health checks, planned service adherence, digital maintenance records, and machine blocking to ensure upkeep is completed before production.",
  backgroundImage:
    "/assets/pages/solutions/production-digitization/stats-bg.svg",
  bottomGradient:
    "/assets/platform/analytics/5b09b3ed17e7e67dbdf8354dab5988545de2374f.png",
  stats: [
    {
      id: "daily-health-compliance",
      value: "91%",
      title: "Daily Health Compliance",
      description:
        "Machines checked through operator logins as per daily checklist.",
    },
    {
      id: "planned-maintenance-adherence",
      value: "84%",
      title: "Planned Maintenance Adherence",
      description:
        "Scheduled weekly, monthly & half-yearly services completed on time.",
    },
    {
      id: "maintenance-popups-triggered",
      value: "620",
      title: "Maintenance Pop-ups Triggered",
      description:
        "Alerts displayed on EAGLE Pro for pending checklists and service tasks per month.",
    },
    {
      id: "machine-block-events",
      value: "270",
      title: "Machine Block Events",
      description:
        "Machines prevented from starting until maintenance was completed per month.",
    },
  ],
};
