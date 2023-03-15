import React from 'react'
import Qa from '../question/Qa'

function Question() {


  return (
    <div className="question-answer">
      <h2>자주 묻는 Q & A</h2>
      <Qa question="리액트는 어떻게 처음 접했나요?" answer="맨처음에는 리액트에 대해 교재를 통해 학습하고 구글링으로 스프링부트를 연동하여 공부를 하게 되었습니다." />
      <Qa question="다음 공부는 어떤걸 해볼생각이신가요?" answer="다음 공부는 아마도 리눅스 관련된 공부를 할거 같습니다. 프로젝트하면서 필요성을 느꼈거든요." />
      <Qa question="리액트 공부를 하는 비법이 있나요?" answer="ChatGPT는 정말 혁신적인 것 같습니다. 일자리를 빼앗길까봐 무섭긴 하지만 잘 사용하는 것도 하나의 능력이라고 생각합니다." />
    </div>
  )
}

export default Question