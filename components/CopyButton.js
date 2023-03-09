import React, { useState } from "react";

const CopyButton = ({ text, title }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
      setTimeout(() => {
        setCopySuccess("");
      }, 1000);
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      {copySuccess}
      <button
        className="bg-gray-300 px-3 py-1 active:scale-95 transition duration-75 text-sm"
        onClick={() => copyToClipBoard(text)}
      >
        {title}
      </button>
    </div>
  );
};

export default CopyButton;
