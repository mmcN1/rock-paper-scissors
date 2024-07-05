import { LayoutGroup, motion } from "framer-motion";
import React from "react";
import UserNameInfo from "../GameSection/UserNameInfo";

const Header = ({ score, gameMode }) => {
  return (
    <LayoutGroup>
      <div className="flex justify-between uppercase w-2/3 mx-auto my-[2px] p-[5px] border border-solid border-[#cfd8e8] rounded-lg text-2xl items-center text-white max-md:w-[80%] ">
        <motion.div className="flex flex-col justify-center font-anton" layout>
          <div>Rock</div>
          <div>Paper</div>
          <div>Scissors</div>
          {gameMode && (
            <>
              <div>Lizard</div>
              <div>Spock</div>
            </>
          )}
        </motion.div>
        <div
          className={`grid place-items-center ${
            gameMode ? "h-40" : "h-28"
          } rounded w-[25%] p-[10px] text-center bg-opacity-95 bg-white max-md:w-[40%] font-montserrat`}
        >
          <UserNameInfo />
          <h1 className="text-[#3b4363] self-start md:">{score}</h1>
        </div>
      </div>
    </LayoutGroup>
  );
};

export default Header;
