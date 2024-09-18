import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import { EditorPropTypes } from "@tinymce/tinymce-react/lib/cjs/main/ts/components/EditorPropTypes";

export default function RTE({ name, control, label, defaultvalue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pb-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (

          <Editor
            apiKey="cvv9sr0o3kt16pe8ch793rniudlq8u6yq9zfzasdqv1bp44e"
            initailaValue={defaultvalue}
            init={{
              initailaValue: defaultvalue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
