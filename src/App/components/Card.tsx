import React, { FC } from "react";
import { ICard } from "../types";

interface ICardProps {
  card: ICard;
  handleClickCard: (card: ICard, e: React.MouseEvent) => void;
}

const Card: FC<ICardProps> = ({ card, handleClickCard }) => {
  const itemClass = card.status ? card.status : "";

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleClickCard(card, e);
  };

  return (
    <div className={"game-card" + itemClass} onClick={handleClick}>
      <img
        src={card.image}
        alt="img"
        className="card-img"
        key={Math.random() - 0.5}
      ></img>
    </div>
  );
};

export default Card;
