import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import "../css/common.css";

const Main = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Table = styled.table`
  margin: 0 auto;
  width: 80%;
  border: 3px #8c8377 solid;
  border-collapse: collapse;
  background-color: #002227;
  color: white;
`;

const Tr = styled.tr`
  border: 1px black solid;
  border-collapse: collapse;
  height: 50px;
`;

const Th = styled.th`
  border: 1px black solid;
  border-collapse: collapse;
  font-size: 11pt;
`;

const Td= styled.td`
  border: 1px black solid;
  border-collapse: collapse;
  background-color: #4e5e47;
  text-align: center;
  font-size: 11pt;
`;

const BoardWriteButton = styled.button`
  background-color: #005bb5;
  color: white;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  border: none;

  &:hover{
    border: 2px #80d6ff solid;
  }
`;

function BoardLIst() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/react/getBoardList')
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, []);
  

  return (
    <>
      <Main>
        <h2 className='colorGrey'>React게시판</h2>
        <Table>
          <thead>
          <Tr>
            <Th>NO.</Th>
            <Th>제목</Th>
            <Th>작성자</Th>
            <Th>조회수</Th>
            <Th>좋아요수</Th>
            <Th>작성일</Th>
          </Tr>
          </thead>
          <tbody>
          { 
            data && data.length > 0 ? (
              data && data.map((board,index)=>{
                  return <Tr key={index}>
                            <Td>{board.bno}</Td>
                            <Td>{board.title}</Td>
                            <Td>{board.writer}</Td>
                            <Td>{board.view_cnt}</Td>
                            <Td>{board.like_cnt}</Td>
                            <Td>{board.regdate}</Td>
                        </Tr>
              })
            )  : (
              <Tr>
                <Td colSpan={6} rowSpan={6}>데이터가 없습니다.</Td>
              </Tr>
            )
          }  
          </tbody>
        </Table>
        <Link>
        <div className='w90p tar mt30'>
          <BoardWriteButton>게시글 작성</BoardWriteButton>
        </div>  
        </Link>
      </Main>
    </>
  ) 
}

export default BoardLIst