import { initLocalization } from '@lineapp-utils/localize'

const initLocalLang = () => {
  const initLocalizationParams = {
    translationFiles: {
      en: () => require("./i18n/languages/en.json"),
    }
  }

  initLocalization(initLocalizationParams)
}

// do all things that is needed to start the app
export const boot = () => {
  initLocalLang()
}
