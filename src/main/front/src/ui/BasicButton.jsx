import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: ${(props) => {
    if (props.bgColor === 'success') return '#0f6c0d';
    else if (props.bgColor === 'primary') return '#006ba9';
    else if (props.bgColor === 'danger') return '#b20010';
    else if (props.bgColor === 'secondary') return '#5e6967';
    else return '#0f6c0d';
    
  }};
  font-size: 10pt;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color:white;
  width: ${(props) => (props.width ? `${props.width}px` : '100px')};
  height: 50px;
  margin-right:15px;

  &:hover{
    border:${(props) => {
        if (props.bgColor === 'success') return '#0f6c0d 2px solid';
        else if (props.bgColor === 'primary') return '#006ba9 2px solid';
        else if (props.bgColor === 'danger') return '#b20010 2px solid';
        else if (props.bgColor === 'secondary') return '##5e6967 2px solid';
        else return '#0f6c0d 2px solid';
}   };
    background-color: #fffb75;
    color:black;
  }

`;

function BasicButton(props) {

  const {width,bgColor,value,onClick} = props;  

  return <CustomButton type='button' width={width} onClick={onClick} bgColor={bgColor}>{value}</CustomButton>;
}

export default BasicButton;