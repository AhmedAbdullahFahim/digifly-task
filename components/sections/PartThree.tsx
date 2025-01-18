import React from 'react'
import TextEditor from '../TextEditor'
import { getTranslations } from 'next-intl/server'
import PartSection from '.'

const PartThree = async () => {
  const t = await getTranslations('partThree')
  return (
    <PartSection info={t('info')} title={t('title')}>
      <div className='px-4 md:px-6 lg:px-10'>
        <TextEditor />
      </div>
    </PartSection>
  )
}

export default PartThree
