import { PromptType } from '@/types';
import React from 'react'

export const usePrompt = ({selectedColors,hairColor}:PromptType) => {
    const prompt = `
    Given the following skin color samples, generate two sets of color palettes for cloths: 
    1. Color palettes for winter, summer, spring, and fall based on the user's skin tone. 
    2. A set of colors that should be avoided based on their skin tone.

    Selected Skin Colors: ${selectedColors}
    Hair Color: ${hairColor}

    make sure to return in JSON format
  `;
  return  prompt;
}