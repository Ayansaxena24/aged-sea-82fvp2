import { React, useEffect, useState } from "react";

const Timer = ({ id, running, onRemove }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(running);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const playPause = () => {
    setIsRunning(!isRunning);
  };

  const stopTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        justifyContent: "space-around",
        border: "1px solid black",
        borderRadius: "8px",
      }}
    >
      {seconds}
      <button onClick={playPause}>{isRunning ? "Pause" : "Play"}</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

const TimerMain = () => {
  const [timerArray, setTimerArray] = useState([]);

  const addTimer = () => {
    const newTimer = { id: Date.now(), running: false };
    setTimerArray([...timerArray, newTimer]);
  };

  const removeTimer = (id) => {
    setTimerArray(timerArray.filter((timer) => timer.id !== id));
  };
  return (
    <div>
      <h1>TIMER APP</h1>
      {timerArray.map((timer) => (
        <Timer
          key={timer.id}
          id={timer.id}
          running={timer.running}
          onRemove={removeTimer}
        />
      ))}
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            padding: "6px 4px",
          }}
          onClick={addTimer}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default TimerMain;
