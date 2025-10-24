
import React, { useState, useEffect } from 'react';
import { fetchVerse, BibleVerse } from '../services/bibleService';

interface BibleVerseProps {
  reference: string;
}

export const BibleVerseDisplay: React.FC<BibleVerseProps> = ({ reference }) => {
  const [verse, setVerse] = useState<BibleVerse | { error: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVerse = async () => {
      setLoading(true);
      const data = await fetchVerse(reference);
      setVerse(data);
      setLoading(false);
    };
    loadVerse();
  }, [reference]);

  if (loading) {
    return (
        <div className="p-4 bg-black/10 rounded-lg animate-pulse">
            <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
        </div>
    );
  }

  if (verse && 'error' in verse) {
    return <p className="text-red-400 italic">{verse.error}</p>;
  }

  if (verse) {
    return (
      <blockquote className="p-4 my-4 border-l-4 border-cyan-300 bg-black/10 rounded-r-lg">
        <p className="text-lg italic font-medium leading-relaxed text-white">
          "{verse.text}"
        </p>
        <cite className="block text-right mt-2 text-sm text-cyan-200 not-italic">
          — {verse.reference} ({verse.translation_name})
        </cite>
      </blockquote>
    );
  }

  return null;
};
