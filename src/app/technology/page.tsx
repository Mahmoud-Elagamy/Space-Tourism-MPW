import type { Metadata } from "next";
import TechContent from "@/components/TechContent";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Technology",
};
const Tech = () => {
  return (
    <PageLayout
      title="03 Space launch 101"
      invisibleHeading="Technology"
      bgClass="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop"
    >
      <TechContent />
    </PageLayout>
  );
};
export default Tech;
