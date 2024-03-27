import React, { useEffect, useState } from "react";

// Assuming the structure of a guest's details is defined as:
interface GuestDetail {
  id: number;
  name: string;
  attendingWedding: boolean | null;
  attendingWelcomeParty: boolean | null;
  dinnerSelection: string | null;
  age: string;
}

interface DetailsEntryStepProps {
  selectedGuests: GuestDetail[]; // Guests selected from the NameEntryStep
  onSubmit: (details: GuestDetail[]) => void; // Function to handle the submission
}

const DetailsEntryStep: React.FC<DetailsEntryStepProps> = ({
  selectedGuests,
  onSubmit,
}) => {
  const [guestDetails, setGuestDetails] =
    useState<GuestDetail[]>(selectedGuests);

  // Function to update the local state when form inputs change
  const handleDetailChange = (
    id: number,
    field: keyof GuestDetail,
    value: any
  ) => {
    const updatedDetails = guestDetails.map((guest) => {
      if (guest.id === id) {
        return { ...guest, [field]: value };
      }
      return guest;
    });
    setGuestDetails(updatedDetails);
  };

  // Function to call the onSubmit prop with the guest details
  const handleSubmit = () => {
    onSubmit(guestDetails);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="pb-8">
      <p className="mb-2">Fill out all information for the following guests:</p>
      <form
        id="fs-frm"
        action="https://formspree.io/f/xkndqwgb"
        name="rsvp-form"
        method="POST"
      >
        {guestDetails.map((guest, index) => (
          <fieldset key={guest.id} className="mb-4 border-t pt-8 pb-6">
            <h3 className="text-lg text-neutral-600 font-semibold mb-4">
              Guest: {guest.name}
            </h3>
            <input
              type="hidden"
              name={`guest-${index}-name`}
              value={guest.name}
            />
            <div className="mb-8 flex items-start flex-col gap-4">
              <label
                className="text-lg"
                htmlFor={`guest-${index}-attending-welcome-party`}
              >
                Will you Attend The Welcome Party?
              </label>
              <select
                className="border cursor-pointer border-neutral-700 px-4 py-2 rounded-md"
                name={`guest-${index}-attending-welcome-party`}
                id={`guest-${index}-attending-welcome-party`}
                onChange={(e) =>
                  handleDetailChange(
                    guest.id,
                    "attendingWelcomeParty",
                    e.target.value === "Yes"
                  )
                }
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="mb-8 flex items-start flex-col gap-4">
              <label
                className="text-lg"
                htmlFor={`guest-${index}-attending-wedding`}
              >
                Will you Attend The Wedding?
              </label>
              <select
                className="border cursor-pointer  border-neutral-700 px-4 py-2 rounded-md"
                name={`guest-${index}-attending-wedding`}
                id={`guest-${index}-attending-wedding`}
                onChange={(e) =>
                  handleDetailChange(
                    guest.id,
                    "attendingWedding",
                    e.target.value === "Yes"
                  )
                }
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="mb-8 flex items-start flex-col gap-4">
              <label
                className="text-lg"
                htmlFor={`guest-${index}-dinner-selection`}
              >
                Dinner Selection - Choose One
              </label>
              <select
                className="border cursor-pointer  border-neutral-700 px-4 py-2 rounded-md"
                name={`guest-${index}-dinner-selection`}
                id={`guest-${index}-dinner-selection`}
                onChange={(e) =>
                  handleDetailChange(
                    guest.id,
                    "dinnerSelection",
                    e.target.value
                  )
                }
              >
                <option value="">Choose One</option>
                <option value="beef-tenderloin">Seared Beef Tenderloin</option>
                <option value="chicken">Parmesan Chicken Breast</option>
                <option value="pasta">Mushroom Ricotta Ravioli (v)</option>
              </select>
            </div>
          </fieldset>
        ))}
        <button
          onClick={handleSubmit}
          type="submit"
          className="mt-4 w-full bg-blue-500 hover:bg-blue-700  disabled:bg-blue-200 text-white font-bold py-4 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DetailsEntryStep;
