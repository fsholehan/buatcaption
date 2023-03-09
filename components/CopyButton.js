import React, { useState } from "react";

const CopyButton = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
      setTimeout(() => {
        setCopySuccess("");
      }, 5000); // set timeout to 5 seconds
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      {copySuccess}
      <button
        className="bg-gray-300 px-2 py-1"
        onClick={() => copyToClipBoard(text)}
      >
        copy
      </button>
    </div>
  );
};

export default CopyButton;
