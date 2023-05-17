import React, { useState } from "react";
import styled from "styled-components";
import BasicButton from '../ui/BasicButton';
import CustomModal from '../modal/CustomModal';
//import axios from "axios";
import axiosApi from "../axiosApi";


const MainDiv = styled.div`
  margin: auto;
  width: 80%;
`;

const Title = styled.h3`
  text-align: center;
`;

const SignUpFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #333;
`;

const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const EmailInput = styled.input`
  display: block;
  width: 40%;
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

const Select = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #333;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }

  &:active {
    background-color: #0062cc;
  }
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

const chkKor = /[!@#$%^&*(),.?":{}|<>0-9a-zA-Z]/g; //한글이외에 다른글씨가 들어갔을 경우
const idPattern = /^[a-zA-Z0-9]*$/; // 정규식 ID 패턴

function MemberJoin() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState(0);
  const [idDupChk, setIdDupChk] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordChk,setPasswordChk] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  //모달 상태
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [msg,setMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name ==='') {
      setMsg('이름을 입력 해주세요.');
      setModalIsOpen(true);
      return false;
    }

    if(id === ''){
      setMsg('아이디를 입력해주세요.');
      setModalIsOpen(true);
      setIdDupChk(false);
      return false;
    }

    if(!idDupChk){
      setMsg('아이디 중복체크를 해주세요.');
      setModalIsOpen(true);
      setIdDupChk(false);
      return false;
    }

    if(!passwordChk){
      setMsg('비밀번호를 확인해주세요.');
      setModalIsOpen(true);
      return false;
    }

    if(phoneNumber === ''){
      setMsg('휴대폰번호를 입력해주세요.');
      setModalIsOpen(true);
      return false;
    }

    if(gender === ''){
      setMsg('성별을 선택해주세요.');
      setModalIsOpen(true);
      return false;
    }

      //axios를 사용하여 데이터 전송
      axiosApi
        .post('/memberJoin', {
          "name":name,
          "id":id,
          "password":password,
          "phone":phoneNumber,
          "gender":gender
        })
        .then((response) => {
          console.log('회원가입 성공', response);
        })
        .catch((error) => {
          console.error('회원가입에 실패하였습니다.', error);
          setMsg('회원가입에 실패하였습니다.');
          setModalIsOpen(true);
        });

  };

  const handleIdDupChk = () =>{
    
    if(id ===''){
      setMsg('아이디를 입력해주세요.');
      setModalIsOpen(true);
      return false;
    }

    axiosApi.post('/idDupChk',{'id':id})
    .then(response => setData(response.data))
    .catch(error => console.log(error))

    if(data>0){
      setMsg('중복된 아이디가 있습니다.');
      setModalIsOpen(true);
      setIdDupChk(false);
      return false;
    }else{
      setMsg('사용 가능한 아이디 입니다.');
      setModalIsOpen(true);
      setIdDupChk(true);
      return true;
    }

  }

  /* 아이디 유효성 체크 */
  const handleChangeId = (e) => {
    const id = e.target.value;
    const errors = {};

    if (!idPattern.test(id)) {
      setId(id);
      errors.id = "아이디는 영문 또는 숫자 또는 영문+숫자 조합으로만 가능합니다.";
    } else if(id.length >13) {
      setId(id);
      errors.id = "아이디는 13자리 이내로 작성해주세요.";
    }else{
      setId(id);
      errors.id = "";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }
  };

  /* 이름 유효성 체크 */
  const handleChangeName = (e) => {
    const name = e.target.value;
    const errors = {};

    if (name.length < 2 || name.length > 4 || chkKor.test(name)) {
      setName(name);
      errors.name = "이름을 정상적으로 입력해주세요.";
    } else {
      setName(name);
      errors.name = "";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    const errors = {};

    if (password.length < 4 || password.length > 7) {
      setPassword(password);
      errors.password = "비밀번호를 4자이상 7자이하로 입력해주세요.";
    } else {
      setPassword(password);
      errors.password = "";
    }

    if(password === confirmPassword){
      setPasswordChk(true);
    }else{
      setPasswordChk(false);
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }
  };

  const handleChangeConfirmPassword = (e) =>{
    
    const confirmPW = e.target.value;
    const errors = {};

    setConfirmPassword(confirmPW);

    if(confirmPW === password){
      setPasswordChk(true);
      errors.confirmPassword = "";
    }else{
      setPasswordChk(false);
      errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }

  }

  
  const handleChangePhone = (e)=>{
    const phoneNumber = e.target.value.replace(/[^0-9]/g,"");
    setPhoneNumber(phoneNumber);
    
    if(phoneNumber.length < 11 || phoneNumber.length > 11){
      errors.phoneNumber = "휴대전화번호를 정상적으로 입력해주세요.";
    }else{
      errors.phoneNumber = "";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }

  }


  return (
    <MainDiv>
      <Title>React Practice 회원가입</Title>
      <SignUpFormContainer onSubmit={handleSubmit}>
        <FormField>
          <Label>이름</Label>
          <Input type="text" value={name} onChange={handleChangeName} />
          {errors.name && <Error>{errors.name}</Error>}
        </FormField>
        <FormField>
          <Label>아이디</Label>
          <EmailContainer>
            <EmailInput type="text" value={id} onChange={handleChangeId} />
            <EmailInput2>@devcoin.com</EmailInput2>
            <BasicButton value={'중복체크'} bgColor={'primary'} width={'120'} onClick={handleIdDupChk} />
          </EmailContainer>
          {errors.id && <Error>{errors.id}</Error>}
        </FormField>
        <FormField>
          <Label>비밀번호</Label>
          <Input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          {errors.password && <Error>{errors.password}</Error>}
        </FormField>
        <FormField>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
          {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
        </FormField>
        <FormField>
          <Label>휴대전화번호(-생략)</Label>
          <Input
            type="text"
            value={phoneNumber}
            onChange={handleChangePhone}
          />
          {errors.phoneNumber && <Error>{errors.phoneNumber}</Error>}
        </FormField>
        <FormField>
          <Label>성별</Label>
          <Select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">성별을 선택해주세요</option>
            <option value="M">남성</option>
            <option value="F">여성</option>
          </Select>
          {errors.gender && <Error>{errors.gender}</Error>}
        </FormField>
        <Button type="submit">회원가입</Button>
      </SignUpFormContainer>

      {/* 모달 영역 */}
      <CustomModal isOpen={modalIsOpen} onClose={closeModal} msg={msg} />

    </MainDiv>
  );
}

export default MemberJoin;
