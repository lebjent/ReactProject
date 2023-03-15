import React, { useState } from 'react';
import styled from 'styled-components';

const QaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const Question = styled.button`
  width: 100%;
  background-color: #f6f6f6;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e5e5e5;
  }

  &:focus {
    outline: none;
  }
`;

const Answer = styled.div`
  width: 100%;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  margin-top: 15px;
  margin-left: 10px;
  padding: 3px;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
  transition: max-height 0.3s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
`;

const Qa = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <QaContainer>
      <Question onClick={toggleAnswer}>{question}</Question>
      <Answer isOpen={isOpen}>{answer}</Answer>
    </QaContainer>
  );
};

export default Qa