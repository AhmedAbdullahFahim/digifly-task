import { getTranslations } from 'next-intl/server'
import PartSection from '.'
import UserForm from '../Form'
import UserTable from '../UserTable'

const PartOne = async () => {
  const t = await getTranslations('partOne')
  return (
    <PartSection info={t('info')} title={t('title')}>
      <div className='flex flex-col lg:flex-row h-auto lg:h-[29rem] xl:h-[24rem] items-start md:gap-x-8 lg:gap-x-14 xl:gap-x-24 gap-y-16 px-4 md:px-6 lg:px-10'>
        <UserForm />
        <UserTable />
      </div>
    </PartSection>
  )
}

export default PartOne
