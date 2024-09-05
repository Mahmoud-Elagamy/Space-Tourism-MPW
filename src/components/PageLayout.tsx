import { ReactNode } from "react";

// Types
type PageLayoutProps = {
  title: string;
  invisibleHeading: string;
  bgClass: string;
  children: ReactNode;
};

const PageLayout = ({
  title,
  invisibleHeading,
  bgClass,
  children,
}: PageLayoutProps) => {
  return (
    <main className={`main ${bgClass}`}>
      <div className="container">
        <h1 className="absolute top-24 font-headings text-2xl font-bold uppercase tracking-widest text-[#D0D6F9] md:top-32 lg:top-40 lg:text-3xl">
          {title}
        </h1>
        <section className="mb-6 mt-8 md:my-0">
          <h2 className="sr-only">{invisibleHeading}</h2>
          {children}
        </section>
      </div>
    </main>
  );
};

export default PageLayout;
