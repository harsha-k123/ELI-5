import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import BlurText from "./BlurText";

export default function Main({ askAI, responseText, loading }) {
  const [prompt, setPrompt] = useState("");
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div>
      <div className="main-text flex flex-wrap justify-center items-center text-center">
        <BlurText
          text="Explain Like I'm FIVE"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className=" text-5xl md:text-6xl mb-8 flex flex-row justify-center items-center"
        />
      </div>
      <div className="tagline flex flex-row justify-center items-center">
        <p className="text-xl flex flex-row justify-center items-center text-center">
          When you just can’t pretend to understand anymore.
        </p>
      </div>
      <div className="cards flex flex-row justify-evenly flex-wrap">
        <div className="box flex flex-col justify-center items-center gap-3 h-48 w-3xs bg-[#A78A7F] p-5 mt-15 rounded-2xl">
          <div className=" text-center text-xl">
            Get Detailed Explanations Within Seconds{" "}
          </div>{" "}
          <i className="fa-solid text-2xl fa-clock"></i>
        </div>
        <div className="box flex flex-col justify-center items-center gap-3 h-48 w-3xs bg-[#A78A7F] p-5 mt-15 rounded-2xl">
          <div className=" text-center text-xl">
            Check Your History Anytime For a Quick Revision{" "}
          </div>{" "}
          <i className="fa-solid text-2xl fa-calendar"></i>
        </div>
        <div className="box flex flex-col justify-center items-center gap-3 h-48 w-3xs bg-[#A78A7F] p-5 mt-15 rounded-2xl">
          <div className=" text-center text-xl">
            Learn Complex Topics with Ease{" "}
          </div>{" "}
          <i className="fa-solid text-2xl fa-wand-magic-sparkles"></i>
        </div>
      </div>

      <div className="hero-section mt-15 flex flex-row gap-10 flex-wrap items-center justify-center">
        <input
          type="text"
          placeholder="search for a topic"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          id="ask"
          className="w-5/6 md:w-2/6 h-10 border-2 p-4 rounded-md"
        />
        <button
          onClick={() => askAI(prompt)}
          className="bg-[#FFFACC] text-[#53131E] text-xl font-bold rounded-xl pr-6 pl-6 pt-2 pb-2 cursor-pointer"
        >
          EXPLAIN
        </button>
        <div className="response w-5/6 bg-[#FFFACC] text-[#53131E] p-10 rounded-xl">
          {loading ? (
            <div className="flex justify-center my-4">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-[#53131E] border-t-transparent"></div>
            </div>
          ) : (
            <ReactMarkdown>{responseText}</ReactMarkdown>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center m-15">
        <button onClick={() => askAI(prompt)} className="bg-[#FFFACC] text-[#53131E] text-xl font-bold rounded-xl pr-6 pl-6 pt-2 pb-2 cursor-pointer">REGENERATE</button>
      </div>
    </div>
  );
}
