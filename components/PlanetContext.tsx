interface Props {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
}

function PlanetContext({ name, description, distance, travelTime }: Props) {
  return (
    <div className="text-white">
      <h2 className="my-7 text-center font-bellefair text-6xl uppercase sm:text-[5rem] lg:text-start">
        {name}
      </h2>
      <p className="mx-auto w-80 text-center font-barlow text-description text-periwinkle sm:w-[35em] lg:text-start lg:mx-0 lg:w-[28rem]">
        {description}
      </p>
      {/* Line */}
      <div className="mx-auto my-10 h-[1px] w-[90%] bg-[#383B4B] sm:w-[35em] lg:w-[28rem] lg:mx-0" />
      <div className="sm:flex sm:justify-center gap-28 lg:grid lg:grid-cols-2 lg:gap-0">
        <div>
          <h3 className="text-center font-barlowCondensed uppercase tracking-[2.36px] text-periwinkle lg:text-start">
            Avg. distance
          </h3>
          <p className="my-2 mb-10 text-center font-bellefair text-3xl uppercase lg:text-start">
            {distance}
          </p>
        </div>
        <div>
          <h3 className="text-center font-barlowCondensed uppercase tracking-[2.36px] text-periwinkle lg:text-start">
            Est. travel time
          </h3>
          <p className="my-2 mb-10 text-center font-bellefair text-3xl uppercase lg:text-start">
            {travelTime}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlanetContext;
