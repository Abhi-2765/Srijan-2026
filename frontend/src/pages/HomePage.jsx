import React from "react";
import Hero from "../components/Hero/Hero";
import GalleryPage from "./Gallery";
import WhyUsPage from "../components/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <GalleryPage />
      <WhyUsPage />
    </>
  );
};

export default HomePage;
