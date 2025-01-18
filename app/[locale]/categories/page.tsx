import { getTranslations } from 'next-intl/server'
import React from 'react'

const CategoriesPage = async () => {
  const t = await getTranslations('nav')
  return <h1>{t('categories')}</h1>
}

export default CategoriesPage
