function Technology() {
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
        <img
          src="/assets/technology/background-technology-mobile.jpg"
          alt=""
          className="h-full w-full"
        />
      </picture>
    </main>
  );
}

export default Technology;
