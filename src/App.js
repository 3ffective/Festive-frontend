import React from "react";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SurveyPage from "./pages/SurveyPage";
import RecommendPage from "./pages/RecommendPage";
import SearchResultsPage from "./pages/SearchResultsPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </Router> 
  );
}


export default App;
