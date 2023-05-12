import React from 'react';
import {Link} from 'react-router-dom';
import "../css/projectInfo.css";
import BasicButton from '../ui/BasicButton';

function ProjectInfo() {
  return (
      <div className="project-intro">
        <h2>React 연습 프로젝트</h2>
        <p>
          지금 이 화면에 해당되는 컴포넌트는 Chat GPT의 도움을 받아 작성하였습니다.
        </p>
        <p>
          Chat GPT는 저의 공부 파트너 입니다. 해당 소스코드가 100% 정답은 아니지만 응용을 한다면 좀 더 제 스스로가 발전 할 수 있을것 같습니다. 
        </p>
        <p>
          다만, 너무 의존을 하면 안 될것 같습니다. 이유는 너무 편한것을 찾다보면 스스로가 발전하기 위해 노력하지 않기 떄문입니다.
        </p>
        <p>
          지금 이 리액트 프로젝트는 단순히 리액트와 스프링부트를 사용했을때 어떤식으로 이용해야할지 공부를 하기위한 목적입니다.
        </p>
        <Link to={'/board'}>
          <BasicButton bgColor={'primary'} width={'200'} value={'게시판 구경하기'} />
        </Link>
      </div>
  )
}

export default ProjectInfo