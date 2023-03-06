import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import "../css/common.css";

const Main = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 50px;
  color: #4e5e47;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 3px #8c8377 solid;
  border-collapse: collapse;
  background-color: #002227;
  color: white;
  padding: 20px;
  margin-bottom: 50px;
`;

function BoardDetail() {

    const [data, setData] = useState([]);
    const { bno } = useParams();

    useEffect(() => {
        axios.get('/react/getBoardDetail/' + bno)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, [bno]);
  
    return (
        <Main>
            <Title>게시글 상세보기</Title>
            <Content>
                <p>{data.bno}</p>
                <p>{data.title}</p>
                <p>{data.writer}</p>
                <p>{data.view_cnt}</p>
                <p>{data.like_cnt}</p>
                <p>{data.content}</p>
                <p>{data.regdate}</p>
            </Content>
        </Main>
    )
}

export default BoardDetail;