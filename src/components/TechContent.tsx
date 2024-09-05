"use client";
import { techData } from "@/app/technology/data";
import ReusableTabs from "./ReusableTabs ";
import { TabContentProps } from "./TabContent";

function TechContent() {
  const content: TabContentProps[] = techData.map((tech) => ({
    name: tech.name,
    description: tech.description,
    imageSrc: tech.images.portrait,
    imageAlt: tech.name,
    imageWidth: 445,
    imageHeight: 445,
    styleImage: true,
  }));

  return (
    <ReusableTabs data={content} contentClass="tech" tabType="card" textLabel />
  );
}

export default TechContent;
