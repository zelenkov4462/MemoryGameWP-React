import React, { FC, useEffect, useState } from "react";
import Card from "./components/Card";
import { ICard } from "./types/index";
import Modal from "./components/Modal";
import arr from "../App/const/const";

const App: FC = () => {
  const [shuffledCards, setShuffledCards] = useState<ICard[]>([]);
  const [openCards, setOpenCards] = useState([]);
  const [modal, setModal] = useState(false);
  const [coincidence, setCoincidence] = useState(0);

  const handleReset = () => {
    setShuffledCards(arr.sort(() => Math.random() - 0.5));
  };

  const comparisonCards = () => {
    const [first, second] = openCards;

    if (first.image === second.image) {
      first.status = "matches";
      second.status = "matches";
      setCoincidence((prev) => prev + 1);
    } else {
      first.status = "";
      second.status = "";
    }
    setOpenCards([]);
  };

  const handleClickCard = (card: ICard, e: React.MouseEvent) => {
    e.stopPropagation();
    card.status = "active";
    console.log(openCards[0]);

    if (openCards.length === 1 && openCards[0].id !== card.id) {
      setOpenCards((prev) => [...prev, card]);
    } else {
      setOpenCards([card]);
    }
  };

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(comparisonCards, 200);
    }
  }, [openCards]);

  useEffect(() => {
    if (coincidence === 8) {
      setModal(true);
    }
  }, [coincidence]);

  return (
    <>
      <div className="container">
        <button className="btn" onClick={handleReset}>
          Начать игру
        </button>
        {modal ? (
          <Modal visible={modal} setVisible={setModal}></Modal>
        ) : (
          <div className="game-field">
            {shuffledCards.map((card) => (
              <Card
                key={Math.random() - 0.5}
                card={card}
                handleClickCard={handleClickCard}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
