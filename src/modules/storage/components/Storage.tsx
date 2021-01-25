import React from "react";
import { StorageAction } from "./StorageAction";
import { StorageData } from "./StorageData";

export const Storage: React.FC = () => {
  return (
    <div className="storage">
      <StorageAction />
      <StorageData />
    </div>
  );
};
