import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function Editor() {

    const handleOnChange=(e, editor)=>{
        console.log(editor.getData());
    }
    return (
        <div>

                    <h2>Article</h2>

                    <CKEditor

                        editor={ ClassicEditor }
                        onChange={handleOnChange}
                       
                    />
            
        </div>
    )
}
