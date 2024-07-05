import { motion } from "framer-motion";

import React from "react";
import styles from "../../../styles/Play.module.css";
import GameBoard from "./GameBoard";
import { randomInt } from "./randomIt";
import { GameRules } from "./gameRules";

export const Play = ({
  gameMode,
  setSelect,
  select,
  gameTurns,
  setGameTurns,
  setPlay,
  vsComputer,
  setVsComputer,
}) => {
  

  const handleClick = (value) => {
    if (gameTurns > 0) {
      const randomNum = randomInt(gameMode ? 5 : 3);

      setVsComputer(randomNum)
      setSelect(value);
      setPlay(true);
      
      // setTimeout(() => {
      //   setGameTurns((prevCount) => (prevCount -= 1));
      //   setSelect(-1);
      // }, 5000);
    } else {
      return <p>finish</p>;
    }

  };
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{
        scale: 0,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      className={styles.container}
    >
      {gameMode ? (
        <img src="/images/bg-pentagon.svg" />
      ) : (
        <img src="/images/bg-triangle.svg" />
      )}
      <GameBoard handleClick={handleClick} gameMode={gameMode} />
    </motion.div>
  );
};
