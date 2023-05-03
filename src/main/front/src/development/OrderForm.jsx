import { useState } from 'react';
import styled from 'styled-components';

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

function OrderForm({basicPrice}) {
  const [side, setSide] = useState('BUY');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(Number(basicPrice));
 

  const handleRadioChange = (e) => {
    setSide(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { side, quantity, price });
  };

  const buttonText = side === 'BUY' ? '매수하기' : '매도하기';
  const buttonColor = side === 'BUY' ? '#db1028' : '#2b8bc9';

  return (
    <Container>
      <RadioGroup>
        <RadioLabel>
          <RadioInput name="side" value="BUY" checked={side === 'BUY'} onChange={handleRadioChange} />
          매수
        </RadioLabel>
        <RadioLabel>
          <RadioInput name="side" value="SELL" checked={side === 'SELL'} onChange={handleRadioChange} />
          매도
        </RadioLabel>
      </RadioGroup>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputLabel>수량:</InputLabel>
          <Input type="number" value={quantity} onChange={handleQuantityChange} />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>가격:</InputLabel>
          <Input type="number" value={price} onChange={handlePriceChange} />
        </InputWrapper>
        <Button type="submit" style={{ backgroundColor: buttonColor }}>{buttonText}</Button>
      </form>
    </Container>
  );
}

export default OrderForm;