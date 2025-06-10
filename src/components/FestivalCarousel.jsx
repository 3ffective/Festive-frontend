import React from "react";

const FestivalCarousel = ({ festivals }) => {
  return (
    <div style={{ display: "flex", gap: "16px", overflowX: "auto", padding: "8px" }}>
      {festivals.map((festival) => (
        <div key={festival.id} style={{ minWidth: "200px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}>
          <img
            src={festival.image}
            alt={festival.title}
            style={{ width: "100%", display: "block" }}
          />
          <h3 style={{ textAlign: "center", margin: "8px 0" }}>{festival.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FestivalCarousel;