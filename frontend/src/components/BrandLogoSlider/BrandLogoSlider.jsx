import React from "react";
import "./BrandLogoSlider.css";
const BrandLogoSlider = () => {
  const images = [
    "./assets/images/upload/tata.png",
    "./assets/images/upload/Whirlpool.png",
    "./assets/images/upload/hcl.png",
    "./assets/images/upload/herohonda.png",
    "./assets/images/upload/ibm.png",
    "./assets/images/upload/tcs.png",
    "./assets/images/upload/amazon.png",
    "./assets/images/upload/Vmware.png",
    "./assets/images/upload/dell.png",
    "./assets/images/upload/Fortinet.png",
  ];

  return (
    <div class="slider-area">
      <div class="brandwrapper">
        {images.map((item) => {
          return (
            <div class="item">
              <img alt="" src={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandLogoSlider;
