import { db } from 'Assets/database';

const EMOJI_MAP = db.emojis; // Erwartet nun ein Array: [{ name: ':books:', emoji: '📚' }, ...]

const parseEmoji = text => {
  if (!text) return '';

  // Wir laufen durch das Array und ersetzen jeden Shortcode global im Text
  return EMOJI_MAP.reduce((acc, { name, emoji }) => {
    return acc.replaceAll(name, emoji);
  }, text);
};

export default parseEmoji;
