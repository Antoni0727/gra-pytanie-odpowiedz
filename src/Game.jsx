import React, { useState } from "react";
import Points from "./Points";

function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const question = [
    "Jaka jest stolica USA?",
    "Kto napisał teorię względności?",
    "Jaka jest 5 planeta od Słońca?",
    "Ile wynosi pierwiastek kwadratowy z 144?",
    "Które państwo jest największe pod względem powierzchni?",
    "Kto był pierwszym prezydentem Polski po 1989 roku?",
  ];

  const answer = [
    "Waszyngton",
    "Albert Einstein",
    "Jowisz",
    "12",
    "Rosja",
    "Lech Wałęsa",
  ];

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    const currentCorrectAnswer = answer[currentQuestion];
    if (userAnswer.toLowerCase() === currentCorrectAnswer.toLowerCase()) {
      setPoints(points + 1);
    }

    if (currentQuestion === question.length - 1) {
      endGame();
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setCurrentQuestion(0);
    setPoints(0);
  };

  const endGame = () => {
    setGameStarted(false);
  };

  return (
    <>
      <div className="game">
        {gameStarted ? (
          <form onSubmit={handleAnswerSubmit}>
            <h2>{question[currentQuestion]}</h2>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button type="submit" id="wyslij">Wyślij</button>
            <h3>Twoje punkty: <Points points={points}/></h3>
          </form>
        ) : (
          <div>
            <h2>Gra zakończona. Twoje punkty: {points}</h2>
          </div>
        )}
      </div>
      {!gameStarted && (
        <div>
          <button onClick={startGame} id="start">Rozpocznij grę</button>
        </div>
      )}
    </>
  );
}

export default Game;