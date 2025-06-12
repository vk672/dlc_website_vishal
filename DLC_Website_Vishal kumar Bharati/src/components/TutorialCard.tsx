import React from 'react';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
}

export default function TutorialCard({ title, description, imageUrl, videoUrl }: Props) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded shadow p-4 max-w-sm mx-auto">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {videoUrl ? (
        <video controls className="w-full rounded mb-2" src={videoUrl} />
      ) : (
        <img src={imageUrl} alt={title} className="rounded mb-2" />
      )}
      <p>{description}</p>
    </div>
  );
}
