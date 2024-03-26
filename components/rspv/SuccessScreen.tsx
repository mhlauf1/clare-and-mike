import React from "react";

const SuccessScreen = () => {
  // Calculate the target date, which is June 15th of the current year
  const weddingDate = new Date(new Date().getFullYear(), 5, 15); // Month is 0-indexed

  return (
    <div className="success-screen">
      <p>Thank you for your submission, we look forward to seeing you!</p>
      {/* <Countdown targetDate={weddingDate} /> */}
    </div>
  );
};

export default SuccessScreen;
