import React from "react";

const AgeButton = ({ age, selectedAge, handleAgeClick }) => {
  return (
    <div
      className={`w-full rounded-md py-2 px-4 text-center border-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 inline-block ${
        selectedAge === age ? "bg-blue-500 text-white" : ""
      }`}
      onClick={() => handleAgeClick(age)}
    >
      <p>{age}</p>
    </div>
  );
};

export default AgeButton;
