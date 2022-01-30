import React, { useState } from "react";
import Player from "./components/Player";

interface PlayerProps {
  [key: string]: number;
}

function App() {
  const [playerScore, resetPlayerScore] = useState<PlayerProps>({
    Benjamin: 0,
    Alex: 0,
  });

  const handle_playerScore = (player: string) => {
    const scoreUp = () => {
      resetPlayerScore({ ...playerScore, [player]: playerScore[player] + 1 });
    };

    const scoreDown = () => {
      resetPlayerScore({
        ...playerScore,
        [player]: playerScore[player] <= 0 ? 0 : playerScore[player] - 1,
      });
    };

    const scoreReset = () => {
      resetPlayerScore({ ...playerScore, [player]: 0 });
    };

    return { scoreUp, scoreDown, scoreReset };
  };

  const resetAll = () => {
    resetPlayerScore({ Benjamin: 0, Alex: 0 });
  };

  return (
    <div>
      <Player
        score={playerScore.Benjamin}
        name="Benjamin"
        handleScore={handle_playerScore}
      />
      <Player
        score={playerScore.Alex}
        name="Alex"
        handleScore={handle_playerScore}
      />

      <button onClick={resetAll}>Reset All</button>
    </div>
  );
}

export default App;
