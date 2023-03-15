import React from "react";
import styled from "styled-components";
import '../css/common.css'

//메모 작성 부모DIV태그
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

//메모 헤더
const MemoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

//메모 제목
const MemoTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

//메모 날짜일
const MemoDate = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;

//메모 내용
const MemoContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

//메모 x버튼
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

const Memo = ({ title, date, content,onClick }) => {
  return (
    <MemoContainer>
      <div className="tar">
      <CloseButton onClick={onClick}>X</CloseButton>
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