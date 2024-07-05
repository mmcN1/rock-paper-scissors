import { motion } from "framer-motion";
import styles from "../../../styles/Play.module.css";
import React from "react";
import { GameRules } from "./gameRules";

const GameButton = ({ classN, lid, children, handleClick }) => {
  
  return (
    <motion.div className={classN} layoutId={lid}>
      <button key={lid} className={styles.inside} onClick={() => handleClick()}>{children}</button>
    </motion.div>
  );
};

export default GameButton;
