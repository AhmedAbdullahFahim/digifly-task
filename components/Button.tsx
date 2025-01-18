import React, { ReactNode } from 'react'

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  text?: string
  children?: ReactNode
  buttonStyle?: string
}

const Button = ({
  onClick,
  buttonStyle,
  children,
  text,
  type = 'button',
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-[#49BD88] p-2 rounded-sm text-white font-bold text-center ${buttonStyle}`}
    >
      {text ? text : children}
    </button>
  )
}

export default Button
