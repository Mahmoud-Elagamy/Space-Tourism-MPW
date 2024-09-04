import type { Metadata } from "next";
import Destinations from "@/components/DestinationsContent";

export const metadata: Metadata = {
  title: "Destination",
};

const Destination = () => {
  return (
    <main className="main bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop">
      <div className="container">
        <h1 className="mt-8 font-headings text-2xl font-bold uppercase tracking-widest text-[#D0D6F9] lg:mt-0 lg:text-3xl">
          01 Pick your destination
        </h1>
        <section className="mt-8">
          <h2 className="sr-only">Destinations</h2>
          <Destinations />
        </section>
      </div>
    </main>
  );
};
export default Destination;
