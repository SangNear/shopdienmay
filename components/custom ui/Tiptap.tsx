"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import { useCallback } from "react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  BoldIcon,
  BookImage,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

interface TiptapProps {
  value: string;
  onChange: (content: string) => void;
}

const Tiptap = ({ value, onChange }: TiptapProps) => {
  const limit = 10000;
  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit,
      }),
      Bold,
      Underline,
      Italic,
      Link,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image.configure({ inline: true }), // Enable image insertion
    ],
    content: value,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input bg-back ",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });
  const percentage = editor
    ? Math.round((100000 / limit) * editor.storage.characterCount.characters())
    : 0;

  const addImage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const src = reader.result as string;
          editor?.chain().focus().setImage({ src }).run(); // Insert the image into the editor
        };
        reader.readAsDataURL(file);
      }
    },
    [editor]
  );
  if (!editor) {
    return null;
  }

  return (
    <div className="rounded ">
      {/* Toolbar */}
      <div className="flex items-center space-x-2 mb-4 border border-gray-300 rounded-lg p-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleBold().run();
          }}
          className={`px-3 py-1 rounded text-xs ${
            editor?.isActive("bold")
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <BoldIcon />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-black"
          }
        >
          <UnderlineIcon />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor?.chain().focus().toggleItalic().run();
          }}
          className={`px-3 py-1 rounded text-sm ${
            editor?.isActive("italic")
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <ItalicIcon />
        </button>
        <div className="flex gap-2 justify-between items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().setTextAlign("left").run();
            }}
            className={
              editor.isActive({ textAlign: "left" })
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            }
          >
            <AlignLeft />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().setTextAlign("center").run();
            }}
            className={
              editor.isActive({ textAlign: "center" })
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            }
          >
            <AlignCenter />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().setTextAlign("right").run();
            }}
            className={
              editor.isActive({ textAlign: "right" })
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            }
          >
            <AlignRight />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              editor.chain().focus().setTextAlign("justify").run();
            }}
            className={
              editor.isActive({ textAlign: "justify" })
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-black"
            }
          >
            <AlignJustify />
          </button>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={addImage} // Handle image upload from file
          className="hidden" // Hide the input visually
          id="imageUpload"
        />
        <label
          htmlFor="imageUpload"
          className="px-3 py-1 rounded text-sm bg-gray-100 text-black cursor-pointer"
        >
          <BookImage />
        </label>
      </div>

      {/* Editor Content */}
      <div className="p-2 bg-white rounded-lg ">
        <EditorContent editor={editor} className="" />
        <div
          className={`flex flex-col  items-end character-count ${
            editor.storage.characterCount.characters() === limit
              ? "character-count--warning"
              : ""
          }`}
        >
          <svg height="20" width="20" viewBox="0 0 20 20">
            <circle r="10" cx="10" cy="10" fill="#e9ecef" />
            <circle
              r="5"
              cx="10"
              cy="10"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray={`calc(${percentage} * 31.4 / 10000) 31.4`}
              transform="rotate(-90) translate(-20)"
            />
            <circle r="6" cx="10" cy="10" fill="white" />
          </svg>
          {editor.storage.characterCount.characters()} / {limit} ký tự
          <br />
          {editor.storage.characterCount.words()} từ
        </div>
      </div>
    </div>
  );
};

export default Tiptap;
