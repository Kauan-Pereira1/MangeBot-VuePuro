import { createI18n } from "vue-i18n";
import  PtBrTransitions from './pt_br.json'
import EnTransitions from './en.json'

export type AvailableLanguages = 'en' | 'br';

export const f18nApplication = createI18n({
    legacy: false,
    locale: 'br',
    messages: {
        en: EnTransitions,
        br: PtBrTransitions,
    }
});

export const changeLanguage = (locale: AvailableLanguages) => {
    f18nApplication.global.locale.value = locale;
};