import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const [ammountToShow, setAmmountToShow] = useState(3);

  const checkHowManyShouldShow = () => {
    if (window.innerWidth > 900) {
      setAmmountToShow(3);
    } else {
      setAmmountToShow(1);
    }
  };

  useEffect(() => {
    checkHowManyShouldShow();
    window.addEventListener("resize", checkHowManyShouldShow);
    return () => {
      window.removeEventListener("resize", checkHowManyShouldShow);
    };
  }, []);

  return { ammountToShow };
  
};

export default useScreenWidth;
