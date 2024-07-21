import translations from '../locales/translations.json';


export const getTranslation = (keys, language) => {
    {console.log(language)}
    const keyArray = keys.split('.');
    let translation = translations[language];
    {console.log(translation)}

    for (const key of keyArray) {
        if (translation.hasOwnProperty(key)) {
            translation = translation[key];
        } else {
            return "Translation not found";
        }
    }

    return translation;
};