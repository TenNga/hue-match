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
            <h1 className='text-4xl font-extrabold'>Result</h1>
            {upload && <Step step={steps.one} />}
        </section>
    )
};

export default Results;