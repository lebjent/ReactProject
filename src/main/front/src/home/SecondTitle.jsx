import React from 'react';
import styled from 'styled-components';
import CodeEditor from './CodeEditor';

const SecondTag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: center;
    margin-top: 30px;
    padding: 20px;
`;

const SecondContent = styled.p`
    font-size: 11pt ;
    font-weight: bold;
    color: #354047;
`;

function SecondTitle() {
  return (
    <SecondTag>
        <div className='w40p'>
          <h2 className='colorOcean'>리액트 예제소스</h2>
          <SecondContent>리액트의 가장 기본적인 예제소스 코드입니다.</SecondContent>
          <SecondContent>Class형태의 컴포넌트도 있지만 현재는 많이 사용하지 않는 방법입니다.</SecondContent>
          <SecondContent>가장 많이 사용되는 형태는 함수형 컴포넌트를 사용합니다.</SecondContent>
          <SecondContent>옆의 예제 소스코드를 보고 한번 따라해보세요.</SecondContent>
          <SecondContent>편집하기를 통해 연습도 가능합니다.</SecondContent>
        </div>
        <div className='w60p'>
          <CodeEditor/>
        </div>
    </SecondTag>
        
  )
}

export default SecondTitle