"use client";

import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./tiny.scss";
import { Wrapper } from "@/reutilisables";

export default function App() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const onEditorInputChange = (newValue: string, editor: any) => {
    setValue(newValue);
    setText(editor.getContent({ format: "text" }));
  };
  console.log(value);
  return (
    <Wrapper>
      <Editor
        onEditorChange={(newValue, editor) =>
          onEditorInputChange(newValue, editor)
        }
        onInit={(evt, editor) => setText(editor.getContent({ format: "text" }))}
        value={value}
        apiKey="1k1zo8aiaf5p4lkv3ltwaxzbjblcg1qfoxlspdhijocbvsuc"
        init={{
          plugins:
            "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request: any, respondWith: any) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        initialValue="Welcome to TinyMCE!"
      />
      {/* <div
        className="tiny-content"
        dangerouslySetInnerHTML={{ __html: value }}
      /> */}
      <div className="mockup-code rounded-md">
        <pre data-prefix="$">
          <code>{value}</code>
        </pre>
      </div>
    </Wrapper>
  );
}
