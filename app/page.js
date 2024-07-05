"use client";

import Link from "next/link";
import { Suspense, useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState(null);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  
  return (
    <Suspense fallback={"Loading..."}>
    <main className="flex min-h-screen flex-col items-center  font-montserrat ">
<div className=" w-full h-40 bg-cover bg-[url('./background2.jpeg')] blur-xl opacity-25"></div>
      <div className="flex flex-col p-2">
        <h1 className="text-center p-1">User Name</h1>
        <input
          onChange={handleChange}
          className="w-full  mb-3 pb-1 pl-1 rounded text-black"
        />
        {userName ? (
          <Link
            href={{
              pathname: "/game",
              query: {userName: userName}
            }}
            className="bg-[#FDFFE2] text-black w-1/2 mx-auto  p-2 flex justify-center  rounded"
          >
            Submit
          </Link>
        ) : (
          <button
            
            className="bg-[#FDFFE2] text-black w-1/2 mx-auto  p-2  rounded"
          >
            Submit
          </button>
        )}
      </div>
    </main>
    </Suspense>
  );
}
