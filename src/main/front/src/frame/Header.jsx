import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const Nav = styled.nav`
  width: 70%;
`;

const NavLink = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  font-weight: bold;
  color: #32477b;
  &:hover{
    color: #ff8a44;
  }
`;

function Header() {
  return (
    <HeaderTag>
      <div className="w30p">
        <Link to='/'>
        <img src='/image/icon/logo.png' alt='logo' width='200'/>
        </Link>
      </div>
      <Nav>
        <NavLink className="nav" to='/'>Home</NavLink>
        <NavLink className="nav" to='/projectInfo'>프로젝트 소개</NavLink>
        <NavLink className="nav" to='/board'>리액트 게시판</NavLink>
        <NavLink className="nav" to='/studyList'>Study리스트</NavLink>
        <NavLink className="nav" to='/question'>Q & A</NavLink>
      </Nav>
    </HeaderTag>
  );
}

export default Header;