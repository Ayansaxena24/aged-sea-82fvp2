import React, { useState } from "react";

const Progress = (perc) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ border: "1px solid black", width: "100%", height: "20px" }}>
        <div
          style={{
            height: "100%",
            width: `${perc}%`,
            backgroundColor: "green",
          }}
        ></div>
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const [perc, setPerc] = useState(0);

  const inc = () => {
    if (perc < 100) setPerc((prev) => prev + 1);
  };

  const dec = () => {
    if (perc > 0) setPerc((prev) => prev - 1);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => inc()}
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          padding: "4px 4px",
        }}
      >
        +
      </button>
      {Progress(perc)}
      <button
        onClick={() => dec()}
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          padding: "4px 4px",
        }}
      >
        -
      </button>
    </div>
  );
};

export default ProgressBar;
