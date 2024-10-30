'use client'

import useStepContext from '@/hooks/useStepContext';
import React from 'react';
import Step from './ui/Step';
import { steps } from '@/constants';

const Results = () => {
    const {
        upload,
        setUpload,
        currentColor,
        setCurrentColor,
        skinColor,
        setSkinColor,
        skinTwoColor, 
        setSkinTwoColor,
        hairColor,
        setHairColor,
        count,
        setCount
    } = useStepContext();
 
    return(
        <section className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-extrabold mb-20'>Result</h1>
            <div className='flex flex-col items-start gap-8'>
                {
                    upload ?
                        <Step step={steps.one} done={true} /> :
                        <Step step={steps.one} done={false} />
                }
                {
                    hairColor !== 'rgb(255,255,255)' ?
                        <Step step={steps.two} done={true} /> :
                        <Step step={steps.two} done={false} />
                }
                <Step step={steps.three} done={false} />
            </div>
            
        </section>
    )
};

export default Results;