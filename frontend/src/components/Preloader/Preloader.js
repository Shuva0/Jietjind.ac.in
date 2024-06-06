import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

function PreLoader() {
  const containerRef = useRef(null);
  let layouts = ["final", "plain", "columns", "grid"];
  let curLayout = 0;

  useEffect(() => {
    gsap.registerPlugin(Flip);

    const container = containerRef.current;

    function nextState() {
      const state = Flip.getState(".letter", {
        props: "color,backgroundColor",
        simple: true,
      });

      container.classList.remove(layouts[curLayout]);
      curLayout = (curLayout + 1) % layouts.length;
      container.classList.add(layouts[curLayout]);

      Flip.from(state, {
        absolute: true,
        stagger: 0.07,
        duration: 0.7,
        ease: "power2.inOut",
        spin: curLayout === 0,
        simple: true,
        onEnter: (elements, animation) =>
          gsap.fromTo(
            elements,
            { opacity: 0 },
            { opacity: 1, delay: animation.duration() - 0.1 }
          ),
        onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
      });

      gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
    }

    gsap.delayedCall(1, nextState);

    return () => {
      // Clean up animation when component unmounts
      gsap.killDelayedCallsTo(nextState);
    };
  }, []);

  return (
    <div ref={containerRef} className="load container final">
      <div className="letter t">T</div>
      <div className="letter e">E</div>
      <div className="letter d">D</div>
      <div className="letter x">x</div>
    </div>
  );
}

export default PreLoader;
