import TechContent from "@/components/TechContent";

const Tech = () => {
  return (
    <main className="main bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop">
      <div className="container">
        <h1 className="mt-8 font-headings text-2xl font-bold uppercase tracking-widest text-[#D0D6F9] lg:mt-0 lg:text-3xl">
          03 Space launch 101
        </h1>
        <section className="mt-8">
          <h2 className="sr-only">Technology</h2>
          <TechContent />
        </section>
      </div>
    </main>
  );
};
export default Tech;
