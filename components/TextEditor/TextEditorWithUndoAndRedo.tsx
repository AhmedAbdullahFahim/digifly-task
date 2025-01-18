'use client'
import React, { useState, useRef } from 'react'

const TextEditor = () => {
  const [content, setContent] = useState('')
  const [history, setHistory] = useState<string[]>([''])
  const [historyIndex, setHistoryIndex] = useState(0)
  const editorRef = useRef<HTMLDivElement | null>(null)

  const updateContent = (newContent: string) => {
    if (newContent !== history[historyIndex]) {
      const newHistory = [...history.slice(0, historyIndex + 1), newContent]
      setHistory(newHistory)
      setHistoryIndex(newHistory.length - 1)
    }
    setContent(newContent)
  }

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.innerHTML
    updateContent(newContent)
  }

  const applyStyle = (command: string, value?: string) => {
    document.execCommand(command, false, value || '')
  }

  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      const previousContent = history[newIndex]
      setContent(previousContent)
      if (editorRef.current) editorRef.current.innerHTML = previousContent
      placeCursorAtEnd(editorRef.current)
    }
  }

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      const nextContent = history[newIndex]
      setContent(nextContent)
      if (editorRef.current) editorRef.current.innerHTML = nextContent
      placeCursorAtEnd(editorRef.current)
    }
  }

  const placeCursorAtEnd = (element: HTMLElement | null) => {
    if (element) {
      const range = document.createRange()
      const selection = window.getSelection()
      range.selectNodeContents(element)
      range.collapse(false)
      selection?.removeAllRanges()
      selection?.addRange(range)
    }
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
        <button
          onClick={() => applyStyle('undo')}
          className='p-2 bg-gray-200 rounded'
        >
          Undo
        </button>
        <button
          onClick={() => applyStyle('redo')}
          className='p-2 bg-gray-200 rounded'
        >
          Redo
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        className='border p-4 rounded-lg min-h-[200px] focus:outline-none bg-white text-black'
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  )
}

export default TextEditor
