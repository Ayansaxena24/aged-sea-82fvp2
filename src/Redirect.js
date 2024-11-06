import React, { useState, useEffect } from "react";

function Timer({ timer, updateTimer }) {
  const { id, time, running } = timer;
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (running) {
      const newIntervalId = setInterval(() => {
        updateTimer(id, { time: time + 1 });
      }, 1000);
      setIntervalId(newIntervalId);
    } else if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => clearInterval(intervalId);
  }, [running, time, id, updateTimer]);

  const timeFormat = () => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    const hours = Math.floor(mins / 60);
    return `${String(hours).padStart(2, "0")}:${String(mins % 60).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const playPauseToggle = () => {
    updateTimer(id, { running: !running });
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    updateTimer(id, { time: 0, running: false });
  };

  return (
    <div>
      <h2>{timeFormat()}</h2>
      <button onClick={playPauseToggle}>{running ? "PAUSE" : "PLAY"}</button>
      <button onClick={stopTimer} disabled={!running}>
        STOP
      </button>
    </div>
  );
}

export default function TimersApp() {
  const [numTimers, setNumTimers] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTimer = () => {
    setNumTimers([...numTimers, { id: nextId, time: 0, running: true }]);
    setNextId(nextId + 1);
  };

  const updateTimer = (id, newS) => {
    setNumTimers(
      numTimers.map((timer) =>
        timer.id === id ? { ...timer, ...newS } : timer
      )
    );
  };

  return (
    <div>
      <h1>TIMER APP</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "0 auto",
        }}
      >
        {numTimers.map((timer) => (
          <Timer key={timer.id} timer={timer} updateTimer={updateTimer} />
        ))}
        <button onClick={addTimer}>ADD TIMER</button>
      </div>
    </div>
  );
}
