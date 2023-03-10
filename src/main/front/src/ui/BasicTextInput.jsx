import React from 'react';
import styled from 'styled-components';

const BasicTextInputTag = styled.input`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: 20px;
  padding: 10px;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  outline: none;
  font-size: 11pt;
  color: #333;
  text-align:${(props) => (props.align ? `${props.align}` : 'center')};
  &:focus {
    border-color: #5d5dff;
  }
`;

/*
    작 성 자 : 전 준 표
    작 성 일 : 2023-03-06
*/
function BasicTextInput(props) {
 
  const { width, type, align, defaultValue, readOnly, onChange } = props;
  
  return <BasicTextInputTag type={type} readOnly={readOnly}  align={align} onChange={onChange} width={width} defaultValue={defaultValue} />;
}

export default BasicTextInput;