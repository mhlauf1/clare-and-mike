import React from "react";
import Image from "next/image";
import { Button } from "../button";

type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="flex flex-col px-4 text-center mb-24 lg:mb-64  items-center  mx-auto">
      <p
        style={{ lineHeight: "160%", letterSpacing: "5px" }}
        className="text-sm w-full lg:w-[50ch]  mb-8 uppercase"
      >
        Welcome to Clare and Michael&#39;s wedding weekend
      </p>
      <p
        style={{ lineHeight: "140%" }}
        className="text-lg w-full lg:w-[50ch] sm:text-lg md:text-xl lg:text-2xl mt-6 lg:mt-12 mb-8"
      >
        Join us for a weekend of celebration at the Osthoff Resort. RSVP and
        view accommodations below.
      </p>
      <div className="flex mt-6 lg:mt-12 flex-wrap w-full justify-center gap-4 lg:gap-8">
        <Button href="/rsvp">RSVP Now</Button>
        <Button href="/accommodations">Lodging</Button>
      </div>
    </div>
  );
};

export default Welcome;
