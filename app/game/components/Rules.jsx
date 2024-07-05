"use client";

import { LayoutGroup, motion } from "framer-motion";

const Rules = ({ open, setOpen, gameMode }) => {
  return (
    <LayoutGroup>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(!open)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-small md:w-[60%]  md:h-small w-[90%] p-[30px] max-h-[650px] shadow-[2px_12px_24px_rgba(0,0,0,0.3)]"
      >
        <div className="flex justify-between items-center text-slate-500 uppercase">
          <h1>Rules</h1>
          <img className="w-[5%] hover:scale-50 transition-all duration-200" src="/images/icon-close.svg" alt="close" />
        </div>
        {!gameMode ? (
          <div className="h-large flex  items-center justify-center ">
            <img
              className="w-auto h-large  md:h-large grid place-items-center"
              src="/images/image-rules.svg"
              alt="rules"
            />
          </div>
        ) : (
          <div className="h-large flex  items-center justify-center ">
            <img
              className="w-auto h-large  md:h-large grid place-items-center"
              src="/images/image-rules-bonus.svg"
              alt="rules-bonus"
            />
          </div>
        )}
      </motion.div>
    </LayoutGroup>
  );
};

export default Rules;
