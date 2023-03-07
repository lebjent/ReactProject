import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function TextEditor(props) {

  const { handleChangeContent } = props;
  

  return (
      <>
        <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello React Practice!!</p>"
            onReady={ editor => {
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                handleChangeContent(data);
            } }

        />
     </>
  )
}

export default TextEditor