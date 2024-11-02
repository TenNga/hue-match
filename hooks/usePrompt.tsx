import { PromptType } from '@/types';
import React from 'react'

export const usePrompt = ({selectedColors,hairColor}:PromptType) => {
    const prompt = `
    Given the following skin color samples, generate two sets of color palettes for cloths: 

    Set 1: Seasonal Clothing Color Palettes

    Winter: Generate a palette of warm, cozy colors suitable for winter wear.
    Summer: Generate a palette of cool, light colors appropriate for summer clothing.
    Spring: Generate a palette of fresh, vibrant colors reminiscent of springtime.
    Fall: Generate a palette of warm, earthy colors characteristic of autumn.

    Set 2: Colors to Avoid

    Generate a list of colors that would clash with the provided skin tones and hair color.

    Selected Skin Colors: ${selectedColors}
    Hair Color: ${hairColor}

    Output Format:

    JSON format with the following structure:
    {
        "color_palettes": {
            "winter": ["#color", "#color", "#color"],
            "summer": ["#color", "#color", "#color"],
            "spring": ["#color", "#color", "#color"],
            "fall": ["#color", "#color", "#color"]
        },
        "avoid_colors": ["#color", "#color", "#color"]
    }
  `;
  return  prompt;
}