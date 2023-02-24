interface Props {
  role: string;
  name: string;
  bio: string;
}

function CrewContext({ role, name, bio }: Props) {
  return (
    <div className="flex flex-col items-center text-center font-bellefair text-white">
      <span className="text-center uppercase text-white/50">{role}</span>
      <h1 className="mb-6 mt-2 text-2xl uppercase">{name}</h1>
      <p className="w-80 font-barlow text-description text-periwinkle">{bio}</p>
    </div>
  );
}

export default CrewContext;
