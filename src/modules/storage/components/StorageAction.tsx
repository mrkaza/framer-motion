import React from "react";
import { ReactComponent as Document } from "assets/icons/icon-document.svg";
import { ReactComponent as Folder } from "assets/icons/icon-folder.svg";
import { ReactComponent as Upload } from "assets/icons/icon-upload.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";

export const StorageAction: React.FC<{
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSlider: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setPopup, setSlider }) => {
  const startCount = () => {
    setPopup(true);
    setSlider(true);
  };

  const resetCount = () => {
    setPopup(false);
    setSlider(false);
  };
  return (
    <div className="storage-action">
      <div className="storage__logo">
        <Logo />
      </div>
      <div className="storage__actions">
        <div onClick={startCount} className="storage__actions__icon">
          <Document />
        </div>
        <div onClick={resetCount} className="storage__actions__icon">
          <Folder />
        </div>
        <div className="storage__actions__icon">
          <Upload />
        </div>
      </div>
    </div>
  );
};
