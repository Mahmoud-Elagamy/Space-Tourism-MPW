import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import Destinations from "@/components/DestinationsContent";

export const metadata: Metadata = {
  title: "Destination",
};

const Destination = () => {
  return (
    <PageLayout
      title="01 Pick your destination"
      invisibleHeading="Destination"
      bgClass="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop"
    >
      <Destinations />
    </PageLayout>
  );
};
export default Destination;
