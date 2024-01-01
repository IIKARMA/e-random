import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUEAGE } from 'src/i18n/enums';

const translations = {
    en: require("./translations/en.json"),
    ua: require("./translations/uk.json"),
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
            ua: {
                translation: translations.ua,
            },
        },
    })
export default i18n