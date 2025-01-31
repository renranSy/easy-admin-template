import { useTranslation } from 'react-i18next'

const useI18n = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }
  return { t, lang: i18n.language, changeLanguage }
}

export default useI18n
