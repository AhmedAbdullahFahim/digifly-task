'use client'
import dynamic from 'next/dynamic'
import { useTranslations } from 'use-intl'
import PartSection from '.'

const PartTwo = () => {
  const MyMap = dynamic(() => import('@/components/Map'), { ssr: false })

  const t = useTranslations('partTwo')
  return (
    <PartSection info={t('info')} title={t('title')}>
      <MyMap />
    </PartSection>
  )
}

export default PartTwo
