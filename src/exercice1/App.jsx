
import React, { useState } from "react";
import ChercheBar from "./SearchBar";
import ResultatList from "./ResultaList";

const ITEMS = [
  { nom: "banane", type: "fruit" },
  { nom: "orange", type: "fruit" },
  { nom: "pomme", type: "fruit" },
  { nom: "raisins", type: "fruit" },
  { nom: "kiwi", type: "fruit" },
  { nom: "tomate", type: "legume" },
  { nom: "carotte", type: "legume" },
  { nom: "pomme de terre", type: "legume" },
  { nom: "navet", type: "legume" },
  { nom: "poivron", type: "legume" },
];

export default function App() {
  const [selectedType, setSelectedType] = useState("");
  const [resultats, setResultats] = useState([]);

  function handleSearchSubmit(type) {
    setSelectedType(type);

    const filteredItems = ITEMS.filter(
      item => item.type.toUpperCase() === type
    );

    setResultats(filteredItems);
  }

  return (
    <div className="App">
      <h1>Composant App</h1>

      <ChercheBar onChercheSubmit={handleSearchSubmit} />

      <p>
        Le type :
        <span
          style={{
            color: "rgb(36, 44, 33)",
            fontWeight: "bold",
            marginLeft: "6px",
          }}
        >
          {selectedType}
        </span>
      </p>

      <ResultatList resultats={resultats} />
    </div>
  );
}

