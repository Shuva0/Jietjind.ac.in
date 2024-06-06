import React from "react";
import { useEffect } from "react";
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // empty dependency array ensures this effect runs only once after the component mounts

  return null;
}

export default ScrollToTopOnMount;
