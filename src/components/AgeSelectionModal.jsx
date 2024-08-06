import React from "react";
import AgeButton from "@/components/AgeButton";

const AgeSelectionModal = ({
  ages,
  selectedAge,
  handleAgeClick,
  setShowModal,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Pilih Umur</h2>
        <p className="mb-4 text-center">
          Silakan pilih umur untuk melihat program belajar yang tersedia.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {ages.map((age, index) => (
            <AgeButton
              key={index}
              age={age}
              selectedAge={selectedAge}
              handleAgeClick={(selectedAge) => {
                handleAgeClick(selectedAge);
                setShowModal(false);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgeSelectionModal;
