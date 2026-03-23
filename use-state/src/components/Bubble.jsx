import React, { useState, useEffect } from "react";
import "./bubb.css";

const Bubble = () => {
  const [time, setTime] = useState(60);
  const [hit, setHit] = useState(0);
  const [score, setScore] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const makeBubbles = () => {
    let arr = [];
    for (let i = 0; i < 120; i++) {
      arr.push(Math.floor(Math.random() * 10 + 1));
    }
    setBubbles(arr);
  };

  const generateHit = () => {
    setHit(Math.floor(Math.random() * 10 + 1));
  };

  useEffect(() => {
    if (time <= 0) {
      setGameOver(true);
      return;
    }
    const timer = setInterval(() => setTime(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    makeBubbles();
    generateHit();
  }, []);

  const handleClick = (num) => {
    if (gameOver) return;
    if (num === hit) setScore(prev => prev + 10);
    else setScore(prev => prev - 10);

    generateHit();
    makeBubbles();
  };

  const restartGame = () => {
    setTime(60);
    setScore(0);
    setGameOver(false);
    makeBubbles();
    generateHit();
  };

  return (
    <main>
      {!gameOver ? (
        <div className="panel">
          <div className="ptop">
            <div className="elem">
              <h2>Hit</h2>
              <div className="box">{hit}</div>
            </div>
            <div className="elem">
              <h2>Timer</h2>
              <div className="box">{time}</div>
            </div>
            <div className="elem">
              <h2>Score</h2>
              <div className="box">{score}</div>
            </div>
          </div>
          <div className="pbtm">
            {bubbles.map((num, i) => (
              <div
                key={i}
                className="bubble"
                onClick={() => handleClick(num)}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="result">
          <div className="rresult">
            <h2>Game Over</h2>
            <h2>Your score is {score}</h2>
            <button onClick={restartGame}>Play Again</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Bubble;