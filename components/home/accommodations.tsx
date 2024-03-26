import React from "react";
import { Button } from "../button";

type Props = {};

const Accommodations = (props: Props) => {
  return (
    <div className="flex px-4 mt-24 lg:mt-48 flex-col justify-center items-center gap-8 py-28  container mx-auto">
      <h2 className="font-manstein text-3xl  sm:text-4xl md:text-5xl lg:text-6xl">Accommodations</h2>
      <p className="mb-2 lg:mb-6 text-sm lg:text-xl">
        Find your ideal stay for the weekend in Elkhart Lake
      </p>
      <Button href="/accommodations">Explore Loding and Travel</Button>
    </div>
  );
};

export default Accommodations;
