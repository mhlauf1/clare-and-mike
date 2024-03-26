import React from "react";
import Image from "next/image";
import { Button } from "../../components/button";
import Footer from "../../components/footer";

interface RoomProps {
  room: string;
  capacity: string;
  href: string;
  roomImg: string; // Assuming roomImg is a URL string. Adjust as needed if it's a different type
}

const Room: React.FC<RoomProps> = ({ room, capacity, href, roomImg }) => (
  <div className="flex flex-col gap-2  lg:gap-4 flex-1">
    <div className="relative h-[250px]">
      <Image src={roomImg} objectFit="cover" fill alt={room} />
    </div>
    <h4 className="text-xl mt-2 lg:mt-0 lg:text-2xl">{room}</h4>
    <p className="mb-2 lg:mb-4">Capacity {capacity} People</p>
    <div>
      <a
        className="bg-[#383939] hover:bg-neutral-600 duration-300 border border-[#383939] hover:border-white text-white w-full lg:w-auto py-3 px-16 lg:py-4 lg:px-24 rounded-full"
        href={href}
        target="_blank"
      >
        <button>View Room</button>
      </a>
    </div>
  </div>
);

interface HotelProps {
  name: string;
  time: string;
  href: string;
  hotelImg: string; // Assuming roomImg is a URL string. Adjust as needed if it's a different type
}

const Hotel: React.FC<HotelProps> = ({ name, time, href, hotelImg }) => (
  <div className="flex flex-col gap-4 w-[80vw] lg:w-[30vw]">
    <div className="relative w-[80vw] lg:w-[30vw] h-[250px] ">
      <Image src={hotelImg} objectFit="cover" fill alt={name} />
    </div>
    <h4>{name}</h4>
    <p className="mb-2 lg:mb-4">{time} from the Osthoff</p>
    <div>
      <a
        className="bg-[#383939] text-center hover:bg-neutral-600 duration-300 border border-[#383939] hover:border-white text-white w-full lg:w-auto py-3 px-16 lg:py-4 lg:px-24 rounded-full"
        href={href}
        target="_blank"
      >
        <button>View Hotel</button>
      </a>
    </div>
  </div>
);

