import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export enum LANGUEAGE {
    EN = "en",
    UK = "uk",
}
const translations = {
    en: require("./translations/en.json"),
    uk: require("./translations/uk.json"),
};

export const getLanguages = (t: any) => {
    return [
        { title: t("english"), lang: LANGUEAGE.EN },
        { title: t("ukrainian"), lang: LANGUEAGE.UK },
    ];
};

export const LANGUEAGE_LIST = [LANGUEAGE.EN, LANGUEAGE.UK];

export const currentLocale = LANGUEAGE.UK;
//@ts-ignore
i18n
    .use(initReactI18next).init({
        lng: currentLocale,
        fallbackLng: LANGUEAGE.UK,
        keySeparetor: ".",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: translations.en,
            },
            uk: {
                translation: translations.uk,
            },
        },
    })
export default i18n