import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomModal from '../modal/CustomModal';
import axiosApi from '../axiosApi';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../LoginContext';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 50px;
  width: 400px;
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: -1px;
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const EmailInput = styled.input`
  display: block;
  width: 70%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const EmailInput2 = styled.span`
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
`;

const Error = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

const IdSaveLabel = styled.label`
  font-size: 9pt;
`

const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginForm = () => {

  const [id,setId] = useState("");
  const [password,setPassword] = useState("");
  const [errorMsg,setErrorMsg] = useState("");
  const [idChkYN,setIdChkYN] = useState(false);  

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("saveId")){
      setId(localStorage.getItem("saveId"));
      setIdChkYN(true);
    }
  }, []);   

  /* 모달 관련 state */
  //모달 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [msg,setMsg] = useState("");

  const { handleLogin,handleGetUserInfo } = useContext(LoginContext);

  const idSave = (e) => {
    setIdChkYN(e.target.checked);
  }

  const handleClickLogin = (e) =>{
    
    e.preventDefault();

    if(id === ''){
      setMsg("아이디를 입력해주세요.");
      setModalIsOpen(true);
      return false;
    }

    if(password === ''){
      setMsg("비밀번호를 입력해주세요.");
      setModalIsOpen(true);
      return false;

    }

    if(idChkYN === true){
      localStorage.setItem("saveId",id);
    }else{
      localStorage.removeItem("saveId")
    }

    //axios를 사용하여 데이터 전송
    axiosApi
        .post('/memberLogin', {
          "id":id,
          "password":password
        })
        .then((response) => {
          console.log('로그인 성공', response);
          const token = response.headers.authorization;
          // 토큰을 로컬 스토리지에 저장
          handleLogin(token);
          handleGetUserInfo(id);
          navigate('/');
        })
        .catch((error) => {
          console.log('로그인에 실패하였습니다.', error);
          setErrorMsg("아이디와 비밀번호를 확인해주세요.");
        });


  }

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Container>
          <EmailInput type="text" value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="Username" />
          <EmailInput2>@devcoin.com</EmailInput2>
      </Container>
      <Container>
          <Input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
      </Container>
      {errorMsg && <Error>{errorMsg}</Error>}
      <Container>
        <IdSaveLabel htmlFor="save">아이디저장</IdSaveLabel>
        <input type="checkbox" id='save' onChange={idSave} checked={idChkYN} />
      </Container>
      <LoginButton onClick={handleClickLogin}>Login</LoginButton>
      
      {/* 모달 영역 */}
      <CustomModal isOpen={modalIsOpen} onClose={closeModal} msg={msg} />

    </LoginContainer>
  );
};

export default LoginForm;