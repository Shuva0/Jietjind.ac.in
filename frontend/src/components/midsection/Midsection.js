import React from "react";
import "./Midsection.css";
import { useState, useEffect } from "react";

const Midsection = () => {
  /*getting window size width*/
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function imgGet() {
    if (windowSize.width > 768) return "url(/assets/images/jietbanner.png)";
    else return "url(/assets/images/jietbanner_mobile.png)";
  }
  function getClassNone() {
    if (windowSize.width < 768) return "noneclass";
    else return "";
  }
  return (
    <>
      <div
        class="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: imgGet(),
          height: "400px",
        }}
      >
        <div
          class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div class="flex h-full items-center justify-center">
            <div class="text-white programs">
              <div id="program" className={getClassNone()}>
                Discover and Decide Our Program
              </div>
              <p className={`tmcenter ${getClassNone()}`}></p>
              <div className="program-button">
                <button>Post Graduate</button>
                <button>Under Graduate</button>
                <button>Diploma</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Midsection;
