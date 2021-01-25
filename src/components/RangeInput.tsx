import React from "react";

export const RangeInput: React.FC = () => {
  return (
    <div className="slider">
      <input className="slider__input" type="range" min="1" max="100" />
    </div>
  );
};
