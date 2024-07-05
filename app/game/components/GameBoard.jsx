import { LayoutGroup, motion } from "framer-motion";
import styles from "../../../styles/Play.module.css";
import React from "react";
import GameButton from "./GameButton";

const GameBoard = ({ gameMode, select, handleClick }) => {

  return (
    <LayoutGroup >
      <motion.div className={styles.playbuttons} >
        {!gameMode ? (
          <div className={styles.twogrid}>
            <GameButton  handleClick={() => handleClick(2)} classN={styles.rock2} lid="rock">
              <img src="/images/icon-rock.svg" alt="" />
            </GameButton>
            <GameButton  handleClick={() => handleClick(1)} classN={styles.paper2} lid="paper">
              <img src="/images/icon-paper.svg" alt="" />
            </GameButton>
            <GameButton  handleClick={() => handleClick(0)} classN={styles.sci2} lid="scissors">
              <img src="/images/icon-scissors.svg" alt="" />
            </GameButton>
          </div>
        ) : (
          <div className={styles.threegrid}>
            <GameButton  handleClick={() => handleClick(2)} classN={styles.rock}   lid="rock">
              <img src="/images/icon-rock.svg" alt="" />
            </GameButton>
            <GameButton  handleClick={() => handleClick(1)} classN={styles.paper}  lid="paper">
              <img src="/images/icon-paper.svg" alt="" />
            </GameButton>
            <GameButton  handleClick={() => handleClick(0)} classN={styles.scissors} lid="scissors">
              <img src="/images/icon-scissors.svg" alt="" />
            </GameButton>
            <GameButton  handleClick={() => handleClick(4)} classN={styles.lizard} lid="lizard">
              <img src="/images/icon-lizard.svg" alt="" />
            </GameButton>
            <GameButton  handleClick={() => handleClick(3)} classN={styles.spock} lid="spock">
              <img src="/images/icon-spock.svg" alt="" />
            </GameButton>
          </div>
        )}
      </motion.div>
    </LayoutGroup>
  );
};

export default GameBoard;
