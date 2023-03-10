import React from 'react';
import styled from "styled-components";
import youtube from '../image/icon/youtube.png'
import instagram from '../image/icon/instagram.png'
import kakaotalk from '../image/icon/kakaotalk.png'
import reactmini from '../image/icon/react.png'
import "../css/footer.css";
import "../css/common.css";



const Liner = styled.div`
    width: 100%;
    height: 100px;
    background-color: #f0f6f8;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
`;

const FooterTag = styled.footer`
  width: 100%;
  height: 400px;
  margin-top: 30px;
  background-color:#505a89;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

function Footer(props) {
  return( 
    <>
      <Liner>
        <p className='fontColor'>해당 프로젝트는 단순하게 React와 Spring Boot를 이용하여 만들었습니다.</p>
        <p className='fontColor'>프로젝트의 소스위치는 https://github.com/lebjent/ReactProject 입니다.</p>
      </Liner>  
      <FooterTag>
        <div className='footerDiv1'>
          <img className='div1Img' src={reactmini} alt="react" width="80"height="80" />
          <span className='div1Font'>React 연습 프로젝트</span>
        </div>
        <div className='footerDiv2'>
          <div>
            <img className='mr10' src={instagram} alt="instagram" width="40"height="40" />
            <img className='mr10' src={youtube} alt="youtube" width="40"height="40" />
            <img src={kakaotalk} alt="kakaotalk" width="40"height="40" />
          </div>
          <p className='colorGrey'>Copyright 2023. JJP All pictures cannot be copied without permission.</p>
        </div>
      </FooterTag>  
    </>
  );
}


export default Footer