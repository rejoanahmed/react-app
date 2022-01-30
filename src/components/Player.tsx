import React from "react";

interface PlayerProps {
  name: string;
  score: number;
  handleScore: (player: string) => {
    scoreUp: () => void;
    scoreDown: () => void;
    scoreReset: () => void;
  };
}

const Player = ({ name, score, handleScore }: PlayerProps) => {
  const { scoreUp, scoreDown, scoreReset } = handleScore(name);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{score}</h2>
      <button style={{ backgroundColor: "green" }} onClick={scoreUp}>
        +
      </button>
      <button style={{ backgroundColor: "red" }} onClick={scoreDown}>
        -
      </button>
      <button style={{ backgroundColor: "purple" }} onClick={scoreReset}>
        Reset {name} Score
      </button>
    </div>
  );
};

export default Player;
