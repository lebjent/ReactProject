import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import queryString from "query-string";
import "../css/common.css";
import Pagenation from '../page/Pagenation';
import BasicSelectBox from '../ui/BasicSelectBox';
import BasicTextInput from '../ui/BasicTextInput';


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

    const [boardList, setBoardList] = useState([]);//게시판 리스트 실제 데이터를 담을 state
    const [pageMaker, setPageMaker] = useState({});//백엔드에서 페이징 처리한 정보
    const [currentPage, setCurrentPage] = useState(1);//현재 페이지

    const [searchType,setSearchType] = useState('ALL');
    const [keyword,setKeyword] = useState('');

    const searchTypeOpt = [   { value: 'ALL', label: '전체' },
                              { value: 'W', label: '작성자' },
                              { value: 'T', label: '제목' },
                              { value: 'C', label: '내용' }
    ]

    useEffect(() => {

      const query = queryString.stringify({
        page: currentPage,
        perPageNum: 10,
        searchType:searchType,
        keyword: keyword
      });

      axios.get(`/react/getBoardList?${query}`,{
        headers: {
          Accept: 'application/json'
        }
      })
      .then(response => {
        const { board, pageMaker } = response.data;
        setBoardList(board);
        setPageMaker(pageMaker);
      })
      .catch(error => console.log(error))

    }, [currentPage,keyword,searchType]);

    const handlePageChange = (page) => { setCurrentPage(page);};
    const handleSearchType = (event) =>{ setSearchType(event.target.value);setCurrentPage(1);}
    const handleKeyWord = (event) =>{setKeyword(event.target.value); setCurrentPage(1);}

    const postData = boardList.length === 0 ? (
      <Tr>
        <Td colSpan={6} rowSpan={6}>데이터가 없습니다.</Td>
      </Tr>
    ) : (
        boardList.map((board) => (
          <Tr key={board.bno}>
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
        ))
    );

  return (
    <>
      <Main>
        <h2 className='colorGrey'>React게시판</h2>
        <div className='tar w90p'>
          <div className='mb30'>
            <BasicSelectBox options={searchTypeOpt} width={100} defaultValue={searchType} onChange={handleSearchType} />
            <BasicTextInput type={'text'} width={300} defaultValue={keyword} onChange={handleKeyWord} />
          </div>
        </div>
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
        <Pagenation
          currentPage={currentPage}
          pageMaker={pageMaker}
          onPageChange={handlePageChange}
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