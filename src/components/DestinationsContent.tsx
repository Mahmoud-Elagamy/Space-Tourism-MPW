"use client";
import { destinationsData } from "@/app/destination/data";
import ReusableTabs from "./ReusableTabs ";
import { TabContentProps } from "./TabContent";

function Destinations() {
  const content: TabContentProps[] = destinationsData.map((destination) => ({
    name: destination.name,
    description: destination.description,
    lineSeparator: true,
    additionalInfo: [
      { label: "Avg. Distance", value: destination.distance },
      { label: "Est. Travel Time", value: destination.travel },
    ],
    imageSrc: destination.images.png,
    imageAlt: destination.name,
    imageWebpSrc: destination.images.webp,
    imageWidth: 445,
    imageHeight: 445,
    animateImage: true,
  }));

  return <ReusableTabs data={content} contentClass="destination" />;
}

export default Destinations;
