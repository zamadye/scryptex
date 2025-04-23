import React from "react";
import { LandingLayout } from "@/layouts/LandingLayout";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { DataSourcesSection } from "@/components/landing/DataSourcesSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { WaitlistCTA } from "@/components/landing/WaitlistCTA";

const LandingPage = () => {
  return (
    <LandingLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <DataSourcesSection />
      <WaitlistCTA />
      <FinalCTA />
    </LandingLayout>
  );
};

export default LandingPage;
