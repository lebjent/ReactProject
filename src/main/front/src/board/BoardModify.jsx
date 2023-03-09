import React, { useEffect, useState } from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
/* import parse from 'html-react-parser' */
import "../css/common.css";
import "../css/boardDetail.css";
import BasicButton from '../ui/BasicButton';
import ConfirmModal from '../modal/ConfirmModal';
import ModifyEditor from '../ui/ModifyEditor';


function BoardModify() {
    const navigate = useNavigate();

    const [data, setData] = useState({});
    const { bno } = useParams();

    const [showModal, setShowModal] = useState(false);
    

    const deleteBoard = () => {
      axios
      .post('/react/deleteBoard', {
        bno,
      })
      .then((res) => {
        console.log('게시글 삭제 성공', res);
        //게시글 리스트 페이지로 이동
        navigate('/board');
      })
    } 

    //게시글 상세정보 불러오기
    useEffect(() => {
        axios.get('/react/getBoardDetail/' + bno)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, [bno]);
  
    return (
      <div className="board-detail">
        <h2 className="board-detail-title">게시판 수정하기</h2>
        <div className='mt100'>
          <div className='board-detail-box2'>
            <div className='w50p'>
              <label className='board-detail-label'>작성자</label>
              <div className='board-detail-input w80p tac'>{data.writer}</div>
            </div>
            <div className='w50p'>
              <label className='board-detail-label'>등록일</label>
              <div className='board-detail-input w85p tac'>{data.regdate}</div>
            </div>
          </div>
          <div className='board-detail-box2'>
            <div className='w50p'>
              <label className='board-detail-label'>조회수</label>
              <div className='board-detail-input w50p tac'>{data.view_cnt}</div>
            </div>
            <div className='w50p'>
              <label className='board-detail-label'>좋아요수</label>
              <div className='board-detail-input w50p tac'>{data.like_cnt}</div>
            </div>
          </div>
          <div className='board-detail-box1'>
            <label className='board-detail-label'>게시글 제목</label>
            <div className='board-detail-input'>{data.title}</div>
          </div>
          <div className='board-detail-box1'>
            <label className='board-detail-label'>게시글 내용</label>
            <ModifyEditor value={data.content} />
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
            deleteBoard();
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
      </div>
    )
}

export default BoardModify