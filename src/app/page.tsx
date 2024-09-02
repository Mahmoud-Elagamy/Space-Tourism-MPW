import ExploreButton from "@/components/ExploreButton";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover pt-24 md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]`}
    >
      <div className="container flex flex-wrap items-center justify-center lg:justify-between">
        <div className="max-w-xl text-center uppercase text-[#D0D6F9] lg:text-start">
          <p className="mb-4 md:text-2xl">So, you want to travel to</p>
          <h1 className="mb-4 font-headings text-4xl text-slate-50 md:text-9xl">
            Space
          </h1>
          <p className="mb-8 font-headings normal-case md:text-xl lg:mb-0">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>
        <ExploreButton />
      </div>
    </main>
  );
}
