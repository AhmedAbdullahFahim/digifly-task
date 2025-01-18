import { getTranslations } from 'next-intl/server'
import React from 'react'

const ContactUsPage = async () => {
  const t = await getTranslations('nav')
  return <h1>{t('contactus')}</h1>
}

export default ContactUsPage
