"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../../components/button";
import Footer from "../../components/footer";
import { motion, Variants } from "framer-motion";

interface Props {
  emoji: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card({ text, year, img }: any) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="splash" />
      <motion.div className="card" variants={cardVariants}>
        <p
          style={{ lineHeight: "160%", letterSpacing: "3px" }}
          className="text-sm text-neutral-500 uppercase mb-1"
        >
          {year}
        </p>
        <h4 style={{letterSpacing: "1px"}} className="text-sm uppercase w-3/4  mb-4">{text}</h4>
        <div className="w-auto h-auto">
          <Image
            src={img}
            alt={text}
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

const items = [
  {
    year: "2015",
    text: "Freshmen at Dayton",
    img: "/freshmen.jpeg",
  },
  {
    year: "2017",
    text: "First date at the Dayton Racquet Club",
    img: "/first.jpeg",
  },
  {
    year: "2019",
    text: "Offically (finally) start dating",
    img: "/dating.jpeg",
  },
  {
    year: "2020",
    text: "The move to Chicago",
    img: "/chicago.jpeg",
  },
  {
    year: "June, 2022",
    text: "Roomates!",
    img: "/roomates.jpeg",
  },
  {
    year: "December, 2022",
    text: "Pippin!",
    img: "/pippin.jpeg",
  },
  {
    year: "June, 2023",
    text: "Will ya?",
    img: "/our-photos-4.jpg",
  },
  {
    year: "June, 2024",
    text: "The I do",
    img: "/osthoff-3.jpeg",
  },
];

const Page = () => {
  return (
    <div className="border-double-outline m-4">
      <section className="mt-16 mb-64 lg:mt-32">
        <div className="px-4 md:px-8 lg:px-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Our Story
          </h2>
          <div className="relative mt-8 lg:my-16 p-4 md:p-12 lg:p-24 w-full h-[40vh] md:h-[60vh] lg:h-auto">
            <Image
              src="/our-photos-17.jpg"
              alt="Our Story"
              objectFit="cover"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          {items.map((item) => (
            <div key={item.text}>
              <Card year={item.year} text={item.text} img={item.img} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
