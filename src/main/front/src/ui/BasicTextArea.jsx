import React from 'react'
import styled from 'styled-components'

const BasicTextAreaTag = styled.textarea`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100px')};
  padding: 10px;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
  outline: none;
  font-size: 11pt;
  color: #333;
  resize: none;
  &:focus {
    border-color: #5d5dff;
  }
`;

function BasicTextArea(props) {

    const { width, height, type, align, value, onChange } = props;

  return <BasicTextAreaTag type={type} height={height} align={align} onChange={onChange} width={width} value={value} />
}

export default BasicTextArea