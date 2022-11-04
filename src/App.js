import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="nouns">
        {nouns.map((noun, i) => {
          return (
            <div className="noun" key={i}>
              <div className="front"> {noun.singular}</div>
              {noun.isOpen && (
                <div className="back">
                  {noun.article} {noun.singular}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
