import React from "react";

interface StepProgressProps {
  currentStep: number;
}


const StepProgress: React.FC<StepProgressProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center gap-32 justify-center mb-8">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div
          className={`${
            currentStep === 1
              ? "bg-neutral-800 text-white"
              : "bg-gray-200 text-gray-600"
          } px-4 py-2 rounded-full`}
        >
          <p
            className={`${currentStep === 1 ? "text-white" : "text-gray-400"}`}
          >
            1
          </p>
        </div>
        <h4
          className={`${
            currentStep === 1 ? "text-neutral-900" : "text-neutral-300"
          } text-lg`}
        >
          {" "}
          Enter Name
        </h4>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div
          className={`${
            currentStep === 2
              ? "bg-neutral-800 text-white"
              : "bg-gray-200 text-gray-600"
          } px-4 py-2 rounded-full`}
        >
          <p
            className={`${currentStep === 2 ? "text-white" : "text-gray-400"}`}
          >
            2
          </p>
        </div>
        <h4
          className={`${
            currentStep === 2 ? "text-neutral-900" : "text-neutral-300"
          } text-lg`}
        >
          {" "}
          Enter Details
        </h4>
      </div>
    </div>
  );
};

export default StepProgress;
