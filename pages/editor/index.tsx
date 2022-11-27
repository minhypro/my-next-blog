import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Layout from '../../components/Layout';

type Props = {};

export default function NewBlog() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef) {
      const currentRef : any  = editorRef.current
      console.log(currentRef.getContent());
    }
  };
  return (
    <Layout>
      <Editor
        apiKey='sk79og17r15y1e6epja3stxtibnci5ool8xmtee7rmpqf268'
        onInit={(evt: any, editor: any) => editorRef.current = editor}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </Layout>
  );
}