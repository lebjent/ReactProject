import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import BasicTextInput from '../ui/BasicTextInput';

const CustomLabel = styled.label`
    display: inline-block;
    padding: 5px 10px;
    background-color: #e5e5e5;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    margin-top: 20px;
    color: #333;
`;

const ResultItemContainer = styled.div`
  width:20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #5C5C5C;
`;

const Amount = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
`;


function StockWave() {

    const [stockPrice,setStockPrice] = useState(0);
    const [stockAmount,setStockAmount] = useState(0);

    const handleChangeSP = (event)=>{setStockPrice(event.target.value); }
    const handleChangeSA = (event)=>{setStockAmount(event.target.value); }

    const [stockTotal,setStockTotal] = useState('0원');

    /* Wave */

    const [wavePrice,setWavePrice] = useState(0);
    const [waveAmount,setWaveAmount] = useState(0);

    const handleChangeWP = (event)=>{setWavePrice(event.target.value);}
    const handleChangeWA = (event)=>{setWaveAmount(event.target.value);}

    const [waveTotal,setWaveTotal] = useState('0원');



    useEffect(() => {
      const stockSumTotal = () => {
        let total = stockPrice * stockAmount;
        setStockTotal(comma(total) + "원");
      };

      stockSumTotal();

    }, [stockPrice, stockAmount]);
    
    useEffect(() => {

        //기존주식 금액
        const waveSumTotal = () =>{
          let total = wavePrice*waveAmount;
          setWaveTotal(comma(total)+'원');
        }

        waveSumTotal();

    }, [waveAmount,wavePrice]);

    //comma찍어주는 함수
    const comma = (str) =>{
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    }


    const [finalTotal,setFinalTotal] = useState('0원');
    const [finalAmount,setFinalAmount] = useState('0주');
    const [averagePrice,setAveragePrice] = useState(0);

    useEffect(() => {
      const sumStock = () => {
        let stock = (wavePrice * waveAmount) + (stockPrice * stockAmount);
        setFinalTotal(comma(stock) + '원');

        let amount = parseInt(waveAmount) + parseInt(stockAmount);
        setFinalAmount(amount + '주');
        
        const averagePrice = (stock/amount).toFixed(1);
        setAveragePrice(comma(averagePrice) + '원');
      }

      sumStock();
    }, [stockPrice, stockAmount, wavePrice, waveAmount]);


  return (
    <div>
        <h2>주식 물타기 계산기</h2>
        <CustomLabel>기존 주식 구입 가격</CustomLabel>
        <br/>
        <BasicTextInput type={'number'} width={150} onChange={handleChangeSP} />원
        <br/>
        <CustomLabel>기존 주식 구입 수</CustomLabel>
        <br/>
        <BasicTextInput type={'number'} width={50} onChange={handleChangeSA} />주
        <br/>
        <CustomLabel>구매시 총 가격</CustomLabel>
        <span>{stockTotal}</span>
        <br/>
        <br/>
        <CustomLabel>물타기 주식가격</CustomLabel>
        <br/>
        <BasicTextInput type={'number'} width={150} onChange={handleChangeWP} />원
        <br/>
        <CustomLabel>물타기 주식구입 수</CustomLabel>
        <br/>
        <BasicTextInput type={'number'} width={50} onChange={handleChangeWA} />주
        <br/>
        <CustomLabel>물타기 주식 총 가격</CustomLabel>
        <span>{waveTotal}</span>
        <ResultItemContainer>
            <Label>최종 평단가</Label>
            <Amount>{averagePrice}</Amount>
            <Label>최종 주식구입 금액</Label>
            <Amount>{finalTotal}</Amount>
            <Label>최종 주식수</Label>
            <Amount>{finalAmount}</Amount>
        </ResultItemContainer>
    </div>
  )
}

export default StockWave