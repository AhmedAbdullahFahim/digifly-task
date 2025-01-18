'use client'
import React, { useState, useRef, useEffect } from 'react'

const TextEditor = () => {
  const [content, setContent] = useState('')
  const editorRef = useRef<HTMLDivElement | null>(null)

  const placeCursorAtEnd = (element: HTMLElement) => {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(element)
    range.collapse(false)
    selection?.removeAllRanges()
    selection?.addRange(range)
  }

  useEffect(() => {
    if (editorRef.current) {
      placeCursorAtEnd(editorRef.current)
    }
  }, [])

  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    setContent(e.currentTarget.innerHTML)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      document.execCommand('insertHTML', false, '<br />')
    }
  }

  const applyStyle = (command: string, value?: string) => {
    document.execCommand(command, false, value || '')
  }

  return (
    <div className='space-y-4'>
      <div className='flex items-center space-x-4 bg-gray-100 p-2 rounded-lg flex-wrap'>
        <button
          onClick={() => applyStyle('justifyLeft')}
          className='p-2 bg-gray-200 rounded'
        >
          Align Left
        </button>
        <button
          onClick={() => applyStyle('justifyCenter')}
          className='p-2 bg-gray-200 rounded'
        >
          Center
        </button>
        <button
          onClick={() => applyStyle('justifyRight')}
          className='p-2 bg-gray-200 rounded'
        >
          Align Right
        </button>
        <button
          onClick={() => applyStyle('justifyFull')}
          className='p-2 bg-gray-200 rounded'
        >
          Justify
        </button>
        <button
          onClick={() => applyStyle('bold')}
          className='p-2 bg-gray-200 rounded'
        >
          Bold
        </button>
        <button
          onClick={() => applyStyle('italic')}
          className='p-2 bg-gray-200 rounded'
        >
          Italic
        </button>
        <button
          onClick={() => applyStyle('underline')}
          className='p-2 bg-gray-200 rounded'
        >
          Underline
        </button>
        <button
          onClick={() => applyStyle('indent')}
          className='p-2 bg-gray-200 rounded'
        >
          Indent
        </button>
        <button
          onClick={() => applyStyle('outdent')}
          className='p-2 bg-gray-200 rounded'
        >
          Outdent
        </button>
        <select
          onChange={(e) => applyStyle('fontName', e.target.value)}
          className='p-2 bg-gray-200 rounded'
        >
          <option value='Arial'>Arial</option>
          <option value='Courier New'>Courier New</option>
          <option value='Georgia'>Georgia</option>
          <option value='Times New Roman'>Times New Roman</option>
          <option value='Verdana'>Verdana</option>
        </select>
        <button
          onClick={() => applyStyle('insertUnorderedList')}
          className='p-2 bg-gray-200 rounded'
        >
          Bulleted List
        </button>
        <button
          onClick={() => applyStyle('insertOrderedList')}
          className='p-2 bg-gray-200 rounded'
        >
          Numbered List
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        className='border p-4 rounded-lg min-h-[200px] focus:outline-none bg-white text-black'
        onInput={handleContentChange}
        onKeyDown={handleKeyDown}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}

export default TextEditor
