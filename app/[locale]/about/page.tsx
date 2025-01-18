import { getTranslations } from 'next-intl/server'
import React from 'react'

const AboutPage = async () => {
  const t = await getTranslations('nav')
  return <h1>{t('about')}</h1>
}

export default AboutPage
