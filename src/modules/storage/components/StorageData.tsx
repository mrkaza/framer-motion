import React from "react";
import { RangeInput } from "components";
import { motion, AnimatePresence } from "framer-motion";

export const StorageData: React.FC<{
  popup: boolean;
  slider: boolean;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}> = ({ popup, slider, progress, setProgress }) => {
  const popupVariant = {
    initial: {
      opacity: 0,
      y: 200,
      transition: {
        duration: 0.3,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="storage__data">
      <p className="storage__data__info">
        You've used <strong>0%</strong> of your storage
      </p>
      <RangeInput setProgress={setProgress} slider={slider} />

      <div className="storage__data__percent">
        <p>0%</p>
        <p>100%</p>
      </div>

      <AnimatePresence>
        {popup && (
          <motion.div
            variants={popupVariant}
            initial="initial"
            animate="animate"
            exit="initial"
            className="storage__data__popup"
          >
            0<span className="storage__data__popup__info">% LEFT</span>
            <div className="storage__data__popup__arrow"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
