import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="p-2">
      <label htmlFor="language-select" className="mr-2">
        {t('Select Language')}:
      </label>
      <select
        id="language-select"
        onChange={changeLanguage}
        value={i18n.language}
        className="border px-2 py-1 rounded"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="mr">Marathi</option>
        <option value="ta">Tamil</option>
        <option value="bn">Bengali</option>
      </select>
    </div>
  );
}
