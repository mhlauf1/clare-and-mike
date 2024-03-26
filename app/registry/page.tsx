import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/footer";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="border-double-outline m-4">
      <section className="my-24">
        <div className="flex px-4 lg:px-20 flex-col">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Wedding Registry
          </h2>
          <p
            style={{ lineHeight: "150%" }}
            className="mt-12 text-lg lg:text-xl flex  w-full lg:w-3/5"
          >
            As we start this exciting new chapter together, your presence at our
            wedding is the greatest gift of all. For those who wish to
            contribute in other ways, we&apos;ve thoughtfully curated two options to
            celebrate our marriage.
          </p>
          <div className="flex flex-col lg:flex-row mt-24 justify-center gap-12 ">
            <div className="flex flex-1 text-center items-center justify-between flex-col">
              <div>
                <p className="w-full lg:w-[28ch] mb-8 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                  Contribute To Our Honeymoon Fund
                </p>
                <p>
                  Simply scan the QR code below for payment options with Venmo.
                </p>
              </div>
              <Image src="/venmo.jpg" height={300} width={300} alt="Venmo" />
            </div>
            <div className="w-[2px] h-auto flex  bg-neutral-300" />
            <div className="flex justify-between flex-col items-center text-center flex-1">
              <div>
                <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8">Explore Our Registry</p>
                <p className="mb-12">
                  Visit the link below to view our registry from Crate & Barrel.
                </p>
                <Link
                  target="_blank"
                  className="mt-6 lg:mt-12 text-lg lg:text-xl underline text-neutral-500"
                  href="https://www.crateandbarrel.com/gift-registry/michael-laufersweiler-and-clare-manion/r6827950"
                >
                  https://www.crateandbarrel.com/gift-registry/michael-laufersweiler-and-clare-manion/r6827950
                </Link>
              </div>

              <Image
                className="mt-12"
                src="/flowers.jpeg"
                height={150}
                width={300}
                alt="Venmo"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
