import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleExploreBtn = () => {
    router.push("/destination");
  };

  return (
    <>
      <main>
        <picture className="fixed inset-0 -z-20">
          <source
            srcSet="/assets/home/background-home-desktop.jpg"
            media="(min-width: 1024px)"
          />
          <source
            srcSet="/assets/home/background-home-tablet.jpg"
            media="(min-width: 640px)"
          />
          <Image
            src="/assets/home/background-home-mobile.jpg"
            alt=""
            className="h-full w-full"
            fill={true}
          />
        </picture>
        <div className="flex flex-col items-center justify-center text-sm text-periwinkle">
          <span className="mt-3 font-barlow text-base uppercase">
            So, you want to travel to
          </span>
          <h1 className="my-8 text-center font-bellefair text-7xl uppercase text-white">
            Space
          </h1>
          <p className="line-he w-80 text-center font-barlow text-description font-normal">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          <div className="lg:before:content relative -bottom-20 h-40 w-40 cursor-pointer rounded-full lg:before:absolute lg:before:inset-0 lg:before:scale-100 lg:before:rounded-full lg:before:bg-white/[.1] lg:before:transition-all lg:before:duration-300 lg:hover:before:-inset-14">
            <button
              className="absolute inset-0 w-full cursor-pointer rounded-full bg-white font-bellefair text-xl uppercase tracking-widest text-midnightBlue"
              onClick={handleExploreBtn}
            >
              Explore
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
