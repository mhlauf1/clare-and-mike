import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col mb-12 mt-16 pt-16 items-center">
      <div className="border-b pb-16 text-center items-center">
        <p className="self-center font-manstein text-2xl lg:text-4xl font-semibold whitespace-nowrap ">
          C+M
        </p>
        <div>
          <ul className="flex text-neutral-500 flex-col lg:flex-row gap-6 lg:gap-12 mt-6 lg:mt-12 items-center">
            <li>Accommodations</li>
            <li>Wedding Party</li>
            <li>Photos</li>
            <li>Our Story</li>
            <li>Registry</li>
            <li>RSVP</li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-sm text-neutral-400">© 2024 Michael Laufersweiler. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
