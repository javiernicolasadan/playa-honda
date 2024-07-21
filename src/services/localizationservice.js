import translations from '../locales/translations.json';


export const getTranslation = (keys, language) => {
     const keyArray = keys.split('.');
    let translation = translations[language];
    
    for (const key of keyArray) {
        if (translation.hasOwnProperty(key)) {
            translation = translation[key];
        } else {
            return "Translation not found";
        }
    }

    return translation;
};