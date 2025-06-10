import React from "react";
import busanMap from "../assets/images/busan-map.png";

const MapSelector = ({ onSelect }) => {
  const regions = [
    { name: "강서", top: 180, left: 120 },
    { name: "사하", top: 240, left: 170 },
    { name: "서구", top: 215, left: 190 },
    { name: "중구", top: 213, left: 220 },
    { name: "영도", top: 240, left: 240 },
    { name: "동구", top: 180, left: 220 },
    { name: "부산진", top: 160, left: 230 },
    { name: "남구", top: 190, left: 255 },
    { name: "북구", top: 120, left: 210 },
    { name: "사상", top: 175, left: 185 },
    { name: "연제", top: 160, left: 265 },
    { name: "해운대", top: 140, left: 300 },
    { name: "수영", top: 190, left: 290 },
    { name: "동래", top: 130, left: 260 },
    { name: "금정", top: 95, left: 255 },
    { name: "기장", top: 70, left: 330 },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "300px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        cursor: "default",
        userSelect: "none",
      }}
    >
      <img
        src={busanMap}
        alt="부산 지도"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {regions.map(({ name, top, left }) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          style={{
            position: "absolute",
            top: `${top}px`,
            left: `${left}px`,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 123, 255, 0.7)",
            color: "#fff",
            border: "2px solid #fff",
            boxShadow: "0 0 5px rgba(0,0,0,0.3)",
            fontSize: "8px",
            fontWeight: "600",
            textAlign: "center",
            lineHeight: "36px",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "rgba(0, 123, 255, 0.9)";
            e.currentTarget.style.transform = "scale(1.2)";
            e.currentTarget.style.boxShadow = "0 0 8px rgba(0,123,255,0.8)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "rgba(0, 123, 255, 0.7)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default MapSelector;