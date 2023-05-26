import { useState } from 'react';
import styled from 'styled-components';
import CustomModal from '../modal/CustomModal';
import axiosApi from '../axiosApi';

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  gap: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

const RadioInput = styled.input.attrs({ type: 'radio' })`
  margin-right: 4px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.text};
  font-size: 16pt;
`;

const Input = styled.input`
  width: 100px;
  height: 30px;
  padding: 4px;
  margin-top: 10px;
  font-size: 13pt;
`;

const Button = styled.button`
  width: 320px;
  height: 60px;
  margin-top: 20px;
  padding: 8px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  color:white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.hoverBackground};
  }
`;

function OrderForm({basicPrice,coinId,onFunction}) {
  const [orderType, setOrderType] = useState('BUY');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(Number(basicPrice));

  const handleRadioChange = (e) => {
    setOrderType(e.target.value);
  };

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value <= 0) {
      setQuantity(1);
    } else {
      setQuantity(value);
    }
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value <= 0) {
      setPrice(1);
    } else {
      setPrice(value);
    }
  };


  const buttonText = orderType === 'BUY' ? '매수하기' : '매도하기';
  const buttonColor = orderType === 'BUY' ? '#db1028' : '#2b8bc9';

    //모달 상태
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const closeModal = () => {
      setModalIsOpen(false);
    };
    const [msg,setMsg] = useState("");
  
    const handleOrderClick = (e) =>{
  
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("userInfo"));
      
      if(user === null){
        setMsg("로그인 한 이용자만 사용가능한 서비스 입니다.");
        setModalIsOpen(true);
        return false;
      }

      if(quantity <= 0){
        setMsg("주문할 수량을 입력해주세요.");
        setModalIsOpen(true);

        return false;
      }


      axiosApi.post('/orderCoin',{
        "order_id":user.id,
        "order_type":orderType,
        "quantity":quantity,
        "price":price,
        "coin_name":coinId
      })
      .then(response => {
        onFunction(coinId);
        setMsg(quantity+" GTC 주문이 완료 되었습니다.");
        setModalIsOpen(true);
      })
      .catch(error => console.log(error));

    }

  return (
    <Container>
      <RadioGroup>
        <RadioLabel>
          <RadioInput name="orderType" value="BUY" checked={orderType === 'BUY'} onChange={handleRadioChange} />
          매수
        </RadioLabel>
        <RadioLabel>
          <RadioInput name="orderType" value="SELL" checked={orderType === 'SELL'} onChange={handleRadioChange} />
          매도
        </RadioLabel>
      </RadioGroup>
        <InputWrapper>
          <InputLabel>수량:</InputLabel>
          <Input type="number" value={quantity} onChange={handleQuantityChange} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>가격:</InputLabel>
          <Input type="number" value={price} onChange={handlePriceChange} />
        </InputWrapper>
        <Button type="button" onClick={handleOrderClick} style={{ backgroundColor: buttonColor }}>{buttonText}</Button>
        {/* 모달 영역 */}
        <CustomModal isOpen={modalIsOpen} onClose={closeModal} msg={msg} />
    </Container>
  );
}

export default OrderForm;