import React, { useState } from "react";
import MapSelector from "../components/MapSelector";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./MainPage.css";

// FadeInSection 컴포넌트
const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.18 });
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(60px)",
        transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)"
      }}
    >
      {children}
    </div>
  );
};

const sampleFestivals = [
  { id: 1, name: "축제 이름 1", description: "축제 설명 1", imageUrl: "https://via.placeholder.com/300x150?text=축제+1" },
  { id: 2, name: "축제 이름 2", description: "축제 설명 2", imageUrl: "https://via.placeholder.com/300x150?text=축제+2" },
  { id: 3, name: "축제 이름 3", description: "축제 설명 3", imageUrl: "https://via.placeholder.com/300x150?text=축제+3" },
  { id: 4, name: "축제 이름 4", description: "축제 설명 4", imageUrl: "https://via.placeholder.com/300x150?text=축제+4" },
  { id: 5, name: "축제 이름 5", description: "축제 설명 5", imageUrl: "https://via.placeholder.com/300x150?text=축제+5" },
];

const staticCards = [
  { id: 1, title: "맛집 추천 1", description: "맛집 설명 1" },
  { id: 2, title: "숙소 추천 2", description: "숙소 설명 2" },
  { id: 3, title: "기타 추천 3", description: "기타 설명 3" },
  { id: 4, title: "관광지 추천 4", description: "관광지 설명 4" },
  { id: 5, title: "카페 추천 5", description: "카페 설명 5" },
];

const SearchBar = ({ navigate }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearch = () => {
    if (searchKeyword.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(searchKeyword.trim())}`);
    }
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="축제 키워드 입력"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <span
        role="img"
        aria-label="search"
        onClick={handleSearch}
        style={{ cursor: "pointer" }}
      >🔍</span>
    </div>
  );
};

const MainPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [cardStartIndex, setCardStartIndex] = useState(0);
  const visibleCardCount = 3;

  const handleRegionClick = (region) => {
    navigate(`/survey?region=${region}`);
  };

  return (
<div
  className="main-bg"
  style={{
    backgroundImage: "url(/images/galaxy-bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100vw",
    position: "relative"
  }}
>
      <FadeInSection>
        <section className="section festival-section">
          <div>
            <div style={{ textAlign: "left", marginBottom: "1rem" }}>
              <p className="section-label">다가오는 축제</p>
              <h2 className="section-title">지금 다가오는 축제를 둘러보세요</h2>
            </div>
            <div className="festival-carousel">
              <button 
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentIndex === 0}
                className="carousel-arrow"
                aria-label="Previous Festival"
              >◀</button>
              <div className="carousel-track">
                {sampleFestivals.map((festival, index) => {
                  const offset = index - currentIndex;
                  const isCenter = offset === 0;
                  const scale = isCenter ? 1 : 0.85;
                  const rotateY = isCenter ? 0 : offset * 10;
                  const translateX = offset * 100;
                  const zIndex = isCenter ? 10 : 5;
                  const boxShadow = isCenter ? "0 8px 20px rgba(0,0,0,0.3)" : "0 4px 12px rgba(0,0,0,0.15)";
                  const opacity = Math.abs(offset) > 1 ? 0 : 1;
                  return (
                    <div
                      key={festival.id}
                      className="festival-card"
                      style={{
                        position: "absolute",
                        width: "160px",
                        height: "220px",
                        borderRadius: "10px",
                        backgroundColor: "#fff",
                        overflow: "hidden",
                        boxShadow,
                        transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        zIndex,
                        opacity,
                        pointerEvents: opacity === 0 ? "none" : "auto",
                        top: 0,
                        left: "50%",
                        marginLeft: "-80px",
                      }}
                      onClick={() => navigate(`/festival/${festival.id}`)}
                    >
                      <div style={{ height: "90px", backgroundColor: "#eee" }}>
                        <img
                          src={festival.imageUrl}
                          alt={festival.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                      <div style={{ padding: "0.8rem" }}>
                        <h5 style={{ margin: "0 0 0.3rem", fontSize: "0.95rem" }}>{festival.name}</h5>
                        <p style={{ margin: 0, color: "#666", fontSize: "0.8rem" }}>{festival.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button 
                onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, sampleFestivals.length - 1))}
                disabled={currentIndex === sampleFestivals.length - 1}
                className="carousel-arrow"
                aria-label="Next Festival"
              >▶</button>
            </div>
            <div className="festival-search-label">
              <h3>관심 있는 축제를 키워드를 통해 검색하세요.</h3>
            </div>
            <SearchBar navigate={navigate} />
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="section map-section">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2>취향에 맞는 축제를 추천받고 싶다면</h2>
            <p>원하는 행정 구역을 선택하고 설문을 시작하세요.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MapSelector onSelect={handleRegionClick} />
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="section card-section">
          <div>
            <h3>함께 즐기면 좋은 정보도 있어요</h3>
            <div className="recommend-carousel">
              <button
                onClick={() => setCardStartIndex((prev) => Math.max(prev - 1, 0))}
                disabled={cardStartIndex === 0}
                className="carousel-arrow"
                aria-label="이전 카드"
              >◀</button>
              <div className="card-track">
                {staticCards.slice(cardStartIndex, cardStartIndex + visibleCardCount).map((card) => (
                  <div
                    key={card.id}
                    className="card-slide"
                  >
                    <h5 style={{ marginBottom: "0.5rem" }}>{card.title}</h5>
                    <p style={{ color: "#666", fontSize: "0.9rem" }}>{card.description}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() =>
                  setCardStartIndex((prev) =>
                    Math.min(prev + 1, staticCards.length - visibleCardCount)
                  )
                }
                disabled={cardStartIndex >= staticCards.length - visibleCardCount}
                className="carousel-arrow"
                aria-label="다음 카드"
              >▶</button>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default MainPage;