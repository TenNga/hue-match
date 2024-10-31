'use client'

import React, { useState } from 'react'
import Button from './ui/Button'
import useStepContext from '@/hooks/useStepContext'
import axios from 'axios'
import { useGpt } from '@/hooks/useGpt'


const MainButtons = () => {
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

    const{ response, callChatGPTAPI, loading, error} = useGpt();
    console.log("response:: ",response)
    return (
        <div className='flex justify-between items-center gap-9 pl-24'>
            <Button type='primary' onGenerate={()=>callChatGPTAPI(prompt)}>
                Generate
            </Button>
            <Button type='secondary'>
                reset
            </Button>
            {
            response  && 
            <p>{response}</p>
            }
        </div>
    )
}

export default MainButtons