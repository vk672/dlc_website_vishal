import React from 'react';
import TutorialCard from '../components/TutorialCard';
import { useTranslation } from 'react-i18next';

export default function Tutorials() {
  const { t } = useTranslation();

  const tutorials = [
    {
      title: t('tutorials.whatsapp'),
      description: "Learn to chat, send photos, and stay connected with WhatsApp.",
      imageUrl: "/whatsapp.png",
      videoUrl: "",
    },
    {
      title: t('tutorials.paytm'),
      description: "Discover how to send and receive money easily with Paytm.",
      imageUrl: "/paytm.png",
    },
    {
      title: t('tutorials.googleMaps'),
      description: "Find your way around with Google Maps step-by-step tutorials.",
      imageUrl: "/googlemaps.png",
    },
  ];

  return (
    <main className="p-6 max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
      {tutorials.map((tut) => (
        <TutorialCard key={tut.title} {...tut} />
      ))}
    </main>
  );
}
