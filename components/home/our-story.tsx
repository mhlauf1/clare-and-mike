import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const OurStory = (props: Props) => {
  return (
    <Link className="relative" href="/our-story">
      <div className="mb-4 h-[50vh] lg:h-[80vh] container mx-auto  flex justify-center mt-16 lg:mt-48">
        <Image
          src="/story-1.jpg"
          objectFit="cover"
          fill
          className="imageOverlay"
          alt="Our Story"
        />
        <div className="absolute w-full flex items-center  justify-end text-center pb-4	 flex-col h-full px-12 left-0 text-white">
          <div>
            {" "}
            <p
              style={{ letterSpacing: "5px" }}
              className="text-xl mb-2 uppercase"
            >
              View
            </p>
            <h3
              style={{ letterSpacing: "5px" }}
              className="font-manstein text-4xl md:text-5xl lg:text-6xl"
            >
              Our Story
            </h3>
          </div>
          <div>
            <p className="mt-8 text-sm mb-4">It all started in Dayton, OH</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OurStory;
