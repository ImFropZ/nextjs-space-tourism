interface Props {
  name: string;
  description: string;
}

function TechnologyContext({ name, description }: Props) {
  return (
    <div className="flex flex-col items-center text-periwinkle">
      <span className="font-barlowCondensed text-sm uppercase tracking-[2.3px] sm:text-base">
        The terminology...
      </span>
      <h1 className="font-bellefair text-2xl uppercase text-white mt-3 mb-8 sm:text-[2.5rem]">
        {name}
      </h1>
      <p className="w-80 text-center font-barlow text-description sm:text-base sm:w-[28.75em]">
        {description}
      </p>
    </div>
  );
}

export default TechnologyContext;
