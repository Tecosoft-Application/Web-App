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

  return (
    <div>
      <HeroSection />
      <MissionSection />
      <TeamSection />
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
