
export interface BibleVerse {
  reference: string;
  text: string;
  translation_name: string;
}

const tryFetchVerse = async (reference: string, translation: string): Promise<any> => {
    const response = await fetch(`https://bible-api.com/${encodeURIComponent(reference)}?translation=${translation}`);
    if (!response.ok) {
        // Bible-API can return 404 for valid references if the translation doesn't exist for a verse.
        // It can also be down. We'll throw to trigger the fallback mechanism.
        throw new Error(`API request failed for translation: ${translation}`);
    }
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }
    return data;
}

export const fetchVerse = async (reference: string): Promise<BibleVerse | { error: string }> => {
  try {
    let data;
    try {
      // Prioritize NVI as it's a modern and requested translation
      data = await tryFetchVerse(reference, 'nvi');
    } catch (e) {
      console.warn('NVI translation fetch failed, falling back to Almeida', e);
      // Fallback to Almeida, another common and reliable Portuguese translation
      data = await tryFetchVerse(reference, 'almeida');
    }

    // The API sometimes returns text with newline characters that need to be cleaned
    const cleanedText = data.text.replace(/\n/g, ' ').trim();

    return {
      reference: data.reference,
      text: cleanedText,
      translation_name: data.translation_name,
    };
  } catch (error) {
    console.error("Bible API Error (all fallbacks failed):", error);
    return { error: 'Não foi possível carregar o texto bíblico. Por favor, verifique sua conexão ou tente novamente mais tarde.' };
  }
};
