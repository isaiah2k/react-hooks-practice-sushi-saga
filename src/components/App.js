import React, { useState, useEffect } from "react";
import SushiContainer from "/home/zay/phase-2/react-hooks-practice-sushi-saga/src/components/SushiContainer/SushiContainer.js";
import Table from "/home/zay/phase-2/react-hooks-practice-sushi-saga/src/components/Table/Table.js";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [index, setIndex] = useState(0);
  const [eatenSushiIds, setEatenSushiIds] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setSushis);
  }, []);

  function handleMoreClick() {
    setIndex((prev) => prev + 4);
  }

  function handleEatSushi(sushi) {
    const alreadyEaten = eatenSushiIds.includes(sushi.id);
    const canAfford = sushi.price <= budget;

    if (!alreadyEaten && canAfford) {
      setEatenSushiIds([...eatenSushiIds, sushi.id]);
      setBudget((prev) => prev - sushi.price);
    }
  }

  const visibleSushis = sushis.slice(index, index + 4);

  return (
    <div className="app">
      <SushiContainer
        sushis={visibleSushis}
        onMoreClick={handleMoreClick}
        onEatSushi={handleEatSushi}
        eatenSushiIds={eatenSushiIds}
      />
      <Table plates={eatenSushiIds} budget={budget} />
    </div>
  );
}

export default App;
