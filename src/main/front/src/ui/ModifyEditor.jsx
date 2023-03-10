import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ModifyEditor(props) {

    const { handleChangeContent,value } = props;
  return (
      <>
        <CKEditor
            editor={ ClassicEditor }
            data={value}
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

export default ModifyEditor