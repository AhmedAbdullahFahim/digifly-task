import { getTranslations } from 'next-intl/server'
import React from 'react'

type User = {
  id: number
  firstName: string
  lastName: string
  mobileNumber: string
  email: string
}

type Header<T> = {
  value: string
  key: keyof T
}

const UserTable = async () => {
  const t = await getTranslations('partOne')
  const users: User[] = [
    {
      id: 1,
      firstName: 'hamada',
      lastName: 'abohmed',
      mobileNumber: '01288992099',
      email: 'ahmed.abdallah5022@gmail.com',
    },
    {
      id: 2,
      firstName: 'hamada',
      lastName: 'abohmed',
      mobileNumber: '01288992099',
      email: 'ahmed.abdallah5022@gmail.com',
    },
    {
      id: 3,
      firstName: 'hamada',
      lastName: 'abohmed',
      mobileNumber: '01288992099',
      email: 'ahmed.abdallah5022@gmail.com',
    },
    {
      id: 4,
      firstName: 'hamada',
      lastName: 'abohmed',
      mobileNumber: '01288992099',
      email: 'ahmed.abdallah5022@gmail.com',
    },
    {
      id: 6,
      firstName: 'hamada',
      lastName: 'abohmed',
      mobileNumber: '01288992099',
      email: 'ahmed.abdallah5022@gmail.com',
    },
    {
      id: 7,
      firstName: 'hamada',
      lastName: 'abohmed',
      mobileNumber: '01288992099',
      email: 'ahmed.abdallah5022@gmail.com',
    },
    {
      id: 8,
      firstName: 'hamada',
      lastName: 'abohmed',
      mobileNumber: '01288992099',
      email: 'ahmed.abdallah5022@gmail.com',
    },
    {
      id: 9,
      firstName: 'hamada',
      lastName: 'abohmed',
      mobileNumber: '01288992099',
      email: 'ahmed.abdallah5022@gmail.com',
    },
    {
      id: 10,
      firstName: 'hamada',
      lastName: 'abohmed',
      mobileNumber: '01288992099',
      email: 'ahmed.abdallah5022@gmail.com',
    },
  ]
  const headers: Header<User>[] = [
    { value: t('firstName'), key: 'firstName' },
    { value: t('lastName'), key: 'lastName' },
    { value: t('mobileNumber'), key: 'mobileNumber' },
    { value: t('email'), key: 'email' },
  ]
  return (
    <div className='flex flex-col gap-y-1 flex-1 w-full'>
      <h6 className='text-[#6D5CBC] font-bold'>{'Results: '}</h6>
      <table className='table-auto border-collapse w-full block overflow-y-auto h-[23rem]'>
        <thead>
          <tr className='bg-[#FAFAFA] border-b border-b-[#F2F2F2]'>
            {headers.map((item, index) => (
              <th
                key={index}
                className='text-start whitespace-nowrap px-6 py-4 text-sm text-[#6D5CBC66]'
              >
                {item.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((row, index) => (
            <tr
              className={`bg-white ${
                index == users.length - 1
                  ? 'border-b-0'
                  : 'border-b border-b-[#F2F2F2]'
              }`}
              key={row.id}
            >
              {headers.map((item, index) => (
                <td
                  className='px-6 py-4 text-sm font-[500] text-[#1A1A1A]'
                  key={index}
                >
                  {row[item.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
