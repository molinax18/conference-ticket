import { beforeSquigglyLineBottomStyles } from "../variable-styles/patterns/squigglyLineBottom";

const Background = () => {
  const bgImages = {
    mobile: "bg-[url(/background/background-mobile.png)]",
    tablet: "md:bg-[url(/background/background-tablet.png)]",
    desktop: "lg:bg-[url(/background/background-desktop.png)]",
  };

  return (
    <div className={`${bgImages.mobile} ${bgImages.tablet} ${bgImages.desktop} bg-cover bg-center min-h-dvh bf-squiggly-line-bottom`}
    ></div>
  );
};

export default Background
