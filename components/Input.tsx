import React from 'react'
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form'

interface Props<T extends FieldValues> {
  label: string
  name: Path<T> // Constrain name to keys of the form values
  placeholder: string
  error?: string
  containerStyle?: string
  labelStyle?: string
  inputStyle?: string
  register: UseFormRegister<T> // Register function typed with the generic form values
  validationRules?: RegisterOptions<T> // Optional validation rules
  maxLength?: number
}

const Input = <T extends FieldValues>({
  label,
  name,
  placeholder,
  error,
  // onChange,
  // onBlur,
  containerStyle,
  labelStyle,
  maxLength,
  inputStyle,
  register,
  validationRules = {}, // Default to an empty object
}: Props<T>) => {
  return (
    <div
      className={`flex flex-col w-full items-start gap-y-2 h-24 ${containerStyle}`}
    >
      <label className={`font-[500] text-sm text-[#1A1A1A] ${labelStyle}`}>
        {label}
      </label>
      <input
        maxLength={maxLength}
        placeholder={placeholder}
        className={`w-full px-6 py-4 border border-solid rounded-sm outline-none outline-0 text-sm focus:border-black ${
          error ? 'border-red-500' : 'border-[#E5E5E5]'
        } ${inputStyle}`}
        {...register(name, validationRules)}
      />
      {error && <p className='text-red-500 text-xs'>{error}</p>}
    </div>
  )
}

export default Input
