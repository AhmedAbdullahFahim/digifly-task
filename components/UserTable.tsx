'use client'
import { AppDispatch, RootState } from '@/store'
import { setUsers } from '@/store/slices/usersSlice'
import { TableHeader, User } from '@/types'
import axios, { AxiosResponse } from 'axios'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './loading'

const UserTable = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const { usersData } = useSelector((state: RootState) => state.users)

  const dispatch = useDispatch<AppDispatch>()

  const t = useTranslations('partOne')

  const headers: TableHeader<User>[] = [
    { value: t('firstName'), key: 'FirstName' },
    { value: t('lastName'), key: 'LastName' },
    { value: t('mobileNumber'), key: 'Phone' },
    { value: t('email'), key: 'Email' },
  ]
  const fetchUsersData: () => void = async () => {
    setLoading(true)
    try {
      const results: AxiosResponse = await axios.get(
        'http://localhost:1337/user-informations'
      )
      dispatch(setUsers(results.data))
    } catch (err) {
      console.log('err', err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsersData()
  }, [])

  return (
    <div className='flex flex-col gap-y-1 flex-1 w-full'>
      <h6 className='text-[#6D5CBC] font-bold'>{t('results')}</h6>
      {loading ? (
        <div className='self-center mt-20'>
          <Loading />
        </div>
      ) : usersData.length > 0 ? (
        <table className='table-auto border-collapse w-full block overflow-y-auto lg:overflow-x-hidden h-[23rem]'>
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
        <h3 className='text-center mt-20'>{t('usersEmpty')}</h3>
      )}
    </div>
  )
}

export default UserTable
