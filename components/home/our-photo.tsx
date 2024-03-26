import React from "react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
type Props = {};

const OurPhotos = (props: Props) => {
  return (
    <Link href="/our-story">
      <div className="relative grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3 m-4 lg:justify-items-stretch lg:gap-1">
        <div className="relative h-[60vh] w-full flex lg:h-[80vh] lg:w-auto">
          <Image
            className="imageOverlay"
            objectFit="cover"
            src="/main-1.jpg"
            fill
            alt="Our Photos"
          />
        </div>
        <div className="relative h-[60vh] w-full flex lg:h-[80vh] lg:w-auto">
          <Image
            className="imageOverlay"
            objectFit="cover"
            src="/cm-1.jpg"
            fill
            alt="Our Photos"
          />
        </div>
        <div className="relative h-[60vh] w-full flex lg:h-[80vh] lg:w-auto">
          <Image
            className="imageOverlay"
            objectFit="cover"
            src="/cm-2.jpg"
            fill
            alt="Our Photos"
          />
        </div>
        <div className="absolute flex-col text-white w-full gap-2 mt-24 lg:mt-48 h-full flex items-center justify-center">
          <span style={{ letterSpacing: "5px" }} className="text-xl lg:text-2xl uppercase">
            View
          </span>
          <h4
            style={{ letterSpacing: "5px" }}
            className="font-manstein text-4xl md:text-5xl lg:text-6xl"
          >
            Our Photos
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default OurPhotos;
