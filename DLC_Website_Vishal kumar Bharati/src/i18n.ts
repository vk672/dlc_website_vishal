import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      tagline: "Empowering Digital Literacy!",
      nav: { home: "Home", tutorials: "Tutorials", aiChat: "AI Chat", feedback: "Feedback" },
      tutorials: { whatsapp: "WhatsApp", paytm: "Paytm", googleMaps: "Google Maps" },
      accessibility: "Accessibility Features",
      feedback: "Feedback",
      send: "Send",
      placeholderFeedback: "Your suggestions or feedback here...",
      chatbotTitle: "DigiBuddy - Your Digital Assistant",
      fontSize: "Font Size",
      voiceCommand: "Voice Commands",
      language: "Language"
    }
  },
  hi: {
    translation: {
      tagline: "डिजिटल साक्षरता को सशक्त बनाना!",
      nav: { home: "होम", tutorials: "ट्यूटोरियल्स", aiChat: "एआई चैट", feedback: "फीडबैक" },
      tutorials: { whatsapp: "व्हाट्सएप", paytm: "पेटीएम", googleMaps: "गूगल मैप्स" },
      accessibility: "सुगमता सुविधाएँ",
      feedback: "प्रतिक्रिया",
      send: "भेजें",
      placeholderFeedback: "अपनी सुझाव या प्रतिक्रिया यहाँ लिखें...",
      chatbotTitle: "डिजीबडी - आपका डिजिटल सहायक",
      fontSize: "फ़ॉन्ट आकार",
      voiceCommand: "वॉइस कमांड",
      language: "भाषा"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
