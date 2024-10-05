// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About": "About",
      "Login": "Login",
      "Languages": "Languages",
      "Register": "Register"
    }
  },
  ar: {
    translation: {
      "Home": "الرئيسية",
      "About": "نبذة عنا",
      "Login": "تسجيل الدخول",
      "Languages": "اللغات",
      "Register": "تسجيل جديد"

    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar', // اللغة الافتراضية
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
