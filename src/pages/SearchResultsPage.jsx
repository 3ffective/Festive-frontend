import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const dummyFestivals = [
  {
    id: 1,
    name: "봄 축제 1",
    description: "봄에 열리는 축제 1 설명",
    imageUrl: "https://via.placeholder.com/300x150?text=봄+축제+1",
  },
  {
    id: 2,
    name: "가을 축제 2",
    description: "가을에 열리는 축제 2 설명",
    imageUrl: "https://via.placeholder.com/300x150?text=가을+축제+2",
  },
];

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const keyword = searchParams.get("keyword") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    // TODO: 실제 API 요청 대신 더미 데이터 필터링
    const filtered = dummyFestivals.filter((festival) =>
      festival.name.includes(keyword)
    );
    setResults(filtered);
  }, [keyword]);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "2rem auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9fb",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
      }}
    >
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "1.5rem",
          padding: "0.6rem 1.2rem",
          backgroundColor: "#999",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "1rem",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#666")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#999")}
      >
        메인페이지로 돌아가기
      </button>

      <h3
        style={{
          color: "#000",
          marginBottom: "2rem",
          fontWeight: "bold",
          fontSize: "1.4rem",
        }}
      >
        "{keyword}" 관련 추천 축제를 확인해보세요!
      </h3>

      {results.length === 0 ? (
        <p style={{ fontSize: "1rem", color: "#ㅠ" }}>검색 결과가 없습니다.</p>
      ) : (
        results.map((festival) => (
          <div
            key={festival.id}
            style={{
              marginBottom: "2rem",
              padding: "1rem",
              borderRadius: "12px",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onClick={() => navigate(`/festival/${festival.id}`)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.12)";
            }}
          >
            <img
              src={festival.imageUrl}
              alt={festival.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "0.75rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            />
            <h3
              style={{
                margin: "0 0 0.5rem",
                fontWeight: "700",
                fontSize: "1.25rem",
                color: "#222",
              }}
            >
              {festival.name}
            </h3>
            <p style={{ margin: 0, color: "#555", fontSize: "1rem", lineHeight: "1.4" }}>
              {festival.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResultsPage