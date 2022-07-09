import { useState, useEffect } from "react";

type UseMediaProps = {
  min: number;
  max: number;
  name: string;
};

export const useMedia = (breakPoints: UseMediaProps[]) => {
  const getCurrentBreakPoint = () => {
    const currentWidth = window.innerWidth;

    for (const breakpoint of breakPoints) {
      if (currentWidth >= breakpoint.min && currentWidth <= breakpoint.max) {
        return breakpoint;
      }
    }
    return undefined;
  };

  const [currentBreakPoint, setCurrentBreakPoint] = useState(() =>
    getCurrentBreakPoint()
  );

  const isChange = (breakPoint: UseMediaProps) => {
    if (
      breakPoint &&
      (currentBreakPoint === undefined ||
        breakPoint.name !== currentBreakPoint.name)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onResize = () => {
    const breakPoint: any = getCurrentBreakPoint;
    console.log(breakPoint);
    if (isChange(breakPoint)) {
      setCurrentBreakPoint(breakPoint);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return currentBreakPoint;
};
