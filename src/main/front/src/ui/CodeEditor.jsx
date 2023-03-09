import React, { useState } from "react";
import styled from 'styled-components';
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

//초기 예제 소스
let value = "import React from 'react';\n";
value += "import ReactDOM from 'react-dom/client';\n";
value += "\n";
value += "\n";
value += "//리액트 예시 코드입니다.\n";
value += "const root = ReactDOM.createRoot(document.getElementById('root'));\n";
value += "root.render(\n";
value += "   <App />\n";
value += ")\n";
value += "\n";
value += "\n";
value += "function App(props){\n";
value += "   return(\n";
value += "      <p>Hello World</p>;\n";
value += "   )\n";
value += "}";


const ModeButton = styled.button`
    border: none;
    background-color: #ec7957;
    width: 100px;
    height: 40px;
    color: white;
    font-weight: bold;
    border-radius: 5px;

    &:hover{
      background-color: gray;
    }
    
`;


function onChange(newValue) {
    console.log("change", newValue);
}

function CodeEditor(props) {//https://github.com/securingsincity/react-ace 참조
 
  const [mode,setMode] = useState(false); 
  const [title,setTitle] = useState("편집하기");
  const isModeChk = () =>{
    if(mode){
      setMode(false);
      setTitle("편집하기");
    }else{
      setMode(true);
      setTitle("초기화");
    }
  }
  return (
    <>
      <AceEditor
      placeholder="연습할 리액트 코드를 입력하세요."
      mode='jsx'
      theme='twilight'
      fontSize={18}
      onChange={onChange}
      name='UNIQUE_ID_OF_DIV'
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={value}
      width='100%'
      readOnly={!mode}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        //tabSize: 2,
      }}
    />
    <div className="tar mt30">
      <ModeButton onClick={isModeChk}>{title}</ModeButton>
    </div>
   </>
  )
}

export default CodeEditor