interface Props {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
}

function PlanetContext({ name, description, distance, travelTime }: Props) {
  return (
    <div className="text-white">
      <h2 className="my-7 text-center font-bellefair text-6xl uppercase sm:text-[5rem]">
        {name}
      </h2>
      <p className="mx-auto w-80 text-center font-barlow text-description text-periwinkle sm:w-[35em]">
        {description}
      </p>
      <div className="mx-auto my-10 h-[1px] w-[90%] bg-[#383B4B] sm:w-[35em]" />
      <div className="sm:flex sm:justify-center gap-28">
        <div>
          <h3 className="text-center font-barlowCondensed uppercase tracking-[2.36px] text-periwinkle">
            Avg. distance
          </h3>
          <p className="my-2 mb-10 text-center font-bellefair text-3xl  uppercase">
            {distance}
          </p>
        </div>
        <div>
          <h3 className="text-center font-barlowCondensed uppercase tracking-[2.36px] text-periwinkle">
            Est. travel time
          </h3>
          <p className="my-2 mb-10 text-center font-bellefair text-3xl  uppercase">
            {travelTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlanetContext;
