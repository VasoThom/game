import React from "react";

export default function Nouns({ nouns, setNouns }) {
  const handleToggleFlashcard = (noun) => {
    noun.isOpen = !noun.isOpen;
    // to anoiksa einai true sto console alla den to deixnei gt  prepei na to valo sto setNouns
    console.log(noun);
    // setNouns(prev =>  prev = ...prev,noun.isOpen)

    setNouns([...nouns]);
    saveState();
  };
  const handleMarkasLerned = (noun) => {
    noun.isLearned = true;
    setNouns([...nouns]);
    saveState();
  };
  const saveState = () => {
    setNouns([...nouns]);
    localStorage.setItem("german", JSON.stringify(nouns));
  };
  return (
    <div className="nouns">
      {nouns.map((noun, i) => {
        return (
          <>
            {!noun.isLearned && (
              <div className="noun" key={i}>
                <div
                  className="front"
                  onClick={() => handleToggleFlashcard(noun)}
                >
                  {noun.singular}
                </div>
                {noun.isOpen && (
                  <div className="back">
                    {noun.article} {noun.singular}
                    <br></br>
                    <div className="plural">{noun.plural}</div>
                    <button onClick={() => handleMarkasLerned(noun)}>
                      Mark as Learned
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
