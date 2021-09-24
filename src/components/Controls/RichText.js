import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function RichText(props) {

    const {name, Data, onChange}=props;


    return (
        
        <CKEditor

                editor={ ClassicEditor }
                onChange={onChange}
                Data={Data}
                       
        />
    )
}
