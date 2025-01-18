import React, { ReactNode } from 'react'
import Loading from './Loading'

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  text?: string
  children?: ReactNode
  buttonStyle?: string
  disabled?: boolean
  loading?: boolean
}

const Button = ({
  onClick,
  buttonStyle,
  children,
  text,
  type = 'button',
  disabled = false,
  loading = false,
}: Props) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`w-full bg-[#49BD88] py-4 rounded-sm text-white font-bold text-center disabled:opacity-50 transition-all ease-in-out hover:opacity-80 flex items-center justify-center ${buttonStyle}`}
    >
      {loading ? <Loading /> : text ? text : children}
    </button>
  )
}

export default Button
