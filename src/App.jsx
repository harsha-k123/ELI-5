import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import Header from "./components/Header";
import Main from "./components/Main";
import History from "./components/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const AI = new GoogleGenAI({ apiKey: API_KEY });
  const [responseText, setResponseText] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI(prompt) {
    setLoading(true);
    try {
      const response = await AI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Explain what ${prompt} is, and how it works. Imagine that I'm 5 years old and use effective examples and analogies, wherever required.`,
      });
      setResponseText(response.text);

      const newEntry = {
        prompt: prompt,
        response: response.text,
      };

      const existingHistory = JSON.parse(localStorage.getItem("history")) || [];
      existingHistory.unshift(newEntry);
      localStorage.setItem("history", JSON.stringify(existingHistory));
    } catch {
      setResponseText("oops, something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              askAI={askAI}
              responseText={responseText}
              loading={loading}
            />
          }
        />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

