interface Props {
  name: string;
  description: string;
}

function TechnologyContext({ name, description }: Props) {
  return (
    <div className="flex flex-col items-center text-periwinkle lg:items-start">
      <span className="font-barlowCondensed text-sm uppercase tracking-[2.3px] sm:text-base">
        The terminology...
      </span>
      <h1 className="font-bellefair text-2xl uppercase text-white mt-3 mb-8 sm:text-[2.5rem] lg:text-[3.5rem] lg:mt-6">
        {name}
      </h1>
      <p className="text-center font-barlow text-description sm:text-base sm:max-w-[28.75em] lg:text-start lg:max-w-[25rem] lg:leading-[2rem] lg:text-lg">
        {description}
      </p>
    </div>
  );
}

export default TechnologyContext;
