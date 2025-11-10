import React from "react";
import Hero from "../components/Hero/Hero";
import GalleryPage from "./Gallery";
import WhyUsPage from "../components/WhyUs/WhyUs";
import AboutUsPage from "../components/AboutUs/AboutUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <GalleryPage />
      <WhyUsPage />
      <AboutUsPage />
    </>
  );
};

export default HomePage;
