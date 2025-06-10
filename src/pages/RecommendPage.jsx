import React from "react";
import { useNavigate } from "react-router-dom";

const recommendedFestivals = [
  {
    id: 1,
    title: "해운대 불꽃 축제",
    description: "해운대 바다를 배경으로 멋진 불꽃이 펼쳐지는 축제예요.",
    link: "https://www.google.com/search?q=해운대+불꽃+축제",
    imageUrl: "https://via.placeholder.com/300x150?text=해운대+불꽃",
  },
  {
    id: 2,
    title: "부산 국제 영화제",
    description: "영화인들과 함께 즐기는 아시아 대표 영화 축제랍니다.",
    link: "https://www.google.com/search?q=부산+국제+영화제",
    imageUrl: "https://via.placeholder.com/300x150?text=부산+국제+영화제",
  },
  {
    id: 3,
    title: "광안리 드론 라이트쇼",
    description: "드론이 밤하늘에 그리는 빛의 쇼, 광안리에서 열려요!",
    link: "https://www.google.com/search?q=광안리+드론+라이트쇼",
    imageUrl: "https://via.placeholder.com/300x150?text=광안리+드론+라이트쇼",
  },
];

const RecommendPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "1.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#4B0082",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        메인페이지로 돌아가기
      </button>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "2rem", fontWeight: "bold" }}>
        당신의 관심사를 바탕으로 이런 축제들을 추천드려요!
      </h2>
      {recommendedFestivals.map(festival => (
        <div key={festival.id} style={{
          padding: "1rem",
          borderBottom: "1px solid #ddd",
          marginBottom: "1.5rem"
        }}>
          <img
            src={festival.imageUrl}
            alt={festival.title}
            style={{ width: "100%", height: "auto", borderRadius: "6px", marginBottom: "0.75rem" }}
          />
          <h3 style={{ color: "#1a0dab", marginBottom: "0.5rem" }}>
            <a href={festival.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              {festival.title}
            </a>
          </h3>
          <p style={{ color: "#4d5156", marginBottom: "0.5rem" }}>{festival.description}</p>
          <a href={festival.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.9rem", color: "#006621" }}>
            {festival.link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default RecommendPage;