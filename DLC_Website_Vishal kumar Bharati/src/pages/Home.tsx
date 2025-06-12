import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center">{t('tagline')}</h1>
      <p className="text-center text-lg max-w-xl mx-auto">
        Welcome! This platform helps parents and elderly users learn digital tools easily with
        tutorials, an AI assistant, and more.
      </p>
    </main>
  );
}
