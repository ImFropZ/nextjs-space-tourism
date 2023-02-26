import TechnologyContext from "@/components/TechnologyContext";
import usePageManagment from "@/hooks/usePageManagment";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";

export default function Technology({
  technologies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { pageName, handlePageChange } = usePageManagment({
    initialPageName: technologies[0].name,
  });

  const pageIndex = technologies.findIndex(
    (technology) => technology.name === pageName
  );

  return (
    <main>
      <picture className="fixed inset-0 -z-20">
        <source
          srcSet="/assets/technology/background-technology-desktop.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/assets/technology/background-technology-tablet.jpg"
          media="(min-width: 640px)"
        />
        <Image
          src="/assets/technology/background-technology-mobile.jpg"
          alt=""
          className="h-full w-full"
          fill={true}
        />
      </picture>
      <h1 className="text-center font-barlowCondensed text-base uppercase tracking-[2.7px] text-white sm:text-start sm:ml-10 sm:text-xl sm:tracking-[3.38px]">
        <span className="mr-2 font-bold opacity-25">03</span> Space launch 101
      </h1>
      <div className="relative mx-auto my-5 h-44 w-full sm:h-[19em] sm:w-auto lg:w-44">
        <picture>
          <source
            srcSet={technologies[pageIndex].images.portrait}
            media="(min-width: 1024px)"
          />
          <Image
            src={technologies[pageIndex].images.landscape}
            alt="Launch vehicle"
            fill={true}
          />
        </picture>
      </div>
      <div>
        <ul className="my-10 flex justify-center gap-5">
          {technologies.map((technology, index) => {
            return (
              <li
                key={technology.name}
                className={`grid h-10 w-10 sm:h-[2.5em] sm:w-[2.5em] cursor-pointer place-items-center rounded-full border ${
                  technology.name === pageName
                    ? "bg-white"
                    : "border border-white/25 text-white lg:hover:border-white"
                } font-bellefair sm:text-2xl`}
                onClick={() => handlePageChange(technology.name)}
              >
                {index + 1}
              </li>
            );
          })}
        </ul>
        <TechnologyContext {...technologies[pageIndex]} />
      </div>
    </main>
  );
}

export function getStaticProps() {
  return {
    props: {
      technologies: [
        {
          name: "Launch vehicle",
          images: {
            portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
            landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
          },
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        {
          name: "Spaceport",
          images: {
            portrait: "/assets/technology/image-spaceport-portrait.jpg",
            landscape: "/assets/technology/image-spaceport-landscape.jpg",
          },
          description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },
        {
          name: "Space capsule",
          images: {
            portrait: "/assets/technology/image-space-capsule-portrait.jpg",
            landscape: "/assets/technology/image-space-capsule-landscape.jpg",
          },
          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        },
      ],
    },
  };
}
