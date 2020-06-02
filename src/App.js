import React, { useState } from "react";
import "./App.css";

function App() {
  document.title="Type Race";
  const snippets = [
    "Bears, beets, battlestar galactica",
    "What's Forrest Gump's password? 1Forrest1",
    "Where do programmers like to hangout? The Foo Bar",
  ];
  const initialGameState = { victory: false, startTime: null, endTime: null };
  const [snippet, setSnippets] = useState("");
  const [userText, setUserText] = useState("");
  const [gameState, setGameState] = useState(initialGameState);

  const updateUserText = (event) => {
    setUserText(event.target.value);

    if(event.target.value===snippet){
      setGameState({
        ...gameState,
        victory:true,
        endTime:new Date().getTime() - gameState.startTime
      });
    }
  };
  console.log("current userText : ", userText);

  const chooseSnippet = (snippetIndex) => () => {
    console.log("setSnippet", snippetIndex);
    setSnippets(snippets[snippetIndex]);
    setGameState({ ...gameState, startTime: new Date().getTime() });
  };

  return (
    <div className="App">
    <header>
      <h1>🏁 Type Race 💨</h1>
   </header>
   <div className="choices">
   <div className="game">
      <h2>{snippet}</h2>
      <h4>{gameState.victory ? `Done ! 🎉 Time: ${gameState.endTime}ms` : null} </h4>
      <input value={userText} onChange={updateUserText} />
      </div>

  

   <p>Choose a word to begin the race</p>
      {snippets.map((snippet, index) => (
        <button onClick={chooseSnippet(index)} key={index}>
          {snippet}
        </button>
      ))}
      </div>
   

    </div>
  );
}

export default App;
