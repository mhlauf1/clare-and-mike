import React from "react";
import { Button } from "../button";

type Props = {};

const FAQ = (props: Props) => {
  return (
    <div className="flex mt-24 lg:mt-48 flex-col px-4 gap-8 items-center  container mx-auto ">
      <h2 className="font-manstein mb-6 lg:mb-12 text-3xl  sm:text-4xl md:text-5xl lg:text-6xl">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-12">
        <div>
          <p className="text-lg lg:text-xl mb-2">Is there a dress code?</p>
          <p>
            Formal Attire. Our ceremony will be outdoors and we suggest men wear
            suits in any color and women wear a floor length gown, midi or
            cocktail dress.
          </p>
        </div>
        <div>
          <p className="text-lg lg:text-xl mb-2">
            Where is the nearest airport?
          </p>
          <ul className="list-disc px-4">
            <li>Appleton International Airport - 50 miles away.</li>
            <li>Milwaukee Mitchell International Airport - 67 miles away.</li>
            <li>Ohare International Airport - 137 miles away.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
