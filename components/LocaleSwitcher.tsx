'use client'

import { usePathname, useRouter } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'

export default function LocaleSwitcher() {
  const t = useTranslations('localeSwitcher')
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale()

  const switchLanguage = async () => {
    const nextLocale = locale == 'en' ? 'ar' : 'en'

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <button
      className='flex items-center self-end sm:self-auto gap-2 font-[500] text-[#1A1A1A]'
      onClick={switchLanguage}
    >
      {/* have to conditionally render the whole image because it caches if I just conditionally change the src */}
      {t('locale')}
      {locale == 'en' ? (
        <Image src={'/ar-flag.png'} alt='language' width={24} height={24} />
      ) : (
        <Image src={'/en-flag.png'} alt='language' width={24} height={24} />
      )}
    </button>
  )
}
