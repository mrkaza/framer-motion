import React from "react";
import { RangeInput } from "components";

export const StorageData: React.FC = () => {
  return (
    <div className="storage__data">
      <p className="storage__data__info">
        You've used <strong>100%</strong> of your storage
      </p>
      <RangeInput />
      <div className="storage__data__percent">
        <p>0%</p>
        <p>100%</p>
      </div>
      <div className="storage__data__popup">
        100 <span className="storage__data__popup__info">% LEFT</span>
        <div className="storage__data__popup__arrow"></div>
      </div>
    </div>
  );
};
