'use client'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import Button from './Button'
import Input from './Input'
import { FormData } from '@/types'
import axios from 'axios'

const UserForm = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      FirstName: '',
      LastName: '',
      Phone: '',
      Email: '',
    },
    mode: 'onBlur',
  })

  const t = useTranslations('partOne')

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post('http://localhost:1337/user-informations', { ...data })
      setValue('FirstName', '')
      setValue('Phone', '')
      setValue('LastName', '')
      setValue('Email', '')
    } catch (err) {
      console.log('err', err)
      throw err
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex-1 flex flex-col gap-y-6 lg:gap-y-4 xl:gap-y-6 w-full'
    >
      <div className='w-full flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-6 lg:gap-2 xl:gap-6'>
        <Input
          name='FirstName'
          label={t('firstName')}
          placeholder={t('firstName')}
          error={errors.FirstName?.message ?? ''}
          register={register}
          validationRules={{
            required: t('required'),
            minLength: {
              value: 2,
              message: t('twoChars'),
            },
          }}
        />
        <Input
          name='LastName'
          label={t('lastName')}
          placeholder={t('lastName')}
          error={errors.LastName?.message ?? ''}
          register={register}
          validationRules={{
            required: t('required'),
            minLength: {
              value: 2,
              message: t('twoChars'),
            },
          }}
        />
      </div>
      <Input
        name='Phone'
        label={t('mobileNumber')}
        placeholder={t('mobileNumber')}
        error={errors.Phone?.message ?? ''}
        register={register}
        maxLength={11}
        validationRules={{
          required: t('required'),
          pattern: {
            value: /^01[0125][0-9]{8}$/,
            message: t('validMobileNumber'),
          },
        }}
      />
      <Input
        name='Email'
        label={t('email')}
        placeholder={t('email')}
        error={errors.Email?.message ?? ''}
        register={register}
        validationRules={{
          required: t('required'),
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: t('validEmail'),
          },
        }}
      />
      <Button type='submit' text={t('send')} disabled={!isValid} />
    </form>
  )
}

export default UserForm
