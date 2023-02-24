function Crew() {
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
        <img
          src="/assets/crew/background-crew-mobile.jpg"
          alt=""
          className="h-full w-full"
        />
      </picture>
      <h1>02 Meet your crew</h1>
    </main>
  );
}

export default Crew;
