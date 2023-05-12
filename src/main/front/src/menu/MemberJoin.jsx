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
  margin-right: 15px;
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
    const errors = {};
    if (!name) {
      errors.name = "이름을 입력해주세요.";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // 회원가입 로직 실행
    }
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

    console.log(data);

  }

  const handleChangeId = (e) => {
    const id = e.target.value;
    const errors = {};

    if (!idPattern.test(id)) {
      setId(id);
      errors.id = "에러가 발생되었습니다.";
    } else {
      setId(id);
      errors.id = "";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }
  };

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

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }
  };

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
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
        </FormField>
        <FormField>
          <Label>전화번호</Label>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
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
            <option value="male">남성</option>
            <option value="female">여성</option>
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
