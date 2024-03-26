import React, { useState } from "react";
import { guests } from "../../lib/data";
import { Guest } from "../../lib/types";

interface NameEntryStepProps {
  onSelectedGuests: (selected: Guest[]) => void; // Callback to pass the selected guests to the parent component
}

const NameEntryStep: React.FC<NameEntryStepProps> = ({ onSelectedGuests }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeople, setSelectedPeople] = useState(new Set());
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<Guest[]>([]);

  const handleSearch = (e: any) => {
    e.preventDefault();
    setShowResults(true);

    // Find all guests that match the search term
    const matchingGuests = guests.filter((guest) =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchingGuests.length > 0) {
      // Extract groupIds from all matching guests
      const matchingGroupIds = new Set(
        matchingGuests.map((guest) => guest.groupId)
      );

      // Find all guests that belong to any of the matching groups
      const groupMembers = guests.filter((guest) =>
        matchingGroupIds.has(guest.groupId)
      );

      setSearchResults(groupMembers);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectPerson = (id: any) => {
    const updatedSelectedPeople = new Set(selectedPeople);
    if (updatedSelectedPeople.has(id)) {
      updatedSelectedPeople.delete(id);
    } else {
      updatedSelectedPeople.add(id);
    }
    setSelectedPeople(updatedSelectedPeople);
  };

  const handleNextStep = () => {
    const selectedGuests = Array.from(selectedPeople).map(
      (id) => guests.find((guest) => guest.id === id)!
    );
    onSelectedGuests(selectedGuests);
  };

  return (
    <div className="flex h-full justify-between  flex-1 flex-col">
      <div className="flex flex-1 overflow-y-scroll flex-col">
        <div className="text-lg mb-4 text-gray-700">
          Search for your name, and select all members of your party that you
          wish to RSVP for.
        </div>
        <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-black block p-4 w-full border border-gray-300 rounded-md shadow-sm focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50"
            placeholder="Enter Name..."
          />
          <button
            type="submit"
            className="bg-neutral-800 duration-300 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </form>
        <div className="mb-4 overflow-y-scroll">
          {showResults ? (
            searchResults.length > 0 ? (
              searchResults.map((person: any) => (
                <div
                  key={person.id}
                  className="flex items-center mb-4 gap-3 border rounded-lg p-4"
                >
                  <input
                    type="checkbox"
                    checked={selectedPeople.has(person.id)}
                    onChange={() => handleSelectPerson(person.id)}
                    className="h-5 w-5 cursor-pointer border-gray-300 rounded text-neutral-600 focus:ring-neutral-500"
                  />
                  <label
                    htmlFor={`person-${person.id}`}
                    className="block text-lg text-gray-900"
                  >
                    {person.name}
                  </label>
                </div>
              ))
            ) : (
              <div className="flex items-center mt-48 justify-center">
                <p className="text-gray-500">No results found.</p>
              </div>
            )
          ) : (
            <div>
              <div className="text-sm mt-2 pb-1 border-b text-gray-500">
                Results
              </div>
              <div className="flex items-center mt-48 justify-center">
                <p className="text-gray-500">Select All That Apply</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-1 mt-36">
        <button
          onClick={handleNextStep}
          disabled={selectedPeople.size === 0}
          className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded disabled:bg-neutral-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NameEntryStep;
