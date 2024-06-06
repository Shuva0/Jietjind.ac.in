import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Midsection from "../../components/midsection/Midsection";
import BrandLogoSlider from "../../components/BrandLogoSlider/BrandLogoSlider";
import MainSlider from "../../components/MainSlider/MainSlider";
import TestimonialsSlider from "../../components/TestimonialsSlider/TestimonialsSlider";
import Unique from "../../components/Unique/unique";
import NewsScroll from "../../components/NewsScroller/NewsScroller";
import BranchCards from "../../components/branchCards/branchCards";
import TextVideo from "../../components/TextVideo/TextVideo";
import GallerySlider from "../../components/GallerySlider/GallerySlider";
import WithSpeechBubbles from "../../components/TestimonialsSlider/TestimonialsSlider";
import PaginationContainer from "../../components/Pagination/Pagination";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import StickyBar from "../../components/StickyBar/StickyBar";
import "./Homepage.css";
import StudentLife from "../../components/StudentLife/StudentLife";

function Homepage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Listen to window resize event and update the state
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <StickyBar />
      <MainSlider />
      <Unique />
      <BranchCards />
      <TextVideo />
      <NewsScroll />
      {windowWidth > 767 && <StudentLife />}
      <WithSpeechBubbles />
      <div id="gallery">
        <HomeGallery />
      </div>
      <BrandLogoSlider />
    </>
  );
}

export default Homepage;
