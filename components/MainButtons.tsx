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