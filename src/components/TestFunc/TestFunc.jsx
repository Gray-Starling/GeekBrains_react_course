import React from "react";

export const TestFunc = (a, b) => {
  const sum = a + b;
  return (
    <div className="container">
      <span>Ваше число:</span>
      <span>{sum}</span>
    </div>
  );
};
