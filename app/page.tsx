import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="text-primary text-2xl mb-8">Dashboard</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives and Integrals"
          subject="science"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the vocabulary builder"
          topic="language"
          subject="english literature"
          duration={45}
          color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </>
  );
};

export default Page;
