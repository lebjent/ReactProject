import React, { useEffect, useState } from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
/* import parse from 'html-react-parser' */
import "../css/common.css";
import "../css/boardDetail.css";
import BasicButton from '../ui/BasicButton';
import ConfirmModal from '../modal/ConfirmModal';
import ModifyEditor from '../ui/ModifyEditor';
import BasicTextInput from '../ui/BasicTextInput';
import CustomModal from '../modal/CustomModal';


function BoardModify() {

    const navigate = useNavigate();//게시판을 수정후 컴포넌트를 이동할 객체

    const [data, setData] = useState({});//게시판의 DB데이터를 담아올 state
    const { bno } = useParams();//게시물 상세보기에서 받아온 bno

    /* 알림 모달창을 뛰울 state */
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const closeModal = () => {
      setModalIsOpen(false);
    };
    const [msg,setMsg] = useState("");

    
    //게시글 상세정보 불러오기
    useEffect(() => {
      axios.get('/react/getBoardDetail/' + bno)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
    }, [bno]);

    const [writer,setWriter] = useState('');
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    useEffect(() => {
      setWriter(data.writer || '');
      setTitle(data.title || '');
    }, [data]);

    const [showModal, setShowModal] = useState(false);//업데이트 모달창

    const handleChangeWriter = (event) => {
        setWriter(event.target.value);
    }

    const handleChangeTitle = (event) =>{
        setTitle(event.target.value);
    }

    const handleChangeContent = (content)=>{
        setContent(content);
    }

    const updateBoard = () => {

      if(writer === ''){
        setMsg('게시글 작성자를 입력해주세요.');
        setModalIsOpen(true);
        return false;
      }

      if(title === ''){
        setMsg('게시글 제목을 입력해주세요.');
        setModalIsOpen(true);
        return false;
      }

      if(content === '' || content ==='<p></p>'){
        setMsg('게시글 내용을 입력해주세요.');
        setModalIsOpen(true);
        return false;
      }

      axios
      .post('/react/updateBoard', {
        bno,
        writer,
        title,
        content,
      })
      .then((res) => {
        console.log('게시글 삭제 성공', res);
        //게시글 리스트 페이지로 이동
        navigate('/board');
      })
    } 

  
    return (
      <div className="board-detail">
        <h2 className="board-detail-title">게시판 수정하기</h2>
        <div className='mt100'>
          <div className='board-detail-box2'>
            <div className='w50p'>
              <label className='board-detail-label'>작성자</label>
              <br/>
              <BasicTextInput type={'text'} defaultValue={writer} onChange={handleChangeWriter} width={170}/>
            </div>
            <div className='w50p'>
              <label className='board-detail-label'>등록일</label>
              <br/>
              <BasicTextInput type={'text'} defaultValue={data.regdate} readOnly={true} width={170}/>
            </div>
          </div>
          <div className='board-detail-box2'>
            <div className='w50p'>
              <label className='board-detail-label'>조회수</label>
              <br/>
              <BasicTextInput type={'text'} defaultValue={data.view_cnt} readOnly={true}  width={170}/>
            </div>
            <div className='w50p'>
              <label className='board-detail-label'>좋아요수</label>
              <br/>
              <BasicTextInput type={'text'} defaultValue={data.like_cnt} readOnly={true}  width={170}/>
            </div>
          </div>
          <div className='board-detail-box1'>
            <label className='board-detail-label'>게시글 제목</label>
            <br/>
            <BasicTextInput type={'text'} defaultValue={title} onChange={handleChangeTitle}  width={200}/>
          </div>
          <div className='board-detail-box1'>
            <label className='board-detail-label'>게시글 내용</label>
            <ModifyEditor value={data.content} handleChangeContent={handleChangeContent} />
          </div>
        </div>
        <div className='button-group'>
          <BasicButton value={'수정'} onClick={() => setShowModal(true)} bgColor={'success'}/>
        </div>
        {showModal && (
        <ConfirmModal
          msg={'게시물을 수정 하시겠습니까?'}
          isOpen={showModal}
          onConfirm={() => {
            updateBoard();
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
      {/* 모달 영역 */}
      <CustomModal isOpen={modalIsOpen} onClose={closeModal} msg={msg} />
      </div>
    )
}

export default BoardModify