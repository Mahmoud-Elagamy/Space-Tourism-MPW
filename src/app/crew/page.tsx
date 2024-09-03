import CrewContent from "@/components/CrewContent";

const Crew = () => {
  return (
    <main className="main bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop">
      <div className="container">
        <h1 className="mt-8 font-headings text-2xl font-bold uppercase tracking-widest text-[#D0D6F9] lg:mt-0 lg:text-3xl">
          02 Meet your crew
        </h1>
        <section className="mt-8">
          <h2 className="sr-only">Crew</h2>
          <CrewContent />
        </section>
      </div>
    </main>
  );
};
export default Crew;
