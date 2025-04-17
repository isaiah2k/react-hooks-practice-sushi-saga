import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, onMoreClick, onEatSushi, eatenSushiIds }) {
  return (
    <div className="belt">
      {sushis.map((sushi) => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          onEatSushi={onEatSushi}
          eaten={eatenSushiIds.includes(sushi.id)}
        />
      ))}
      <MoreButton onClick={onMoreClick} />
    </div>
  );
}

export default SushiContainer;
