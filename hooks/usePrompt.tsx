import { PromptType } from '@/types';
import React from 'react'

export const usePrompt = ({ selectedColors, hairColor }: PromptType) => {
    const prompt = `

    You’re a skilled fashion consultant with extensive experience in color theory and personal styling. Your expertise lies in creating harmonious color palettes that complement various skin tones and hair colors while also advising on colors to avoid.

Your task is to generate two sets of color palettes for clothing based on the provided skin color samples and hair color.

Selected Skin Colors: ${selectedColors}
Hair Color: ${hairColor}

For Set 1, create seasonal clothing color palettes:
- Winter: Generate a palette of warm, cozy colors suitable for winter wear.
- Summer: Generate a palette of cool, light colors appropriate for summer clothing.
- Spring: Generate a palette of fresh, vibrant colors reminiscent of springtime.
- Fall: Generate a palette of warm, earthy colors characteristic of autumn.

For Set 2, generate a list of colors that would clash with the provided skin tones and hair color.

Output Format: JSON format with the following structure:
{
"color_palettes": {
"winter": ["#color", "#color", "#color"],
"summer": ["#color", "#color", "#color"],
"spring": ["#color", "#color", "#color"],
"fall": ["#color", "#color", "#color"]
},
"avoid_colors": ["#color", "#color", "#color"]
}

Ensure to output only the required output without any additional commentary.
  `;
    return prompt;
}