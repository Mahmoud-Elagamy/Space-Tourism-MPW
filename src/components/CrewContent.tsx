"use client";
import { crewData } from "@/app/crew/data";
import ReusableTabs from "./ReusableTabs ";
import { TabContentProps } from "./TabContent";

function CrewContent() {
  const content: TabContentProps[] = crewData.map((person) => ({
    name: person.name,
    role: person.role,
    description: person.bio,
    imageSrc: person.images.png,
    imageAlt: person.name,
    imageWebpSrc: person.images.webp,
    imageWidth: 350,
    imageHeight: 350,
    largeText: true,
    explicitHeight: true,
  }));

  return <ReusableTabs data={content} contentClass="crew" smallLabel />;
}

export default CrewContent;
