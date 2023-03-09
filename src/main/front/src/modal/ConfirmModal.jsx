import React from 'react';
import Modal from 'react-modal';
import BasicButton from '../ui/BasicButton';
import "../css/customModal.css";

function ConfirmModal(props){
  
  const { isOpen, onClose, onConfirm,msg } =props;

  return (
    <Modal
      isOpen={isOpen}//모달창 오픈 true/false
      onRequestClose={onClose}//모달창 닫기 true/false
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="ModalHeader">
        <h3 className="colorOcean">알림</h3>
        <button className="XButton" onClick={onClose}>
          X
        </button>
      </div>
      <div className="ModalContent">{msg}</div>
      <div className="ModalFooter">
        <BasicButton bgColor={'primary'} value={'확인'}  onClick={() => {
            onClose();
            onConfirm();
          }} />
        <BasicButton bgColor={'secondary'} value={'취소'} onClick={onClose} />
      </div>
    </Modal>
  );
};

export default ConfirmModal;