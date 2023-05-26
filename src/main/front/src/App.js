import React from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
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
import DevelopPage from "./menu/Development";
import MemberJoin from "./menu/MemberJoin";
import LoginForm from "./menu/LoginForm";
import { LoginProvider } from "./LoginContext";


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
      <LoginProvider>
        <AppWrapper>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projectInfo" element={<ProjectInfo />} />
              <Route path="/board/*" element={<Board />} />
              <Route path="/studyList" element={<StudyList />} />
              <Route path="/question" element={<Question />} />
              <Route path="/developPage/*" element={<DevelopPage />} />
              <Route path="/MemberJoin" element={<MemberJoin />} />
              <Route path="/LoginPage" element={<LoginForm />} />
            </Routes>
          </Content>
          <Footer />
        </AppWrapper>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;




