import * as RNLocalize from 'react-native-localize'
import i18n from 'i18n-js'
import { memoize } from 'lodash'
import {
  I18nManager,
} from 'react-native'

export type InitLocalizationParamsType = {
  translationFiles: string[];
}

/**
 * translate
 */
export const t = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = (translationFiles: string[]): void => {
  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationFiles)) ||
    fallback;

  // clear translation cache
  t.cache.clear();

  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = { [languageTag]: translationFiles[languageTag]() }
  i18n.locale = languageTag;
}

export const initLocalization = (params: InitLocalizationParamsType): void => {
  setI18nConfig(params.translationFiles)
}
