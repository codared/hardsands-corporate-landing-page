import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export type Dir = 'rtl' | 'ltr'

export const useRTL = () => {
  const [dir, setDir] = useState<Dir>('ltr')
  const [isRTL, setIsRTL] = useState(false)
  const { i18n } = useTranslation()

  useEffect(() => {
    const newDir = i18n.dir()
    setIsRTL(newDir === 'rtl')
    setDir(newDir)
  }, [])

  return { isRTL, dir }
}
