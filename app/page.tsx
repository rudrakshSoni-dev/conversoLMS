import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants/index";
import { getAllCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { Companion } from "@/types";
import React from "react";

const Page = async () => {
  const companions = await getAllCompanions({limit:3});
  const recentSessionCompanions = await getRecentSessions() ;

  return (
    <>
      <h1 className="text-primary text-2xl mb-8">Dashboard</h1>
      <section className="home-section">
        {companions.map((companion):Companion=>(
          <CompanionCard
            key={companion.name}
            {...companion}
            // id={companion.id}
            // name={companion.name}
            // topic={companion.topic}
            // subject={companion.subject}
            // duration={companion.duration}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList 
        title = "Recently Completed Sessions"
        companions={recentSessionCompanions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </>
  );
};

export default Page;
