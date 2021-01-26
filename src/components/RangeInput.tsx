import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const RangeInput: React.FC<{
  slider: boolean;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}> = ({ slider, setProgress }) => {
  const sliderVariant = {
    initial: {
      width: "0%",
      transition: {
        duration: 1,
      },
    },
    animate: {
      width: "100%",
      transition: {
        duration: 5,
      },
    },
  };

  return (
    <div className="slider">
      <AnimatePresence>
        {slider && (
          <motion.div
            variants={sliderVariant}
            initial="initial"
            animate="animate"
            className="slider__inside"
            exit="initial"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
