"use client";
import React, { useState } from "react";
import NameEntryStep from "./NameEntryStep";
import DetailsEntryStep from "./DetailsEntryStep";
import SuccessScreen from "./SuccessScreen"; // Assuming you have this component ready
import StepProgress from "./StepProgress";
import { supabase } from "../../lib/supabaseClient";

type Props = {};

const RSVPForm = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGuests, setSelectedGuests] = useState([]);
  const [guestDetails, setGuestDetails] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectedGuests = (selected: any) => {
    setSelectedGuests(selected);
    setGuestDetails(
      selected.map((guest: any) => ({
        ...guest,
        attendingWedding: null,
        attendingWelcomeParty: null,
        dinnerSelection: null,
      }))
    );
    setCurrentStep(2); // Move to the details entry step
  };

  const handleSubmitDetails = async (details: any) => {
    console.log("Submitted");

    setGuestDetails(details);
    console.log("Submitting details:", details);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <SuccessScreen />
      </div>
    );
  }

  return (
    <div className="border-double-outline m-4 min-h-[90vh]">
      <div className="flex flex-col pt-16 pb-8 px-4 md:px-8 lg:px-20">
        <h2
          style={{ lineHeight: "160%", letterSpacing: "5px" }}
          className=" mb-8 text-center text-lg uppercase"
        >
          RSVP
        </h2>
        <StepProgress currentStep={currentStep} />
        {currentStep === 1 && (
          <NameEntryStep onSelectedGuests={handleSelectedGuests} />
        )}
        {currentStep === 2 && (
          <DetailsEntryStep
            selectedGuests={selectedGuests}
            onSubmit={handleSubmitDetails}
          />
        )}
      </div>
    </div>
  );
};

export default RSVPForm;