const Page = () => {
  return (
    <div className="border-double-outline m-4">
      <section className="my-16 lg:my-32">
        <div className="px-4 md:px-8 lg:px-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Travel & Stay Accommodations
          </h2>
          <div className="relative my-16 lg:my-32 w-full h-[40vh] md:h-[60vh] lg:h-[80vh]">
            <Image
              src="/osthoff.jpeg"
              alt="The Osthoff"
              objectFit="cover"
              fill
            />
          </div>
          <div className="flex flex-col pt-12 lg:pt-24 items-center">
            <h3
              style={{ lineHeight: "140%" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center w-4/5"
            >
              Guests can book a room at our discounted price in one of the
              following ways
            </h3>
            <div className="flex flex-col lg:flex-row mt-16 justify-center gap-12 items-center">
              <div className="flex flex-1 items-center flex-col">
                <p className="text-lg lg:text-xl">
                  Online using the group ID code:
                </p>
                <p className="text-2xl lg:text-3xl mt-2 font-semibold">
                  140632
                </p>
              </div>
              <div className="hidden lg:block w-[2px] h-[200px] bg-neutral-300" />
              <div className="lg:hidden block w-[200px] h-[2px] bg-neutral-300" />
              <div className="flex justify-center flex-1">
                <p className="text-center w-4/5 text-xl">
                  Calling
                  <span className="font-semibold text-2xl">
                    {" "}
                    800-876-3399
                  </span>{" "}
                  and asking for the Manion & Laufersweiler wedding
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row pt-32 lg:pt-64 pb-24 lg:pb-48 gap-8 lg:gap-24">
              <div className="flex lg:justify-center flex-1">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Additional Information
                </h3>
              </div>
              <div className="px-4 lg:px-0 flex flex-1">
                <ul className="flex flex-col list-disc gap-8">
                  <li>
                    If a room type is not available online please call the
                    Osthoff and they will do their best to accommodate desired
                    room type.
                  </li>
                  <li>
                    3 bedroom suites are now available to book with limited
                    availability.
                  </li>
                  <li>
                    Please be advised that the Osthoff can take note of early
                    check-in requests, but room accessibility before 4 PM is not
                    guaranteed.
                  </li>
                  <li>
                    Rooms are held until May 6th, 2024, but we encourage guests
                    to book as soon as possible due to limited availability.
                  </li>
                  <li>
                    The Osthoff property is large and the room block spans
                    multiple buildings. Special consideration can be made to
                    request rooms near each other but please call.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0f6ff] py-16 lg:py-32">
          <div className="flex flex-col lg:flex-row px-4 lg:px-20 justify-center">
            <div className="flex flex-col items-start flex-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8">
                Elkhart Lake
              </h3>
              <p className="lg:w-4/5 mb-3 lg:mb-6">
                Elkhart Lake offers a large variety of activities, food and
                drink, and overnight stays.
              </p>
              <ul className="flex list-disc flex-col gap-4 p-4 mb-8 lg:mb-16">
                <li>3 hours from Chicago, IL</li>
                <li>1 hour from Milwaukee, WI</li>
                <li>2 hours from Madison, WI</li>
              </ul>
              <div>
                <a
                  className="bg-[#383939] text-center hover:bg-neutral-600 duration-300 border border-[#383939] hover:border-white text-white w-full lg:w-auto py-3 px-16 lg:py-4 lg:px-24 rounded-full"
                  href="https://osthoff.com/?gad_source=1&gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fgsvNWbW1Ys6w9SlnBaBJSgIPOzvJnrDmjgYDs_ex_B1wHAXGgZgIEaAkjAEALw_wcB"
                  target="_blank"
                >
                  <button>Check Out Elkhart Lake</button>
                </a>
              </div>
            </div>
            <div className="flex flex-1 relative">
              <Image
                src="/osthoff-2.jpeg"
                alt="Elkhart Lake"
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div className="px-4 lg:px-20 mt-24 lg:mt-64">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8">
              The Osthoff
            </h3>
            <p style={{ lineHeight: "160%" }} className="lg:w-[52ch]">
              All events will be held on the Osthoff grounds during the weekend.
              A hotel block is available at the Osthoff for guests.
            </p>
            <div className="grid mt-16 lg:mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
              <Room
                room="Guest Room"
                capacity="1-2"
                href="https://osthoff.com/accommodations/guest-rooms/"
                roomImg="/guest-room.webp"
              />
              <Room
                room="One Bedroom"
                capacity="2-4"
                href="https://osthoff.com/accommodations/one-bedroom-suites/"
                roomImg="/one-bed.webp"
              />
              <Room
                room="Two Bedroom"
                capacity="4-8"
                href="https://osthoff.com/accommodations/two-bedroom-suites/"
                roomImg="/two-bed.webp"
              />
              <Room
                room="Three Bedroom"
                capacity="6-10"
                href="https://osthoff.com/accommodations/three-bedroom-suites/"
                roomImg="/3-bed-room.webp"
              />
            </div>
          </div>
        </div>
        <div className="py-24 lg:py-36">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            More options near Elkhart Lake
          </h3>
          <div className="flex mt-16 lg:mt-24 flex-col justify-center gap-24 items-center lg:flex-row">
            <Hotel
              name="Baymont by Wyndham Plymouth"
              time="15"
              href="https://www.reservations.com/hotel/baymont-inn-and-suites-plymouth-wi?rmcid=dsa&utm_source=googleads&gclid=CjwKCAjw5remBhBiEiwAxL2M9_9eJ3rojGG5rodtDdWDotSMuNlVX_m-iix-sh7ftIk_4CEZnhWeIhoCWn8QAvD_BwE"
              hotelImg="/more-option-1.jpeg"
            />
            <Hotel
              name="Best Western Stanton Inn"
              time="22"
              href="https://www.bestwestern.com/en_US/book/hotels-in-chilton/best-western-stanton-inn/propertyCode.50121.html"
              hotelImg="/more-option-2.jpeg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
