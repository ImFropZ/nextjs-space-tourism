import CrewContext from "@/components/CrewContext";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import usePageManagment from "@/hooks/usePageManagment";

function Crew({ crew }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { pageName, handlePageChange } = usePageManagment({
    initialPageName: crew[0].name,
  });

  const crewIndex = crew.findIndex((member) => member.name === pageName);

  return (
    <main>
      <picture className="fixed inset-0 -z-20">
        <source
          srcSet="/assets/crew/background-crew-desktop.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/assets/crew/background-crew-tablet.jpg"
          media="(min-width: 640px)"
        />
        <Image
          src="/assets/crew/background-crew-mobile.jpg"
          alt=""
          className="h-full w-full brightness-50"
          fill={true}
        />
      </picture>
      <h1 className="text-center font-barlowCondensed uppercase tracking-[2.7px] text-white sm:text-start sm:ml-10 sm:text-xl sm:tracking-[3.38px]">
        <span className="mr-2 font-bold text-white/25">02</span> Meet your crew
      </h1>
      <div className="flex flex-col sm:flex-col-reverse sm:mt-16">
        <Image
          src={crew[crewIndex].image}
          alt={crew[crewIndex].name}
          width={180}
          height={220}
          className="relative mx-auto mt-8 h-56 w-auto sm:h-[35em]"
        />
        <div className="mx-auto h-[1px] w-[90%] bg-[#383B4B] sm:hidden" />

        <ul className="my-8 flex justify-center gap-5">
          {crew.map((member) => {
            return (
              <li
                className={`${
                  pageName === member.name ? "bg-white" : "bg-white/20 "
                } h-3 w-3 cursor-pointer rounded-full hover:bg-white/50`}
                onClick={() => handlePageChange(member.name)}
                key={member.name}
              />
            );
          })}
        </ul>
        <CrewContext {...crew[crewIndex]} key={crew[crewIndex].name} />
      </div>
    </main>
  );
}

export function getStaticProps() {
  return {
    props: {
      crew: [
        {
          name: "Douglas Hurley",
          role: "Commander",
          image: "/assets/crew/image-douglas-hurley.webp",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        },
        {
          name: "Mark Shuttleworth",
          role: "Mission Specialist",
          image: "/assets/crew/image-mark-shuttleworth.webp",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        },
        {
          name: "Victor Glover",
          role: "Pilot",
          image: "/assets/crew/image-victor-glover.webp",
          bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        },
        {
          name: "Anousheh Ansari",
          role: "Flight Engineer",
          image: "/assets/crew/image-anousheh-ansari.webp",
          bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        },
      ],
    },
  };
}

export default Crew;
