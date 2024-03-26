import React from "react";
import Hero from "../components/home/hero";
import Welcome from "../components/home/welcome";
import Image from "next/image";
import OurPhotos from "../components/home/our-photo";
import OurStory from "../components/home/our-story";
import Accommodations from "../components/home/accommodations";
import Schedule from "../components/home/schedule";
import FAQ from "../components/home/FAQ";
import Footer from "../components/footer";
const Page = () => {

  return (
    <>
      <Hero />
      <div className="pt-32 lg:pt-48 border-double-outline m-4">
        <Welcome />
        <div className="mx-auto px-4 w-full lg:mt-24 mb-32 lg:mb-64 flex justify-center">
          <Image
            alt="Welcome image"
            src="/welcome-img.jpg"
            height={1000}
            width={1500}
          />
        </div>
        <Schedule />
        <OurPhotos />
        <div className="px-4">
          <OurStory />
        </div>
        <Accommodations />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Page;
