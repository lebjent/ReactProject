import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser'
import "../css/common.css";
import "../css/boardDetail.css";


function BoardDetail() {

    const [data, setData] = useState([]);
    const { bno } = useParams();

    useEffect(() => {
        axios.get('/react/getBoardDetail/' + bno)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, [bno]);
  
    return (
      <div className="board-detail">
        <h2 className="board-detail-title">게시판 상세보기</h2>
        <div className='board-detail-box1'>
          <label className='board-detail-label'>게시글 제목</label>
          <div className='board-detail-input'>{data.title}</div>
        </div>
        <div className='board-detail-box1'>
          <label className='board-detail-label'>게시글 내용</label>
          <div className='board-detail-content'>{parse(String(data.content))}</div>
        </div>
      </div>
    )
}

export default BoardDetail;