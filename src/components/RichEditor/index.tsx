import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconBlockquote,
  IconBold,
  IconBorderAll,
  IconBoxAlignLeftFilled,
  IconBoxAlignTopFilled,
  IconChevronDown,
  IconClearFormatting,
  IconCode,
  IconColumnInsertLeft,
  IconColumnInsertRight,
  IconColumnRemove,
  IconFileCode,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconItalic,
  IconLayoutBoard,
  IconLayoutBoardSplit,
  IconList,
  IconListNumbers,
  IconPilcrow,
  IconRowInsertBottom,
  IconRowInsertTop,
  IconRowRemove,
  IconSeparatorHorizontal,
  IconStrikethrough,
  IconSwitchHorizontal,
  IconTable,
  IconTableColumn,
  IconTableMinus,
  IconTablePlus,
  IconTableRow,
  IconTextColor,
  IconTheater
} from '@tabler/icons-react'
import './index.less'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import ColorPicker from '@/components/ColorPicker'
import IDropdown from '@/components/IDropdown'

export const tableHTML = `
  <table style="width:100%">
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>80</td>
    </tr>
  </table>
`
const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  const onSelectColor = (color: string) => {
    editor.chain().focus().setColor(color).run()
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
        <ColorPicker onChange={onSelectColor}>
          <button className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}>
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
        <div className="b-0 b-e-2 b-solid b-[#e2e8f0]"></div>
        <IDropdown
          items={[
            {
              key: 'table',
              label: 'Table',
              icon: <IconTable size={24} />,
              child: [
                {
                  key: 'insert-table',
                  label: 'Insert Table',
                  icon: <IconTablePlus size={24} />,
                  onClick: () => {
                    editor
                      .chain()
                      .focus()
                      .insertTable({
                        rows: 3,
                        cols: 3,
                        withHeaderRow: true
                      })
                      .run()
                  }
                },
                {
                  key: 'delete-table',
                  label: 'Delete Table',
                  icon: <IconTableMinus size={24} />,
                  onClick: () => {
                    editor.chain().focus().deleteTable().run()
                  }
                }
              ]
            },
            {
              key: 'column',
              label: 'Column',
              icon: <IconTableColumn size={24} />,
              child: [
                {
                  key: 'insert-column-before',
                  label: 'Insert Column Before',
                  icon: <IconColumnInsertLeft size={24} />,
                  onClick: () => {
                    editor.chain().focus().addColumnBefore().run()
                  }
                },
                {
                  key: 'insert-column-after',
                  label: 'Insert Column After',
                  icon: <IconColumnInsertRight size={24} />,
                  onClick: () => {
                    editor.chain().focus().addColumnAfter().run()
                  }
                },
                {
                  key: 'delete-column',
                  label: 'Delete Column',
                  icon: <IconColumnRemove size={24} />,
                  onClick: () => {
                    editor.chain().focus().deleteColumn().run()
                  }
                }
              ]
            },
            {
              key: 'row',
              label: 'Row',
              icon: <IconTableRow size={24} />,
              child: [
                {
                  key: 'insert-row-before',
                  label: 'Insert Row Before',
                  icon: <IconRowInsertTop size={24} />,
                  onClick: () => {
                    editor.chain().focus().addRowBefore().run()
                  }
                },
                {
                  key: 'insert-row-after',
                  label: 'Insert Row After',
                  icon: <IconRowInsertBottom size={24} />,
                  onClick: () => {
                    editor.chain().focus().addRowAfter().run()
                  }
                },
                {
                  key: 'delete-row',
                  label: 'Delete Row',
                  icon: <IconRowRemove size={24} />,
                  onClick: () => {
                    editor.chain().focus().deleteRow().run()
                  }
                }
              ]
            },
            {
              key: 'title',
              label: 'Title',
              icon: <IconTheater size={24} />,
              child: [
                {
                  key: 'toggle-header-cell',
                  label: 'Toggle Header Cell',
                  icon: <IconSwitchHorizontal size={24} />,
                  onClick: () => {
                    editor.chain().focus().toggleHeaderCell().run()
                  }
                },
                {
                  key: 'toggle-header-row',
                  label: 'Toggle Header Row',
                  icon: <IconBoxAlignTopFilled size={24} />,
                  onClick: () => {
                    editor.chain().focus().toggleHeaderRow().run()
                  }
                },
                {
                  key: 'toggle-header-column',
                  label: 'Toggle Header Column',
                  icon: <IconBoxAlignLeftFilled size={24} />,
                  onClick: () => {
                    editor.chain().focus().toggleHeaderColumn().run()
                  }
                }
              ]
            },
            {
              key: 'cell',
              label: 'Cell',
              icon: <IconBorderAll size={24} />,
              child: [
                {
                  key: 'merge-cells',
                  label: 'Merge Cells',
                  icon: <IconLayoutBoard size={24} />,
                  onClick: () => {
                    editor.chain().focus().mergeCells().run()
                  }
                },
                {
                  key: 'split-cell',
                  label: 'Split Cell',
                  icon: <IconLayoutBoardSplit size={24} />,
                  onClick: () => {
                    editor.chain().focus().splitCell().run()
                  }
                }
              ]
            }
          ]}>
          <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
            <IconTable size={24} color="#818ea3" />
            <IconChevronDown size={20} color="#818ea3" />
          </button>
        </IDropdown>
      </div>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  StarterKit.configure({
    bulletList: {
      keepMarks: true
    },
    orderedList: {
      keepMarks: true
    }
  }),
  Table.configure({
    resizable: true
  }),
  TableRow,
  TableHeader,
  TableCell
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
      <div className="b-1 b-solid b-[#dfdfdf] rounded-md text-base prose max-w-full prose-truegray">
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
      </div>
    </div>
  )
}

export default RichEditor
