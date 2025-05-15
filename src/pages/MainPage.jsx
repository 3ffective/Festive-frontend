import React from "react";
import FestivalCard from "../components/FestivalCard";
import MapSelector from "../components/MapSelector";

const MainPage = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <section style={{ marginBottom: "2rem" }}>
        <p>지금 다가오는 축제를 둘러보세요. ⓘ</p>
      </section>

      <section style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
        <FestivalCard />
        <FestivalCard />
        <FestivalCard />
      </section>

      <section style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h2>취향에 맞는 축제를 추천받고 싶다면</h2>
        <p>원하는 행정 구역을 선택하고 설문을 시작하세요.</p>
      </section>

      <section style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
        <MapSelector />
      </section>

      <section>
        <h3>추천받은 축제와 연관된 맛집과 숙소도 함께 즐길 수 있습니다.</h3>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <FestivalCard />
          <FestivalCard />
          <FestivalCard />
        </div>
      </section>
    </div>
  );
};

export default MainPage;