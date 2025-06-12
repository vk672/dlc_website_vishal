import React, { useEffect, useState } from 'react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

interface Props {
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
}

export default function AccessibilityControls({ fontSize, setFontSize }: Props) {
  const { t, i18n } = useTranslation();
  const [voiceSupported, setVoiceSupported] = useState(false);

  useEffect(() => {
    setVoiceSupported('speechSynthesis' in window && 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }, []);

  const startVoiceCommand = () => {
    if (!voiceSupported) {
      alert('Voice commands not supported in this browser.');
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = i18n.language;
    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript.toLowerCase();
      alert(`You said: ${speechResult}`);
      // Implement voice command handling here (e.g., navigation)
    };
    recognition.start();
  };

  return (
    <div className="flex gap-6 justify-center my-4">
      <div>
        <label>{t('fontSize')}: </label>
        <input
          type="range"
          min="12"
          max="24"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          aria-label="Font size slider"
        />
      </div>

      <button
        onClick={startVoiceCommand}
        className="bg-purple-600 text-white px-3 py-1 rounded"
        disabled={!voiceSupported}
        aria-disabled={!voiceSupported}
        title={voiceSupported ? t('voiceCommand') : 'Not supported'}
      >
        {t('voiceCommand')}
      </button>

      <LanguageSelector />
    </div>
  );
}
