// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import ManufacturingConditionMonitoring  from "./manufacturing-condition-monitoring";

export const metadata: Metadata = {
  title: "Tecosoft - Manufacturing Condition Monitoring",
  description: "Tecosoft Manufacturing Condition Monitoring Solution Page",
};

export default function page() {
  return (
    <>
      <ManufacturingConditionMonitoring />
    </>
  );
}
