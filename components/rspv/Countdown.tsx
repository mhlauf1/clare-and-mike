"use client";
import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }: { targetDate: number }) => {
  const [timeLeft, setTimeLeft] = useState("");

  // useEffect(() => {
  //   // Update the countdown every second
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const difference = targetDate - now;
  //     const timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //     setTimeLeft(
  //       `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds`
  //     );
  //   }, 1000);

  //   // Clear interval on component unmount
  //   return () => clearInterval(interval);
  // }, [targetDate]);

  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold">Countdown until the wedding:</h2>
      {/* <p className="text-xl">{timeLeft}</p> */}
    </div>
  );
};

export default Countdown;
