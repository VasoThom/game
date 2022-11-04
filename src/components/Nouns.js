import React from "react";

export default function Nouns({ nouns, setNouns }) {
  const handleToggleFlashcard = (noun) => {
    noun.isOpen = !noun.isOpen;
    // to anoiksa einai true sto console alla den to deixnei gt  prepei na to valo sto setNouns
    console.log(noun);
    // setNouns(prev =>  prev = ...prev,noun.isOpen)

    setNouns([...nouns]);
  };
  return (
    <div className="nouns">
      {nouns.map((noun, i) => {
        return (
          <div className="noun" key={i}>
            <div className="front" onClick={() => handleToggleFlashcard(noun)}>
              {noun.singular}
            </div>
            {noun.isOpen && (
              <div className="back">
                {noun.article} {noun.singular}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
