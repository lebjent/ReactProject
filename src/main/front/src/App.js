import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import "./css/common.css";
import "./css/app.css";

import Header from "./frame/Header";
import Footer from "./frame/Footer";

import Home from "./menu/Home";
import ProjectInfo from "./menu/ProjectInfo";
import Board from "./menu/Board";
import Question from "./menu/Question";
import StudyList from "./menu/StudyList";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ProjectInfo" element={<ProjectInfo />} />
            <Route path="/Board" element={<Board />} />
            <Route path="/StudyList" element={<StudyList />} />
            <Route path="/Question" element={<Question />} />
          </Routes>
        </Content>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;




