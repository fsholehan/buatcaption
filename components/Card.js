import React from "react";

function Card({ title, content }) {
  return (
    <div className="card">
      <h1 className="text-sm font-semibold">{title}</h1>
      <p className="text-xs">{content}</p>
    </div>
  );
}

export default Card;
