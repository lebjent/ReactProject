import React from "react";
import styled from "styled-components";
import Modal from 'react-modal';
import BasicButton from "../ui/BasicButton";
import '../css/memoInputModal.css'

const MemoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: auto;
  margin-bottom: 16px;
  background-color: #00280c;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 90%;
  height: 100%;
`;

const MemoInputLabel = styled.label`
  font-size: 16pt;
  color: white;
  font-weight: 700;
  margin-bottom: 8px;
`;

const MemoInputField = styled.textarea`
  height: 120px;
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 8px;
  border: none;
  background-color: #f1f8e9;
  margin-bottom: 16px;
  resize: none;

  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const MemoFooter = styled.div`
  display: flex;
  justify-content: right;
`;

const MemoInputTitle = styled.input`
  height: 32px;
  padding: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  border-radius: 8px;
  border: none;
  background-color: #f1f8e9;
  margin-bottom: 8px;

  &:focus {
    outline: none;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid gray;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #00280c;
  margin: 0;
`;

const CloseButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #a80c2e;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #00280c;
  }
`;

const MemoInputModal = (props) => {

  const {isOpen,onClose,onConfirm,handleChangeTitle,handleChangeContent} = props;

  return (
    <Modal
      isOpen={isOpen}//모달창 오픈 true/false
      onRequestClose={onClose}//모달창 닫기 true/false
      className="Modal"
      overlayClassName="Overlay"
    >
      <ModalHeader>
        <ModalTitle>Study Memo</ModalTitle>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalHeader>
      <MemoInputContainer>
        <MemoInputLabel>Title</MemoInputLabel>
        <MemoInputTitle onChange={handleChangeTitle}/>
        <MemoInputLabel>Content</MemoInputLabel>
        <MemoInputField onChange={handleChangeContent}/>
      </MemoInputContainer>
      <MemoFooter>
          <BasicButton bgColor={'primary'} value={'작성'} onClick={() => {onConfirm();}} />
          <BasicButton bgColor={'secondary'} value={'취소'} onClick={onClose} />
      </MemoFooter>
    </Modal>
  );
};

export default MemoInputModal;