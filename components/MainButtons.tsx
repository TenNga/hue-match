'use client'

import React, { useEffect, useState } from 'react'
import Button from './ui/Button'
import useStepContext from '@/hooks/useStepContext'
import { useGpt } from '@/hooks/useGpt'
import { usePrompt } from '@/hooks/usePrompt'
import { useReset } from '@/hooks/useReset'


const MainButtons = () => {
    const {
        skinColor,
        skinTwoColor,
        hairColor,
        setPalettes
    } = useStepContext();
    const selectedColors = [skinColor,skinTwoColor]

    const prompt = usePrompt({selectedColors,hairColor});

    const{ response, callChatGPTAPI, loading, error} = useGpt();
    useEffect(()=>{
        setPalettes(response);
    },[response])
    const resetCall = useReset();
   
    return (
        <div className='flex justify-between items-center gap-9 pl-4 lg:pl-24'>
            <Button type='primary' onGenerate={()=>callChatGPTAPI(prompt)}>
                {loading ? 'Loading...' : 'Generate'}
            </Button>
            <Button type='secondary' onGenerate={()=>resetCall()}>
                reset
            </Button>
        </div>
    )
}

export default MainButtons