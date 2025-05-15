import React from "react";

const FestivalCard = () => {
  return (
    <div
      style={{
        width: "150px",
        height: "180px",
        backgroundColor: "#ddd",
        borderRadius: "8px",
        padding: "1rem",
      }}
    >
      <div style={{ width: "100%", height: "100px", backgroundColor: "#bbb", marginBottom: "0.5rem" }}></div>
      <p style={{ backgroundColor: "#ccc", height: "12px", marginBottom: "5px" }}></p>
      <p style={{ backgroundColor: "#ccc", height: "12px" }}></p>
    </div>
  );
};

export default FestivalCard;