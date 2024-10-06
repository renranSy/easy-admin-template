import './index.less'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBlockquote,
  IconBold,
  IconClearFormatting,
  IconCode,
  IconFileCode,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconItalic,
  IconList,
  IconListNumbers,
  IconPilcrow,
  IconSeparatorHorizontal,
  IconStrikethrough,
  IconTextColor
} from '@tabler/icons-react'
import ColorPicker from '@/components/ColorPicker'

const MenuBar = () => {
  const { editor } = useCurrentEditor()
  const [textColor, setTextColor] = useState('#000000')
  const [openColorPicker, setOpenColorPicker] = useState(false)

  const showColorPicker = () => {
    setOpenColorPicker(true)
  }

  const hideColorPicker = () => {
    setOpenColorPicker(false)
  }

  if (!editor) {
    return null
  }

  const onSelectColor = (color: string) => {
    setTextColor(color)
    editor.chain().focus().setColor(color).run()

    setTimeout(() => {
      hideColorPicker()
    }, 100)
  }

  return (
    <div className="control-group">
      <div className="button-group flex flex-wrap gap-[0.4rem]">
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}>
          <IconPilcrow size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
          <IconH1 size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
          <IconH2 size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
          <IconH3 size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>
          <IconH4 size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
          <IconH5 size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
          <IconH6 size={24} color="#818ea3" />
        </button>
        <div className="b-0 b-e-2 b-solid b-[#e2e8f0]"></div>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}>
          <IconBold size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}>
          <IconItalic size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}>
          <IconStrikethrough size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}>
          <IconCode size={24} color="#818ea3" />
        </button>
        <div className="b-0 b-e-2 b-solid b-[#e2e8f0]"></div>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}>
          <IconList size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}>
          <IconListNumbers size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}>
          <IconFileCode size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}>
          <IconBlockquote size={24} color="#818ea3" />
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <IconSeparatorHorizontal size={24} color="#818ea3" />
        </button>
        <ColorPicker value={textColor} onChange={onSelectColor}>
          <button
            onClick={showColorPicker}
            className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}>
            <IconTextColor size={24} color="#818ea3" />
          </button>
        </ColorPicker>
        <div className="b-0 b-e-2 b-solid b-[#e2e8f0]"></div>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}>
          <IconArrowBackUp size={24} color="#818ea3" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}>
          <IconArrowForwardUp size={24} color="#818ea3" />
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          <IconClearFormatting size={24} color="#818ea3" />
        </button>
      </div>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    }
  })
]

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`

const RichEditor = () => {
  return (
    <div className="p-3 bg-white">
      <div className="b-1 b-solid b-[#dfdfdf] rounded-md">
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
      </div>
    </div>
  )
}

export default RichEditor
