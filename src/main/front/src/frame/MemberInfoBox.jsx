import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BasicButton from '../ui/BasicButton';

const MemberInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const JoinDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const LinkSpan = styled.span`
  color: gray;
  font-size: 10pt;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MemberInfoBox = () => {
  return (
    <MemberInfoDiv>
      <div>
        <Link to='/LoginPage'>
          <BasicButton value={'LOGIN'} bgColor={'success'} width={300}/>
        </Link>
      </div>
      <JoinDiv>
        <StyledLink to='/MemberJoin'>
          <LinkSpan>회원가입</LinkSpan>
        </StyledLink>  
      </JoinDiv>  
    </MemberInfoDiv>
  );
};

export default MemberInfoBox;