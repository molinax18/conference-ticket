const Background = () => {
  const bgImages = {
    mobile: "bg-[url(/background/background-mobile.png)]",
    tablet: "md:bg-[url(/background/background-tablet.png)]",
    desktop: "lg:bg-[url(/background/background-desktop.png)]",
  };

  return (
      <div
        className={`${bgImages.mobile} ${bgImages.tablet} ${bgImages.desktop} absolute bg-cover bg-center w-screen min-h-dvh -z-10`}
      >
        <div className="squiggly-line-bottom"></div>
        <div className="squiggly-line-top"></div>
        <div className="lines"></div>
      </div>
  );
};

export default Background;
