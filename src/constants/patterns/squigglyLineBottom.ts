const beforeSquigglyLineBottom = {
  mobileAndTablet:
    "before:bg-[url(pattern/pattern-squiggly-line-bottom-mobile-tablet.svg)]",
  desktop:
    "before:lg:bg-[url(/pattern/pattern-squiggly-line-bottom-desktop.svg)]",
};

export const beforeSquigglyLineBottomStyles = `${beforeSquigglyLineBottom.mobileAndTablet} ${beforeSquigglyLineBottom.desktop} before:bg-cover before:bg-center before:absolute before:bottom-0 before:w-[200px] before:h-[200px]`;
