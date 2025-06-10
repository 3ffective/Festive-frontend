import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const SurveyPage = () => {
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"];
  const optionsMap = {
    q1: ["무료 축제", "유료 축제(콘서트, 먹거리 포함 등)", "상관 없음 / 잘 모르겠음"],
    q2: ["먹거리", "문화 /전통", "관광/체험", "예술/전시", "음악/공연", "기타"],
    q3: ["대형 축제(많은 사람, 유명 공연 포함)", "중소형 지역 축제(소박하고 조용한 분위기)", "상관없음"],
    q4: ["낮", "저녁", "밤", "시간대 상관없음"],
    q5: ["혼자", "친구/연인", "가족과 함께", "단체 모임", "아직 정해지지 않음"],
    q6: ["입장료 (무료 여부)", "콘텐츠/공연 구성", "위치 및 접근성", "음식/편의시설", "포토존/SNS 공유 포인트"],
    q7: ["예", "아니오"], // 최근 1년 내 부산 지역 축제에 참여한 경험이 있으신가요?
    q8: null  // 다시 가고싶은 부산 지역 축제가 있다면 알려주세요.
  };

  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const region = searchParams.get("region");
    if (region) setSelectedRegion(region);
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("설문 결과:", formData);
    alert("설문이 제출되었습니다. 감사합니다!");
    navigate("/recommend");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "2.5rem",
        width: "90vw",
        maxWidth: "640px",
        margin: "4rem auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f8f5ff",
        borderRadius: "16px",
        boxShadow: "0 0 16px rgba(0,0,0,0.1)",
      }}
    >
      {selectedRegion && (
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            border: "2px solid #000",
            borderRadius: "8px",
            backgroundColor: "#fff",
            textAlign: "center",
            color: "#000",
            fontWeight: "bold",
            fontSize: "1.3rem",
          }}
        >
          선택한 지역: {selectedRegion}
        </div>
      )}

      <div style={{ marginBottom: "1.5rem", minHeight: "200px" }}>
        <p style={{ fontWeight: "700", fontSize: "1.2rem", marginBottom: "0.75rem", color: "#333" }}>
          {(() => {
            switch (questions[currentQuestionIndex]) {
              case "q1":
                return "무료축제와 유료 축제 중 어느 쪽을 선호하시나요?";
              case "q2":
                return "어떤 유형의 축제에 가장 관심이 있으신가요?";
              case "q3":
                return "어떤 규모의 축제를 선호하시나요?";
              case "q4":
                return "축제를 즐기기 좋은 시간대는 언제인가요?";
              case "q5":
                return "누구와 함께 축제를 참여하고 싶으신가요?";
              case "q6":
                return "축제를 선택할 때 가장 중요하게 생각하는 요소는 무엇인가요?";
              case "q7":
                return "최근 1년 내 부산 지역 축제에 참여한 경험이 있으신가요?";
              case "q8":
                return "다시 가고싶은 부산 지역 축제가 있다면 알려주세요.";
              default:
                return "";
            }
          })()}
        </p>
        <div style={{ textAlign: "right", fontSize: "0.9rem", color: "#555", marginTop: "-12px", marginBottom: "1rem" }}>
          {currentQuestionIndex + 1} / {questions.length}
        </div>
        <div>
          {optionsMap[questions[currentQuestionIndex]] ? (
            optionsMap[questions[currentQuestionIndex]].map((opt, j) => (
              <label
                key={j}
                style={{
                  display: "block",
                  marginBottom: "10px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  padding: "0.4rem 0.6rem",
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                }}
              >
                <input
                  type="radio"
                  name={questions[currentQuestionIndex]}
                  value={opt}
                  required
                  checked={formData[questions[currentQuestionIndex]] === opt}
                  onChange={handleChange}
                  style={{ marginRight: "6px" }}
                />
                {opt}
              </label>
            ))
          ) : (
            <textarea
              name={questions[currentQuestionIndex]}
              value={formData[questions[currentQuestionIndex]]}
              onChange={handleChange}
              required
              placeholder="답변을 입력해주세요"
              style={{
                width: "100%",
                minHeight: "100px",
                fontSize: "1rem",
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                resize: "vertical",
              }}
            />
          )}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          type="button"
          onClick={prevQuestion}
          disabled={currentQuestionIndex === 0}
          style={{
            backgroundColor: currentQuestionIndex === 0 ? "#ccc" : "#4B0082",
            color: "white",
            padding: "0.6rem 1.2rem",
            borderRadius: "999px",
            border: "none",
            cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          이전
        </button>

        {currentQuestionIndex < questions.length - 1 ? (
          <button
            type="button"
            onClick={nextQuestion}
            disabled={!formData[questions[currentQuestionIndex]]}
            style={{
              backgroundColor: !formData[questions[currentQuestionIndex]] ? "#ccc" : "#4B0082",
              color: "white",
              padding: "0.6rem 1.2rem",
              borderRadius: "999px",
              border: "none",
              cursor: !formData[questions[currentQuestionIndex]] ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            다음
          </button>
        ) : (
          <button
            type="submit"
            disabled={!formData[questions[currentQuestionIndex]]}
            style={{
              backgroundColor: !formData[questions[currentQuestionIndex]] ? "#ccc" : "#4B0082",
              color: "white",
              padding: "0.6rem 1.2rem",
              borderRadius: "999px",
              border: "none",
              cursor: !formData[questions[currentQuestionIndex]] ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            제출
          </button>
        )}
      </div>
    </form>
  );
};

export default SurveyPage;