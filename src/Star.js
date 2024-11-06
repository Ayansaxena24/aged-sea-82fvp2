import React, { useState } from "react";

const IndividualStars = ({ id, onRemove }) => {
  const [hoverStars, setHoverStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-around", width: "27%" }}
    >
      <div
        style={{
          border: "1px solid red",
          borderRadius: "8px",
          backgroundColor:
            selectedStars > 0
              ? "blue"
              : hovered && hoverCount > 0
              ? "blue"
              : "red", // Change color on hover
          width: "20px",
          height: "20px",
        }}
        onMouseEnter={() => {
          setHovered(true);
          setHoverCount(1);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setHoverCount(0);
        }}
        onClick={() => setSelectedStars(1)}
      />
      <div
        style={{
          border: "1px solid red",
          borderRadius: "8px",
          backgroundColor:
            selectedStars > 1
              ? "blue"
              : hovered && hoverCount > 1
              ? "blue"
              : "red", // Change color on hover
          width: "20px",
          height: "20px",
        }}
        onMouseEnter={() => {
          setHovered(true);
          setHoverCount(2);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setHoverCount(0);
        }}
        onClick={() => setSelectedStars(2)}
      />
      <div
        style={{
          border: "1px solid red",
          borderRadius: "8px",
          backgroundColor:
            selectedStars > 2
              ? "blue"
              : hovered && hoverCount > 2
              ? "blue"
              : "red", // Change color on hover
          width: "20px",
          height: "20px",
        }}
        onMouseEnter={() => {
          setHovered(true);
          setHoverCount(3);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setHoverCount(0);
        }}
        onClick={() => setSelectedStars(3)}
      />
      <div
        style={{
          border: "1px solid red",
          borderRadius: "8px",
          backgroundColor:
            selectedStars > 3
              ? "blue"
              : hovered && hoverCount > 3
              ? "blue"
              : "red", // Change color on hover
          width: "20px",
          height: "20px",
        }}
        onMouseEnter={() => {
          setHovered(true);
          setHoverCount(4);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setHoverCount(0);
        }}
        onClick={() => setSelectedStars(4)}
      />
      <div
        style={{
          border: "1px solid red",
          borderRadius: "8px",
          backgroundColor:
            selectedStars > 4
              ? "blue"
              : hovered && hoverCount > 4
              ? "blue"
              : "red", // Change color on hover
          width: "20px",
          height: "20px",
        }}
        onMouseEnter={() => {
          setHovered(true);
          setHoverCount(5);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setHoverCount(0);
        }}
        onClick={() => setSelectedStars(5)}
      />
      <button
        style={{
          border: "1px solid red",
          borderRadius: "6px",
          padding: "0px 10px",
        }}
        onClick={() => onRemove(id)}
      >
        -
      </button>
    </div>
  );
};

const Star = () => {
  const [starsArray, setStarsArray] = useState([]);

  const addStars = () => {
    const newStarsArray = { id: Date.now() };
    setStarsArray([...starsArray, newStarsArray]);
    console.log(starsArray.length, "test");
  };

  const removeStars = (id) => {
    setStarsArray(starsArray.filter((star) => star.id !== id));
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <p>STAR APP</p>
      {starsArray.map((star) => (
        <IndividualStars key={star.id} id={star.id} onRemove={removeStars} />
      ))}
      <div>
        <button
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            padding: "6px 4px",
          }}
          onClick={addStars}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Star;
