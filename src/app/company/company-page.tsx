"use client";
import React, { useState } from "react";
import HeroSection from "./hero-section";
import MissionSection from "./mission-section";
import TeamSection from "./team-section";
import CareersSection from "./careers-section";
import EventsSection from "./events-section";
import JobDetailsModal, { JobData } from "@/components/JobDetailsModal";

export default function CompanyInfo() {
  const [careersOpen, setCareersOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobData | null>(null);


  const scrollTrigger = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {

    if (scrollTrigger.current) {
      const headerHeight = document.querySelector("header")?.clientHeight || 0;
      const targetTop = scrollTrigger.current.offsetTop - headerHeight;

      console.log("headerHeight:", headerHeight);
      console.log("targetTop:", targetTop);
      console.log("current scroll position:", window.scrollY);

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    } else {
      console.log("scrollTrigger.current is null!");
    }
  };



  return (
    <div>
      <HeroSection />
      <MissionSection handleScroll={handleScroll} />
      {/* <TeamSection /> */}
      <div ref={scrollTrigger} />

      <CareersSection
        setCareersOpen={setCareersOpen}
        setSelectedJob={setSelectedJob}
      />
      <EventsSection />

      <JobDetailsModal
        open={careersOpen}
        onClose={() => {
          setCareersOpen(false);
          setSelectedJob(null);
        }}
        job={selectedJob}
      />
    </div>
  );
}
