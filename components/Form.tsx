'use client'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import Button from './Button'
import Input from './Input'

type FormData = {
  firstName: string
  lastName: string
  mobileNumber: string
  email: string
}

const UserForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
    },
    mode: 'onBlur',
  })

  const t = useTranslations('partOne')

  const onSubmit = async (data: FormData) => {
    console.log('data', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex-1 flex flex-col gap-y-6 lg:gap-y-2 xl:gap-y-6 w-full'
    >
      <div className='w-full flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-6 lg:gap-2 xl:gap-6'>
        <Input
          name='firstName'
          label={t('firstName')}
          placeholder={t('firstName')}
          error={errors.firstName?.message ?? ''}
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
          name='lastName'
          label={t('lastName')}
          placeholder={t('lastName')}
          error={errors.lastName?.message ?? ''}
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
        name='mobileNumber'
        label={t('mobileNumber')}
        placeholder={t('mobileNumber')}
        error={errors.mobileNumber?.message ?? ''}
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
        name='email'
        label={t('email')}
        placeholder={t('email')}
        error={errors.email?.message ?? ''}
        register={register}
        validationRules={{
          required: t('required'),
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: t('validEmail'),
          },
        }}
      />
      <Button type='submit' text={t('send')} />
    </form>
  )
}

export default UserForm
