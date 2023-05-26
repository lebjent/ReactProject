import React, { useContext } from "react";
import styled from 'styled-components';
import BasicButton from '../ui/BasicButton';
import mainlogo from '../image/icon/logo.png'
import { Link } from 'react-router-dom';
import { LoginContext } from "../LoginContext";

const HeaderTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
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

const MemberInfoDiv = styled.div`
    margin: 0 auto;
    margin-bottom : 30px;
    text-align: right;
`;

const SlachSpan = styled.span`
    color: #363634;
    margin-right: 15px;
    font-weight: bold;
`;


/* 로그인시 개인 정보 */
const InfoTitle = styled.span`
  font-weight: bold;
  color: #125666;
`

const LogoutButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  background-color: #990a11;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Header() {

  const { loginValid, handleLogout,userInfo } = useContext(LoginContext);

  return (
    <div>
    <HeaderTag>
        <div className="w30p">
          <Link to='/'>
          <img src={mainlogo} alt='logo' width='200'/>
          </Link>
        </div>
        <Nav>
          <NavLink className="nav" to='/'>Home</NavLink>
          <NavLink className="nav" to='/projectInfo'>프로젝트 소개</NavLink>
          <NavLink className="nav" to='/board'>리액트 게시판</NavLink>
          <NavLink className="nav" to='/studyList'>Study리스트</NavLink>
          <NavLink className="nav" to='/question'>자주묻는 Q & A</NavLink>
          <NavLink className="nav" to='/developPage'>개발중인 페이지</NavLink>
        </Nav>
      </HeaderTag>
      {!loginValid &&
      <MemberInfoDiv>
        <Link to='/LoginPage'>
          <BasicButton value={'LOGIN'} bgColor={'primary'}/>
        </Link>
        <SlachSpan>/</SlachSpan>
        <Link to='/MemberJoin'>
          <BasicButton value={'JOIN'} bgColor={'success'}/>
        </Link>
      </MemberInfoDiv>
      }
      {loginValid && (
        <MemberInfoDiv>
          <InfoTitle>나의 INFO</InfoTitle>
          <br/>
          <p>{userInfo.name} 님</p>
          <LogoutButton onClick={handleLogout}>LogOut</LogoutButton>
        </MemberInfoDiv>
      )}
    </div>
  );
}

export default Header;