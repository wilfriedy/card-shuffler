import React from "react";
import "./SingleCard.css";

export default function SingleCard({ cards, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(cards);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={cards.src} alt="card front" className="front" />
        <img
          onClick={handleClick}
          src="/img/cover.png"
          alt="card back"
          className="back"
        />
      </div>
    </div>
  );
}
