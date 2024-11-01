'use client'

import React, { useState } from 'react'
import Button from './ui/Button'
import useStepContext from '@/hooks/useStepContext'
import axios from 'axios'
import { useGpt } from '@/hooks/useGpt'
import { usePrompt } from '@/hooks/usePrompt'


const MainButtons = () => {
    const {
        upload,
        skinColor,
        skinTwoColor,
        hairColor
    } = useStepContext();
    const selectedColors = [skinColor,skinTwoColor]

    const prompt = usePrompt({selectedColors,hairColor});

    const{ response, callChatGPTAPI, loading, error} = useGpt();
    console.log("response:: ",response)
    // {
    //     "color_palettes": {
    //         "winter": ["#678b87", "#3c6469", "#13293c"],
    //         "summer": ["#ccac96", "#dab3b9", "#b89fa0"],
    //         "spring": ["#c0938d", "#d3b3ad", "#e1cdbf"],
    //         "fall": ["#c27567", "#8b4738", "#5b2e22"]
    //     },
    //     "avoid_colors": ["#f5e3e0", "#f1dedb", "#ebd4d0"]
    // }
    return (
        <div className='flex justify-between items-center gap-9 pl-24'>
            <Button type='primary' onGenerate={()=>callChatGPTAPI(prompt)}>
                {loading ? 'Loading...' : 'Generate'}
            </Button>
            <Button type='secondary'>
                reset
            </Button>
            {/* {
            response  && 
            <p>{response}</p>
            } */}
        </div>
    )
}

export default MainButtons