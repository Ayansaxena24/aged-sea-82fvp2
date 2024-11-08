import React, { useState } from "react";

const PopOver = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    }
  return (
    <div>
      <button
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          padding: "4px 4px",
        }}
      >
        OPEN
      </button>
    </div>
  );
};

export default PopOver;
