import React from "react";
import { RangeInput } from "components";

export const StorageData: React.FC = () => {
  return (
    <div className="storage__data">
      <p className="storage__data__info">You've used 100% of your storage</p>
      <RangeInput />
      <div className="storage__data__percent">
        <p>0%</p>
        <p>100%</p>
      </div>
      <div className="storage__data__popup">
        100 <span className="storage__data__popup__left">% LEFT</span>
      </div>
    </div>
  );
};
