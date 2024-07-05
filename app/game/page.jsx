"use client";

import { Suspense, useState } from "react";
import Header from "./components/Header";
import Rules from "./components/Rules";
import GameBoard from "./components/GameBoard";
import { Play } from "./components/Play";
import Result from "./components/Result";
import { randomInt } from "./components/randomIt";
import Finish from "./components/Finish";

const Page = () => {
  const [score, setScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [select, setSelect] = useState(-1);
  const [gameMode, setGameMode] = useState(false);
  const [gameTurns, setGameTurns] = useState(10);
  const [vsComputer, setVsComputer] = useState(-1);
  const [gameRoundSelect, setGameRoundSelect] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [vsScore, setVsScore] = useState(0);

  console.log(gameTurns)


  const num = gameMode ? 5 : 3;

  const result = randomInt(num);

  const handleRoundSelect = (num) => {
    setGameTurns(num);
    setGameRoundSelect(false);
  };

  const handleClick = () => {
    setPlay(false);
    setGameTurns(10);
  };
  return (
    <main className="min-h-screen ">
      <div className={` min-h-screen ${open ? "opacity-20" : "opacity-100"}`}>
        <Header score={score} gameMode={gameMode} />
        {gameTurns > 0 ? (
          <>
            {!play && (
              <>
                <button
                  className="font-quicksand font-bold translate-y-full bottom-12 right-2 absolute border border-slate-500 p-[5px]"
                  onClick={() => setOpen(!open)}
                >
                  Rules
                </button>
                <button
                  className="font-quicksand font-bold translate-y-full absolute bottom-12 left-2 border border-slate-500 p-[5px] transition-all"
                  onClick={() => setGameMode(!gameMode)}
                >
                  {!gameMode ? "Advenced" : "Normal"}
                </button>{" "}
              </>
            )}
            {select >= 0 ? (
              <Result
                select={select}
                setSelect={setSelect}
                result={result}
                vsComputer={vsComputer}
                gameMode={gameMode}
                setRoundScore={setRoundScore}
                gameTurns={gameTurns}
                userScore={userScore}
                setUserScore={setUserScore}
                vsScore={vsScore}
                setVsScore={setVsScore}
              />
            ) : (
              <>
                <Play
                  gameMode={gameMode}
                  select={select}
                  setSelect={(value) => setSelect(value)}
                  gameTurns={gameTurns}
                  setGameTurns={setGameTurns}
                  setPlay={setPlay}
                  vsComputer={vsComputer}
                  setVsComputer={setVsComputer}
                />
                {!play && (
                  <div
                    className={`flex text-sm md:text-lg font-quicksand font-bold justify-center mx-auto mt-2 w-1/4 transition-all duration-100 ${
                      gameRoundSelect
                        ? "bg-slate-900 p-1 bg-opacity-10 rounded  flex flex-col  "
                        : ""
                    } `}
                  >
                    <button
                      className="w-fit mx-auto "
                      onClick={() => setGameRoundSelect(!gameRoundSelect)}
                    >
                      {gameRoundSelect ? "Select" : "Select Round"}
                    </button>

                    {gameRoundSelect && (
                      <>
                        <button
                          className="w-fit mx-auto hover:scale-105 font-semibold"
                          onClick={() => handleRoundSelect(3)}
                        >
                          Best of 3
                        </button>
                        <button
                          className="w-fit mx-auto hover:scale-105 font-semibold"
                          onClick={() => handleRoundSelect(5)}
                        >
                          Best of 5
                        </button>
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <Finish
            handleClick={handleClick}
            roundScore={roundScore}
            setScore={setScore}
            setUserScore={setUserScore}
            setVsScore={setVsScore}
            userScore={userScore}
            vsScore={vsScore}
            gameTurns={gameTurns}
          />
        )}
      </div>
      {open && (
        <Rules setOpen={() => setOpen(!open)} gameMode={gameMode} open={open} />
      )}
    </main>
  );
};

export default Page;
