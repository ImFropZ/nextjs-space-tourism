import PlanetContext from "@/components/PlanetContext";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";

export default function Destination({
  planets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedPlanet, setPlanet] = useState("Moon");

  const handlePlanetChange = (planetName: string) => {
    if (selectedPlanet === planetName) return;
    setPlanet(planetName);
  };

  return (
    <main>
      <picture className="fixed inset-0 -z-20">
        <source
          srcSet="/assets/destination/background-destination-desktop.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/assets/destination/background-destination-tablet.jpg"
          media="(min-width: 640px)"
        />
        <img
          src="/assets/destination/background-destination-mobile.jpg"
          alt=""
          className="h-full w-full brightness-50"
        />
      </picture>
      <h1 className="text-center font-barlowCondensed text-base uppercase tracking-[2.7px] text-white">
        <span className="mr-2 font-bold opacity-25">01</span> Pick your
        destination
      </h1>

      <picture>
        <img
          src={`/assets/destination/image-${selectedPlanet.toLowerCase()}.png`}
          alt={selectedPlanet}
          className="mx-auto my-14 h-44 w-44"
        />
      </picture>

      <ul className="flex justify-center gap-5 font-barlowCondensed text-sm uppercase tracking-[2.36px] text-white">
        {planets.map((planet) => {
          return (
            <li
              key={planet.name}
              className={`cursor-pointer ${
                selectedPlanet === planet.name
                  ? "after:content relative pb-3 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-white"
                  : "text-periwinkle"
              }`}
              onClick={() => handlePlanetChange(planet.name)}
            >
              {planet.name}
            </li>
          );
        })}
      </ul>

      {planets.map((planet) => {
        if (planet.name === selectedPlanet)
          return <PlanetContext {...planet} key={planet.name} />;
      })}
    </main>
  );
}

export function getStaticProps() {
  return {
    props: {
      planets: [
        {
          name: "Moon",
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travelTime: "3 days",
        },
        {
          name: "Mars",
          description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 mil. km",
          travelTime: "9 months",
        },
        {
          name: "Europa",
          description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 mil. km",
          travelTime: "3 years",
        },
        {
          name: "Titan",
          description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 bil. km",
          travelTime: "7 years",
        },
      ],
    },
  };
}
