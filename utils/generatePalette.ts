// utils/generatePalette.ts
import axios from 'axios';

export const generatePalette = async (selectedColors: string[], hairColor: string) => {
  const prompt = `
    Given the following skin color samples, generate two sets of color palettes: 
    1. Color palettes for winter, summer, spring, and fall based on the user's skin tone. 
    2. A set of colors that should be avoided based on their skin tone.

    Selected Skin Colors: ${selectedColors}
    Hair Color: ${hairColor}
  `;

  try {
    const response = await axios.post('/api/chatgpt', { prompt });
    return response.data;
  } catch (error) {
    console.error("Error generating palette:", error);
  }
};
