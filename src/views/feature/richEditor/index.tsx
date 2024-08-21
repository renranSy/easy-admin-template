import React, { useEffect, useState } from 'react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import '@wangeditor/editor/dist/css/style.css'

const RichEditor = () => {
  const [editor, setEditor] = useState<IDomEditor | null>(null)

  const [html, setHtml] = useState('<p>Hello, world!</p>')

  const toolbarConfig: Partial<IToolbarConfig> = {}
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容'
  }

  useEffect(() => {
    return () => {
      if (editor !== null) {
        editor.destroy()
        setEditor(null)
      }
    }
  }, [])
  return (
    <>
      <div>
        <Toolbar editor={editor} defaultConfig={toolbarConfig} mode="default" />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => {
            setHtml(editor.getHtml())
          }}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
      <div style={{ marginTop: '15px' }}>{html}</div>
    </>
  )
}

export default RichEditor
