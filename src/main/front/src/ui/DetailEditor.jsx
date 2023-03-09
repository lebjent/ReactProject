import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function DetailEditor(props) {

  const { value } = props;
  
  const editorConfiguration = {
    toolbar: [], // 빈 배열을 할당해서 툴바를 없앰
  };

  return (
      <>
        <CKEditor
            editor={ ClassicEditor }
            data = {value}
            disabled={true}
            config={editorConfiguration}
        />
     </>
  )
}

export default DetailEditor