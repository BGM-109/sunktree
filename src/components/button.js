import React from "react";

const MyButton = ({ text, subText, link, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-lg w-full rounded-lg px-4 py-2 bg-gradient-to-r from-[#B6116B] to-[#2E1371] "
    >
      <p>{text}</p>
      <p class="text-xs font-light">{subText}</p>
    </button>
  );
};

export default MyButton;
