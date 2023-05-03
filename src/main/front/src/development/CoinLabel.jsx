import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  font-size: 1.2rem;
  color: #333;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const CoinName = styled.span`
  font-weight: bold;
  font-size: 13pt;
  margin-bottom: 10px;
`;

const CoinPrice = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ positive }) => (positive === "UP" ? "#e50a29" : positive === "DOWN" ? "#1f96d9" : "#7b7672")};
`;

const CoinPercentChange = styled.div`
  font-size: 0.9rem;
  color: ${({ positive }) => (positive === "UP" ? "#e50a29" : positive === "DOWN" ? "#1f96d9" : "#7b7672")};
`;

function CoinLabel({ name,unit, currentPrice, yesterdayPrice }) {
  
  //전일종가기준 퍼센트를 알려주는 변수
  const percentChange = Math.round(((currentPrice - yesterdayPrice) / yesterdayPrice) * 10000) / 100;
  //올랐는지 떨어졌는지를 확인하는 state
  const [positive,setPositive] = useState('SAME');

  useEffect(() => {
    if (currentPrice > yesterdayPrice) {
      setPositive('UP');
    } else if (currentPrice < yesterdayPrice) {
      setPositive('DOWN');
    } else {
      setPositive('SAME');
    }
  }, [currentPrice, yesterdayPrice]);

  return (
    <CoinContainer>
      <CoinName>{name}</CoinName>
      <CoinPrice positive={positive}>{currentPrice} {unit}</CoinPrice>
      <CoinPercentChange positive={positive}>
        {positive === "UP" ? "▲" : positive === "DOWN" ? "▼" : "-"}
        {percentChange}% ({currentPrice - yesterdayPrice} {unit})
      </CoinPercentChange>
    </CoinContainer>
  );
}

export default CoinLabel;