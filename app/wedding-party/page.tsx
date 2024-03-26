import React from "react";
import Image from "next/image";
import Footer from "../../components/footer";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="border-double-outline m-4">
      <section className="px-4 lg:px-20 my-16 lg:my-32 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 lg:mb-16">
          Wedding Party
        </h2>
        <div className="relative h-[100px] lg:h-[150px] w-[200px] lg:w-[300px]">
          <Image src="/flowers.jpeg" fill alt="Flowers" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row my-16 justify-center w-full lg:my-24">
          <div className="flex mt-24 lg:mt-0 font-manstein text-center px-16 lg:px-32 flex-col mb-8 lg:mb-0 lg:border-r-2">
            <p className="font-ortical mb-8 pb-2 border-b text-2xl lg:text-3xl">
              Best Men
            </p>
            <p className="mb-8 text-3xl">John Laufersweiler</p>
            <p className="mb-8 text-3xl">Sam Laufersweiler</p>
            <p className="font-ortical mt-8 mb-8 pb-2 border-b text-2xl lg:text-3xl">
              Groomsmen
            </p>
            <p className="mb-8 text-3xl">Drew Bergwall</p>
            <p className="mb-8 text-3xl">Max Kreber</p>
            <p className="mb-8 text-3xl">Luca Wilson</p>
            <p className="mb-8 text-3xl">Andy Moore</p>
            <p className="mb-8 text-3xl">Kevin Manion</p>
            <p className="mb-8 text-3xl">Joe Martin</p>
          </div>
          <div className="flex font-manstein text-center w-full  px-16 lg:w-auto lg:px-32 flex-col">
            <p className="font-ortical  mb-8 pb-2 border-b text-2xl lg:text-3xl">
              Maids of Honor
            </p>
            <p className="mb-8 text-3xl">Abby Rosler</p>
            <p className="mb-8 text-3xl">Hannah Weinewuth</p>
            <p className="font-ortical mt-8 mb-8 pb-2 border-b text-2xl lg:text-3xl">
              Bridesmaids
            </p>
            <p className="mb-8 text-3xl">Krissy Tinkle</p>
            <p className="mb-8 text-3xl">Caitlin Lawler</p>
            <p className="mb-8 text-3xl">Abbie Laufersweiler</p>
            <p className="mb-8 text-3xl">Mica Beckmann</p>
            <p className="mb-8 text-3xl">Julie Rubel</p>
            <p className="mb-8 text-3xl">Maddy Trnka</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
