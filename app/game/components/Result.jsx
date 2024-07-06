import { LayoutGroup, MotionConfig, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GameRules } from "./gameRules";
import playCss from "../../../styles/Play.module.css";
import resultCss from "../../../styles/Result.module.css";

const Result = ({
  select,
  vsComputer,
  setRoundScore,
  gameTurns,
  userScore,
  setUserScore,
  vsScore,
  setVsScore,
}) => {
  const [canShow, setCanShow] = useState(false);
  const [canShow2, setCanShow2] = useState(false);

  // Set Time out
  useEffect(() => {
    const timer = setTimeout(() => {
      if (GameRules[vsComputer].beats.includes(userSelected)) {
        setVsScore((count) => (count += 1));
        setCanShow(true);
      } else {
        if (GameRules[vsComputer].value === userSelected) {
          setCanShow(true);
        } else {
          setUserScore((count) => (count += 1));
          setCanShow(true);
        }
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCanShow2(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const userSelected = GameRules[select].value;

  useEffect(() => {
    if (GameRules[vsComputer].beats.includes(userSelected)) {
      setRoundScore((count) => (count -= 1));
    } else {
      if (GameRules[vsComputer].value === userSelected) {
      } else {
        setRoundScore((count) => (count += 1));
      }
    }
  }, [gameTurns]);

  return (
    <LayoutGroup>
      {/*if statement ile yap */}
      <div className={resultCss.container}>
        {canShow2 ? (
          <>
            {canShow ? (
              <>
                {GameRules[vsComputer].value === userSelected ? (
                  <motion.button
                    initial={{ y: 0, scale: 1, left: 0 }}
                    className={`${
                      playCss[GameRules[select].value]
                    } flex flex-col justify-self-center`}
                  >
                    <button className={playCss.inside}>
                      <img
                        src={`/images/icon-${GameRules[select].value}.svg`}
                        alt=""
                      />
                    </button>
                  </motion.button>
                ) : (
                  <>
                    {!GameRules[vsComputer].beats.includes(userSelected) && (
                      <motion.button
                        initial={{ x: 0, y: 20, scale: 0 }}
                        animate={{ x: 0, y: 0, scale: 1 }}
                        className={`${
                          playCss[GameRules[select].value]
                        } flex flex-col justify-center`}
                      >
                        <button className={playCss.inside}>
                          <img
                            src={`/images/icon-${GameRules[select].value}.svg`}
                            alt=""
                          />
                        </button>
                      </motion.button>
                    )}
                  </>
                )}
              </>
            ) : (
              <motion.button
                initial={{ x: 0, left: 0 }}
                animate={{ x: 0, left: 50, transition: { repeat: 1 } }}
                exit={{ left: 0 }}
                className={`${playCss[GameRules[select].value]} flex flex-col`}
              >
                <button className={playCss.inside}>
                  <img
                    src={`/images/icon-${GameRules[select].value}.svg`}
                    alt=""
                  />
                </button>
              </motion.button>
            )}
          </>
        ) : (
          <motion.button
            initial={{ x: 0, y: 20, scale: 0 }}
            animate={{
              x: 0,
              y: 0,
              transition: { repeat: 3 },
              scale: 1,
            }}
            className={`${playCss[GameRules[select].value]} flex flex-col`}
          >
            <button className={playCss.inside}>
              <img src={`/images/icon-${GameRules[select].value}.svg`} alt="" />
            </button>
          </motion.button>
        )}
        <h1 className="flex absolute top-[110%] right-3/4 font-montserrat font-extrabold">
          {userScore}
        </h1>
        <p className="flex absolute   top-[115%] font-anton font-extralight">
          VS
        </p>
        <h1 className="flex absolute  top-[-80%] font-montserrat font-extrabold">
          Remaining Round
        </h1>
        <p className="flex absolute mr-1 top-[-55%] font-montserrat font-extrabold">
          {gameTurns}
        </p>
        {canShow2 ? (
          <>
            {canShow ? (
              <>
                {GameRules[vsComputer].value === userSelected ? (
                  <motion.button
                    initial={{ y: 0, scale: 1, right: 0 }}
                    animate={{ scale: 1 }}
                    className={`${
                      playCss[GameRules[vsComputer].value]
                    } flex flex-col `}
                  >
                    <button className={playCss.inside}>
                      <img
                        src={`/images/icon-${GameRules[vsComputer].value}.svg`}
                        alt=""
                      />
                    </button>
                  </motion.button>
                ) : (
                  <>
                    {GameRules[vsComputer].beats.includes(userSelected) && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, right: 0 }}
                        className={`${
                          playCss[GameRules[vsComputer].value]
                        } flex flex-col `}
                      >
                        <button className={playCss.inside}>
                          <img
                            src={`/images/icon-${GameRules[vsComputer].value}.svg`}
                            alt=""
                          />
                        </button>
                      </motion.button>
                    )}
                  </>
                )}
              </>
            ) : (
              <motion.button
                initial={{ x: 1, right: 0 }}
                animate={{ x: 0, right: 50, transition: { repeat: 1 } }}
                exit={{ right: 0 }}
                className={`${
                  playCss[GameRules[vsComputer].value]
                } flex flex-col`}
              >
                <button className={playCss.inside}>
                  <img
                    src={`/images/icon-${GameRules[vsComputer].value}.svg`}
                    alt=""
                  />
                </button>
              </motion.button>
            )}
          </>
        ) : (
          <motion.button
            initial={{ x: 5, y: 20, scale: 0 }}
            animate={{
              y: 0,
              transition: { repeat: 3 },
              scale: 1,
            }}
            className={playCss.empty}
          >
            <button className={playCss.inside}>
              <img
                src={"/images/question-sign.png"}
                className="rounded-[100%] w-12"
                alt=""
              />
            </button>
          </motion.button>
        )}
        <h1 className="flex absolute top-[110%] left-3/4 font-montserrat font-extrabold">
          {vsScore}
        </h1>
      </div>
    </LayoutGroup>
  );
};

export default Result;
