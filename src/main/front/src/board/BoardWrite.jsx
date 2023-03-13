import React, { useState } from 'react';
import * as common from '../js/common/common';
import '../css/boardWrite.css';
import BasicTextInput from '../ui/BasicTextInput';
import CustomModal from '../modal/CustomModal';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TextEditor from '../ui/TextEditor';

function BoardWrite() {
  //게시글 제목
  const [title, setTitle] = useState('');
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  //게시글 내용
  const [content, setContent] = useState('');
  const handleChangeContent = (content) => {
    setContent(content);
  };

  //게시글 작성자
  const [writer, setWriter] = useState('');
  const handleChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  //오늘 날짜 yyyy-MM-dd형식
  const date = common.todayConvertDate('d',0);
  const handleChangeDate = () => {};

  //모달 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [msg,setMsg] = useState("");
  
  const navigate = useNavigate();

  // 게시글 작성시 유효성 검사후 Axios로 등록
  const boardWriteSubmit = () => {

    if (writer === '') {
      setMsg("작성자를 입력해주세요.");
      setModalIsOpen(true);
      return false;
    }

    if (title === '') {
      setMsg("게시글 제목을 입력해주세요.");
      setModalIsOpen(true);
      return false;
    }

    if (content === '') {
      setMsg("게시글 내용을 입력해주세요.");
      setModalIsOpen(true);
      return false;
    }

    //axios를 사용하여 데이터 전송
    axios
    .post('/react/writeBoard', {
      writer,
      title,
      content
    })
    .then((res) => {
      console.log('게시글 등록 성공', res);
      //게시글 리스트 페이지로 이동
      navigate('/board');
    })
    .catch((err) => {
      console.error('게시글 등록 실패', err);
      setMsg('게시글 등록에 실패했습니다.');
      setModalIsOpen(true);
    });

  };


  return (
    <div className="board-write">
      <div className="board-write-header">
        <h2 className='colorOcean'>React게시글 작성</h2>
      </div>
      <div className="board-write-body">
        <div className="board-write-row">
          <div className="board-write-label">작성자</div>
          <BasicTextInput
            className="board-write-input"
            type="text"
            defaultValue={writer}
            onChange={handleChangeWriter}
          />
          <div className="board-write-label">작성일</div>
          <BasicTextInput
            className="board-write-input"
            type="text"
            defaultValue={date}
            onChange={handleChangeDate}
          />
        </div>
        <div className="board-write-row">
          <div className="board-write-label">제목</div>
          <BasicTextInput
            className="board-write-input"
            type="text"
            align="left"
            defaultValue={title}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="board-write-row">
          <div className="board-write-label">내용</div>
          <div className="board-write-input">
            <TextEditor handleChangeContent={handleChangeContent} />
          </div>
        </div>
      </div>
      <div className="board-write-footer">
        <button className="board-write-submit" onClick={boardWriteSubmit}>등록</button>
      </div>

      {/* 모달 영역 */}
      <CustomModal isOpen={modalIsOpen} onClose={closeModal} msg={msg} />
    </div>
  );
}

export default BoardWrite;