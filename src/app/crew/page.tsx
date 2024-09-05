import type { Metadata } from "next";
import CrewContent from "@/components/CrewContent";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Crew",
};

const Crew = () => {
  return (
    <PageLayout
      title="02 Meet your crew"
      invisibleHeading="Crew"
      bgClass="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop"
    >
      <CrewContent />
    </PageLayout>
  );
};
export default Crew;
