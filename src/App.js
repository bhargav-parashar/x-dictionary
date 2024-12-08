import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = getDefinition(searchWord);
    !res
      ? setMeaning("Word not found in the dictionary.")
      : setMeaning(res.meaning);
  };
  const getDefinition = (str) => {
    const definition = dictionary.find(
      (item, idx) => item.word.toLowerCase() === str.toLowerCase()
    );
    return definition;
  };
  return (
    <>
      <h2>Dictionary App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      <h3>Definition:</h3>
      {meaning && <p>{meaning}</p>}
    </>
  );
}

export default App;
