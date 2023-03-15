import React from "react";
import styled from "styled-components";
import '../css/common.css'

const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff750;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  color: black;
`;

const MemoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const MemoTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

const MemoDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

const MemoContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #666;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #a80c2e;
  }
`;

const Memo = ({ title, date, content }) => {
  return (
    <MemoContainer>
      <div className="tar">
      <CloseButton>X</CloseButton>
      </div>
      <MemoHeader>
        <MemoTitle>{title}</MemoTitle>
        <MemoDate>{date}</MemoDate>
      </MemoHeader>
      <MemoContent>{content}</MemoContent>
    </MemoContainer>
  );
};

export default Memo;