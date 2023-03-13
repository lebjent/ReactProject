import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import "../css/common.css";
import "../css/reactPage.css";


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

function BoardList() {

    const [data, setData] = useState([]);//게시판 리스트 실제 데이터를 담을 state
    const [offset, setOffset] = useState(0);  // 데이터 배열의 시작 인덱스
    const [perPage] = useState(10);  // 페이지당 보여줄 게시글 수
    const [pageCount, setPageCount] = useState(0);  // 전체 페이지 수

    useEffect(() => {
      axios.get('/react/getBoardList')
          .then(response => {
              setData(response.data);
              setPageCount(Math.ceil(response.data.length / perPage));  // 전체 페이지 수 계산
          })
          .catch(error => console.log(error))
    }, [perPage]);

    const handlePageClick = (e) => {
      const selectedPage = e.selected;  // 선택된 페이지
      setOffset(selectedPage * perPage);  // 데이터 배열의 시작 인덱스 계산
    };
    
    const postData = data.length === 0 ? (
      <Tr>
        <Td colSpan={6} rowSpan={6}>데이터가 없습니다.</Td>
      </Tr>
    ) : (
      data.slice(offset, offset + perPage).map((board, index) => {
        return (
            <Tr key={index}>
                <Td>{board.bno}</Td>
                <Td>
                    <Link to={`/board/boardDetail/${board.bno}`}>
                        <span className='link'>{board.title}</span>
                    </Link>
                </Td>
                <Td>{board.writer}</Td>
                <Td>{board.view_cnt}</Td>
                <Td>{board.like_cnt}</Td>
                <Td>{board.regdate}</Td>
            </Tr>
        )
      })
    );

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
            {postData}
          </tbody>
        </Table>
        <ReactPaginate
          previousLabel={'이전'}
          nextLabel={'다음'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
        <Link to='/board/boardWrite'>
          <div className='w90p tar mt30'>
            <BoardWriteButton>게시글 작성</BoardWriteButton>
          </div>  
        </Link>
      </Main>
    </>
  ) 
}

export default BoardList