import React, { ReactNode } from 'react'

interface Props {
  title: string
  info: string
  children: ReactNode
}

const PartSection = ({ title, info, children }: Props) => {
  return (
    <section className='py-16'>
      <div className='px-4 md:px-6 lg:px-10'>
        <div className='flex items-center gap-x-4'>
          <div className='bg-[#6D5CBC] h-1 w-16 rounded-[100px]' />
          <h3 className='font-bold text-[#1A1A1A] text-[2rem]'>{title}</h3>
        </div>
        <p className='text-lg text-[#666666] mt-4 mb-10'>{info}</p>
      </div>
      {children}
    </section>
  )
}

export default PartSection
