'use client'
import { useRef, useState } from 'react'

const TextEditor = () => {
  const [selectedColor, setSelectedColor] = useState<string>('#000000')
  const [selectedBgColor, setSelectedBgColor] = useState<string>('#ffffff')
  const [activeButton, setActiveButton] = useState<string>('')
  const editorRef = useRef<HTMLDivElement | null>(null)

  const applyStyle = (command: string, value?: string) => {
    document.execCommand(command, false, value || '')
    setActiveButton(command)
  }

  const toolbarButtons = [
    {
      id: 'insertOrderedList',
      icon: '/text-editor/ol.png',
    },
    {
      id: 'insertUnorderedList',
      icon: '/text-editor/ul.png',
    },
    {
      id: 'indent',
      icon: '/text-editor/indent.png',
    },
    {
      id: 'justifyLeft',
      icon: '/text-editor/left.png',
    },
    {
      id: 'justifyCenter',
      icon: '/text-editor/center.png',
    },
    {
      id: 'justifyRight',
      icon: '/text-editor/right.png',
    },
    {
      id: 'outdent',
      icon: '/text-editor/outdent.png',
    },
    {
      id: 'strikeThrough',
      icon: '/text-editor/strikeThrough.png',
    },
    {
      id: 'bold',
      icon: '/text-editor/bold.png',
    },
    {
      id: 'italic',
      icon: '/text-editor/italic.png',
    },
    {
      id: 'underline',
      icon: '/text-editor/underline.png',
    },
    {
      id: 'undo',
      icon: '/text-editor/undo.png',
    },
    {
      id: 'redo',
      icon: '/text-editor/redo.png',
    },
  ]

  const fontFamilyOptions = [
    'Poppins',
    'Arial',
    'Courier New',
    'Georgia',
    'Times New Roman',
    'Verdana',
  ]

  return (
    <div className='border border-[#6D5CBC1A] rounded-sm'>
      <div className='flex items-center flex-wrap gap-y-4 bg-[#F8F7FC] border-b border-b-[#6D5CBC1A] pb-2 xl:pb-0 xl:h-10'>
        {toolbarButtons.map((item) => (
          <button
            key={item.id}
            onClick={() => applyStyle(item.id)}
            className={`h-full px-4 py-2 transition-all ease-in-out duration-300 ${
              item.id == activeButton ? 'bg-[#49BD88]' : ''
            }`}
          >
            <img
              className='w-4 h-4 object-contain'
              src={item.icon}
              alt={item.id}
            />
          </button>
        ))}
        <select
          onChange={(e) => applyStyle('fontName', e.target.value)}
          className='outline-none outline-0 mx-4 p-1'
        >
          {fontFamilyOptions.map((item) => (
            <option key={item} style={{ fontFamily: item }} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label className='flex items-center mx-2 space-x-2'>
          <span>Text Color:</span>
          <input
            type='color'
            value={selectedColor}
            onChange={(e) => {
              setSelectedColor(e.target.value)
              applyStyle('foreColor', e.target.value)
            }}
            className='w-8 h-8 p-0 border rounded cursor-pointer'
          />
        </label>

        <label className='flex items-center mx-2 space-x-2'>
          <span>Background Color:</span>
          <input
            type='color'
            value={selectedBgColor}
            onChange={(e) => {
              setSelectedBgColor(e.target.value)
              applyStyle('hiliteColor', e.target.value)
            }}
            className='w-8 h-8 p-0 border rounded cursor-pointer'
          />
        </label>
        <select
          onChange={(e) => applyStyle('fontSize', e.target.value)}
          className='outline-none outline-0 mx-4 p-1'
        >
          <option value='2'>Small</option>
          <option value='3'>Smaller</option>
          <option value='4'>Normal</option>
          <option value='5'>Large</option>
          <option value='6'>Larger</option>
        </select>
      </div>

      <div
        ref={editorRef}
        contentEditable
        className='p-4 min-h-[250px] focus:outline-none bg-white text-black'
      ></div>
    </div>
  )
}

export default TextEditor
