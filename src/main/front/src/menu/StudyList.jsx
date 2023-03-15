import React, { useState } from 'react'
import axios from 'axios';
import '../css/common.css'
import CustomModal from '../modal/CustomModal';
import Memo from '../sturdyList/Memo';
import MemoInputModal from '../sturdyList/MemoInputModal';
import BasicButton from '../ui/BasicButton'
import styled from 'styled-components';

const ChalkboardWrapper = styled.div`
  background-color: #00280c;
  color: #ffffff;
  font-family: 'Chalkboard SE', sans-serif;
  padding: 1.5rem;
  border: 5px solid #ffffff;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
`;

const MemoDiv = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
      width: 23%;
      height: 300px;
      margin-bottom: 30px;
      margin-left: 55px;
      margin-right: 55px;
    }
`;


function StudyList() {

  //모달창 관련
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {setIsOpen(false);}//모달창 닫기
  const listWriteModal = () =>{setIsOpen(true);}//리스트 작성버튼 클릭시

  /* 알림 모달창을 뛰울 state */
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {setModalIsOpen(false);};
  const [msg,setMsg] = useState("");

  //게시글 작성관련
  const [mtitle,setMTitle] = useState('');
  const [mcontent,setMContent]=useState('');

  const handleChangeTitle = (event) =>{setMTitle(event.target.value);}
  const handleChangeContent = (event) =>{setMContent(event.target.value);}

  const listWrite=()=>{

      if(mtitle === ''){
        setMsg('메모의 제목을 입력해주세요.');
        setModalIsOpen(true);
        return false;
      }

      if(mcontent === ''){
        setMsg('메모의 내용을 입력해주세요.');
        setModalIsOpen(true);
        return false;
      }
      console.log(mtitle);
      axios.post('/react/insertMemo', {
        mtitle,
        mcontent
      })
      .then(response => {
        setIsOpen(false);
      })
      .catch(error => console.log(error))

  }

  return (
    <div>
        <div>
          <ChalkboardWrapper>
            <h1>Welcome to the StudyBoard!</h1>
            <p>공부할 기술Stack을 기록해 보세요.</p>
            <MemoDiv>
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
              <Memo title={'제목'} date={'2022-05-05'} content={'내용이 없습니다.'} />
            </MemoDiv>
          </ChalkboardWrapper>
          <div className='tar mt30'>
            <BasicButton  bgColor={'success'} onClick={listWriteModal} value={'리스트 작성'} width={150} />
          </div>
        </div>
        {/* 모달 영역 */}
        <MemoInputModal 
                  isOpen={isOpen} 
                  onClose={onClose} 
                  onConfirm={listWrite}
                  handleChangeTitle={handleChangeTitle}
                  handleChangeContent={handleChangeContent}
        />
       <CustomModal isOpen={modalIsOpen} onClose={closeModal} msg={msg} />
    </div>    
  )
}

export default StudyList