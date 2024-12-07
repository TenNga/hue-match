'use client'

import React, { useEffect } from 'react'
import Button from './ui/Button'
import useStepContext from '@/hooks/useStepContext'
import { useGpt } from '@/hooks/useGpt'
import { usePrompt } from '@/hooks/usePrompt'
import { useReset } from '@/hooks/useReset'
import Step from './ui/Step'
import { steps } from '@/constants'


const MainButtons = () => {
    const {
        skinColor,
        skinTwoColor,
        hairColor,
        setPalettes
    } = useStepContext();
    const selectedColors = [skinColor,skinTwoColor]

    const prompt = usePrompt({selectedColors,hairColor});

    const{ response, callChatGPTAPI, loading} = useGpt();
    useEffect(()=>{
        setPalettes(response);
    },[response])
    const resetCall = useReset();
   
    return (
        <div className='flex flex-col gap-3'>
            <Step step={steps.three} />
            <div className='flex justify-between items-center gap-2 lg:gap-9 px-2 lg:pl-24'>
                <Button type='primary' onGenerate={()=>callChatGPTAPI(prompt)}>
                    {loading ? 'Loading...' : 'Generate'}
                </Button>
                <Button type='secondary' onGenerate={()=>resetCall()}>
                    reset
                </Button>
            </div>
        </div>
    )
}

export default MainButtons