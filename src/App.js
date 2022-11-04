import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Nouns from "./components/Nouns";

const nounsUrl = "https://edwardtanguay.vercel.app/share/germanNouns.json";

function App() {
  const [nouns, setNouns] = useState([]);

  useEffect(() => {
    (async () => {
      console.log("useEffect");
      const response = await axios.get(nounsUrl);
      console.log(response);
      const rawnouns = response.data;
      const _nouns = [];
      rawnouns.forEach((rawnoun) => {
        const _noun = {
          ...rawnoun,
          isOpen: false,
          isLearned: false,
        };
        _nouns.push(_noun);
      });
      console.log(_nouns);
      setNouns(_nouns);
    })();
  }, []);

  return (
    <div className="App">
      <h1>German Noun Site</h1>
      <p>There are {nouns.length} nouns</p>
      <Nouns nouns={nouns} setNouns={setNouns} />
    </div>
  );
}

export default App;
