import React from "react";
import styles from "../../app/styles.module.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className={`flex flex-col px-2 items-center pt-72 lg:mt-0 lg:justify-center text-white ${styles.homeHeroSectionContainer}`}>
      <h1 className="font-manstein text-center">Clare and Michael</h1>
      <h4>June 15th, 2024</h4>
    </section>
  );
};

export default Hero;
