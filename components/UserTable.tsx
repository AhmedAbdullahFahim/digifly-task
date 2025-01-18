import { TableHeader, User } from '@/types'
import axios, { AxiosResponse } from 'axios'
import { getTranslations } from 'next-intl/server'
import React from 'react'

const fetchData = async () => {
  const results: AxiosResponse = await axios.get(
    'http://localhost:1337/user-informations'
  )

  return results.data
}

const UserTable = async () => {
  const t = await getTranslations('partOne')
  const usersData: User[] = await fetchData()

  const headers: TableHeader<User>[] = [
    { value: t('firstName'), key: 'FirstName' },
    { value: t('lastName'), key: 'LastName' },
    { value: t('mobileNumber'), key: 'Phone' },
    { value: t('email'), key: 'Email' },
  ]
  return (
    <div className='flex flex-col gap-y-1 flex-1 w-full'>
      <h6 className='text-[#6D5CBC] font-bold'>{t('results')}</h6>
      {usersData.length > 0 ? (
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
            {usersData.map((row, index) =>
              !row.FirstName ||
              !row.Email ||
              !row.LastName ||
              !row.Phone ? null : (
                <tr
                  className={`bg-white ${
                    index == usersData.length - 1
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
                      {item.key == 'Phone' && !!row[item.key]
                        ? `0${row[item.key]}`
                        : row[item.key]}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <h3 className='text-center mt-8'>{t('usersEmpty')}</h3>
      )}
    </div>
  )
}

export default UserTable
