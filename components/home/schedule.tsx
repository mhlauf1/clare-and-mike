import React from "react";
import styles from "../../app/styles.module.css";

type Props = {};

const Schedule = (props: Props) => {
  return (
    <div className="w-5/6 lg:w-2/3 text-neutral-500 mb-32 lg:mb-64 lg:px-0 px-8 lg:ml-auto">
      {/* <!-- Row 1 with two columns --> */}
      <div className="flex gap-4  flex-wrap mb-12 lg:mb-24">
        <div className="w-full lg:w-[150px]">
          <div className="p-4"></div>
        </div>
        <h3
          style={{ letterSpacing: "10px", lineHeight: "140%" }}
          className="uppercase text-xl lg:text-2xl"
        >
          Weekend Schedule
        </h3>
      </div>

      {/* <!-- Row 2 with one column (aligned left) --> */}
      <div className="flex gap-4  flex-wrap mb-8 lg:mb-12">
        <div className="w-[150px] ">
          <div />
        </div>
        <div className="w-full lg:w-1/2 mb-4 lg:mb-12">
          <div style={{ letterSpacing: "3px" }}>Friday - June 14th, 2024</div>
        </div>
      </div>

      {/* <!-- Row 3 with one column (aligned left) --> */}
      <div className="flex  gap-4 flex-wrap mb-4">
        <div className="w-full border-b pb-2 lg:border-none lg:pb-2 lg:w-[150px]">
          <div style={{ letterSpacing: "3px" }} className="uppercase">
            Welcome Party
          </div>
        </div>
        <div className="flex gap-3 flex-col ">
          <span>7:00 PM - 10:00 PM</span>
          <span>The Osthoff Resort Lawn</span>
          <span>Garden Party Attire</span>
        </div>
      </div>
      {/* <!-- Row 4 with one column (aligned right) --> */}
      <div className="flex gap-4  flex-wrap mb-8">
        <div className="w-full lg:w-[150px]">
          <div />
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-24 mb-4 lg:mb-12">
          <div style={{ letterSpacing: "3px" }}>Saturday - June 15th, 2024</div>
        </div>
      </div>
      {/* <!-- Row 5 with one column (aligned left) --> */}
      <div className="flex gap-4  flex-wrap mb-12">
        <div className="w-full border-b pb-2 lg:border-none lg:pb-2 lg:w-[150px]">
          <div style={{ letterSpacing: "3px" }} className="uppercase">
            Ceremony
          </div>
        </div>
        <div className="flex gap-3 flex-col ">
          <span>4:00 PM</span>
          <span>The Osthoff Resort Lawn</span>
          <span>Formal Attire</span>
        </div>
      </div>
      {/* <!-- Row 6 with one column (aligned left) --> */}
      <div className="flex gap-4  flex-wrap mb-12">
        <div className="w-full border-b pb-2 lg:border-none lg:pb-2 lg:w-[150px]">
          <div style={{ letterSpacing: "3px" }} className="uppercase">
            Cocktail Hour
          </div>
        </div>
        <div className="flex gap-3 flex-col ">
          <span>4:45 PM</span>
          <span>Grand Libelle Ballroom Foyer</span>
        </div>
      </div>
      {/* <!-- Row 7 with one column (aligned left) --> */}
      <div className="flex gap-4  flex-wrap mb-8">
        <div className="w-full border-b pb-2 lg:border-none lg:pb-2 lg:w-[150px]">
          <div style={{ letterSpacing: "3px" }} className="uppercase">
            Reception
          </div>
        </div>
        <div className="flex gap-3 flex-col ">
          <span>6:00 PM</span>
          <span>Grand Libelle Ballroom</span>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
