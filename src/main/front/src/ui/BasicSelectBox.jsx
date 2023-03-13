import React from 'react';
import styled from 'styled-components';

const BasicSelectBoxTag = styled.select`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: 40px;
  padding: 10px;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  outline: none;
  font-size: 11pt;
  color: #333;
  margin-right:10px;
  margin-left:10px;
  &:focus {
    border-color: #5d5dff;
  }
`;

/*
    작 성 자 : 전 준 표
    작 성 일 : 2023-03-13
*/
function BasicSelectBox(props) {
 
  const { width, options, defaultValue, onChange } = props;
  
  return (
    <BasicSelectBoxTag width={width} defaultValue={defaultValue} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </BasicSelectBoxTag>
  );
}

export default BasicSelectBox;