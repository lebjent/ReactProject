import React, { useEffect, useState } from 'react';
import { OrderBook } from '@lab49/react-order-book';
import "../css/orderBook.css";
import axios from 'axios';
import CoinLabel from './CoinLabel';
import styled from 'styled-components';
import OrderForm from './OrderForm';

const AlignDiv = styled.div`
   margin: 0 auto;
   margin-top: 50px;
   display: flex;
   flex-direction: row;
`

/* 초기값을 빈배열로 설정하면 오류가 나므로 초기값을 선언해준다 */
const initBook = { asks:[['1','1']],bids:[['1','1']] };

const Stock = () => {
  const [data, setData] = useState({});
  const [coinId] = useState('GTC');

  const [book, setBook] = useState(initBook);
  useEffect(() => {
    axios.get('/react/getCordInfo/' + coinId)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, [coinId]);

  const getCoinData = (coinId) =>{
    axios.get('/react/getCoinData/' + coinId)
    .then(response => {
      const data = response.data;
      console.log(data);
      const newAsks = data.SELLDATA.filter(item => item.order_type === 'SELL').map(item=> [item.price, item.quantity]);
      const newBids = data.BUYDATA.filter(item => item.order_type === 'BUY').map(item => [item.price, item.quantity]).sort((b, a) => a[0] - b[0]);
      setBook({ asks: newAsks, bids: newBids });
    })
    .catch(error => console.log(error));
  }

  //코인의 데이터를 가져오기
  useEffect(() => {
    getCoinData(coinId);
  }, [coinId]);

  return (
    <div>
      <h1>CoinMarket</h1>
      <CoinLabel name={data.coin_name} unit={data.coin_id} currentPrice={data.market_price} yesterdayPrice={data.close_price} />
      <AlignDiv>
        <OrderBook
          askColor={[255, 47, 47]}
          bidColor={[0, 255, 255]}
          book={book}
          fullOpacity={true}
          showSpread={false}
          interpolateColor={(color) => color}
          listLength={10}
          stylePrefix="MakeItNice"
          onClick={(value)=>{console.log(value)}}
        />
        {data.market_price && <OrderForm basicPrice={data.market_price} coinId={coinId} onFunction={getCoinData} />}
      </AlignDiv>
    </div>
  );
};

export default Stock;