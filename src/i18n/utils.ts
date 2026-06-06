import { capitalize } from "../utils/string";
import { i18nConfig, type LocaleKey } from "./config";
import { ui } from "./ui";

const { defaultLocale } = i18nConfig;

type UiKey = keyof (typeof ui)[typeof defaultLocale];

/** `Astro.currentLocale` is of this type. */
type CurrentLocale = string | undefined;

const getLocale = (currentLocale: CurrentLocale): LocaleKey =>
  currentLocale && currentLocale in ui
    ? (currentLocale as LocaleKey)
    : defaultLocale;

export const useTranslations = (currentLocale: CurrentLocale) => {
  const locale = getLocale(currentLocale);

  return (key: UiKey, options?: { capitalize?: boolean }) => {
    let string = ui[locale][key] || ui[defaultLocale][key];

    if (options?.capitalize) string = capitalize(string);

    return string;
  };
};
