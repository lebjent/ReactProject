import React from 'react';
import styled from 'styled-components';
import reactlogo from '../image/home/React.jpg'
import "../css/common.css";

const FirstTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: center;
  border: 2px solid #111919;
  padding: 20px;
  border-radius: 15px;
`;

const FirstContent = styled.p`
    font-size: 11pt ;
    font-weight: bold;
    color: #354047;
`;

function FirstTitle() {
  return (
    <FirstTag>
        <div className='w60p'>
            <h2 className='colorOcean'>React란?</h2>
            <FirstContent>
                React는 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리입니다. 
                “컴포넌트”라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 돕습니다.
                React는 facebook에서 제공해주는 프론트엔드 라이브러리라고 볼 수 있습니다.
                싱글 페이지 애플리케이션이나 모바일 애플리케이션의 개발 시 토대로 사용될 수 있습니다.
                즉, 현재 많이 활용되고 있는, 웹/앱의 View를 개발할 수 있도록 하는 인기있는 라이브러리라고 볼 수 있습니다.
            </FirstContent>
        </div>
        <div className='w40p tac'>
            <img src={reactlogo} alt="react" className='w80p' />
        </div>
    </FirstTag>
  )
}

export default FirstTitle