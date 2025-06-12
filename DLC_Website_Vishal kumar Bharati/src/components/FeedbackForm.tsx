import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FeedbackForm() {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    // Placeholder: You can replace this with actual backend integration, e.g., Firebase or Google Sheets.
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">{t('feedback')}</h2>
      <textarea
        placeholder={t('placeholderFeedback')}
        className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 text-black"
        rows={5}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        disabled={!feedback.trim()}
      >
        {t('send')}
      </button>
      {submitted && <p className="text-green-400 mt-2">Thank you for your feedback!</p>}
    </form>
  );
}
