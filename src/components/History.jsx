import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(stored);
  }, []);
  return (
    <div className="flex flex-col justify-center align-center gap-15">
      <div className="main-text flex flex-wrap justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl mb-8 flex flex-row justify-center items-center">
          History
        </h1>
      </div>
      {history.map((item, index) => (
        <div key={index} className="flex justify-center">
          <div className="w-5/6 bg-[#FFFACC] text-[#53131E] p-10 rounded-xl flex flex-col justify-center items-center">
            <p className="histhead capitalize text-3xl md:text-4xl mb-8">{item.prompt}</p>
            <p>
              <ReactMarkdown>{item.response}</ReactMarkdown>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
