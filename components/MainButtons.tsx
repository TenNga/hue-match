'use client'

import React, { useState } from 'react'
import Button from './ui/Button'
import useStepContext from '@/hooks/useStepContext'
import { usePaletteMutation } from '@/hooks/usePalette'
import axios from 'axios'


const MainButtons = () => {

    const [response, setResponse] = useState<string>('');
    const {
        upload,
        skinColor,
        skinTwoColor,
        hairColor
    } = useStepContext();
    const selectedColors = [skinColor,skinTwoColor]

    const prompt = `
    Given the following skin color samples, generate two sets of color palettes: 
    1. Color palettes for winter, summer, spring, and fall based on the user's skin tone. 
    2. A set of colors that should be avoided based on their skin tone.

    Selected Skin Colors: ${selectedColors}
    Hair Color: ${hairColor}
  `;

    const handleGeneratePalette = async () => {
        try {
            const res = await axios.post('/api/chatgpt', { prompt });
            setResponse(res.data.choices?.[0]?.message?.content || 'No response');
          } catch (error) {
            console.error('Error fetching data:', error);
            setResponse('Error fetching data');
          }
    }
    return (
        <div className='flex justify-between items-center gap-9 pl-24'>
            <div>
                <h3>Response:</h3>
                <p>{response}</p>
            </div>
            <Button type='primary' onGenerate={handleGeneratePalette}>
                Generate
            </Button>
            <Button type='secondary'>
                reset
            </Button>
        </div>
    )
}

export default MainButtons