import React from "react";
import Footer from "../../components/footer";
import Image from "next/image";
import { images } from "../../lib/imageArray";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="border-double-outline m-4">
      <section className="my-16 lg:my-32 px-4">
        <div className="container flex flex-col mx-auto">
          <h2 className="text-6xl">Engagement Photos</h2>
          <p className="mt-12 flex justify-end">June 30th, 2023</p>
        </div>
        <div className="grid mt-16 gap-4 h-auto relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="w-full max-h-[350px]">
              <Image
                src={`/${image}`}
                alt={`Image ${index + 1}`}
                layout="responsive"
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
