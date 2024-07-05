"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Finish = ({
  handleClick,
  setScore,
  roundScore,
  userScore,
  vsScore,
  gameTurns,
  setUserScore,
  setVsScore,
}) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (userScore > vsScore) {
      setMessage("Win!");
      setScore((count) => count + 1);
    } else if (userScore < vsScore) {
      setMessage("Lose!");
      setScore((count) => count - 1);
    } else {
      setMessage("Tie!");
    }
    if (gameTurns === 0) {
      setUserScore(0);
      setVsScore(0);
    }
  }, []);
  return (
    <motion.div className="flex flex-col items-center  mt-10 ">
      <h1
        className={`mb-20 rounded bg-opacity-65 ${
          message === "Win!"
            ? "bg-green-400"
            : message === "Tie!"
            ? "bg-slate-500"
            : "bg-red-500"
        } p-5`}
      >
        {message}
      </h1>
      <button
        className=" w-fit p-3 bg-green-400 bg-opacity-65 transition-all rounded hover:bg-opacity-25 "
        onClick={handleClick}
      >
        Play Again!
      </button>
    </motion.div>
  );
};

export default Finish;
