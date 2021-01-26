import React, { useState } from "react";
import { StorageAction } from "./StorageAction";
import { StorageData } from "./StorageData";

export const Storage: React.FC = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [isSlider, setIsSlider] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <div className="storage">
      <StorageAction setPopup={setIsPopup} setSlider={setIsSlider} />
      <StorageData
        progress={progress}
        setProgress={setProgress}
        popup={isPopup}
        slider={isSlider}
      />
    </div>
  );
};
