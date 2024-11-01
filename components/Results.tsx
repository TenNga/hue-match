'use client'

import useStepContext from '@/hooks/useStepContext';
import React from 'react';
import Step from './ui/Step';
import { steps } from '@/constants';
import PaletteDisplay from './PaletteDisplay';

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

    const response = `{
    "color_palettes": {
        "winter": ["#678b87", "#3c6469", "#13293c"],
        "summer": ["#ccac96", "#dab3b9", "#b89fa0"],
        "spring": ["#c0938d", "#d3b3ad", "#e1cdbf"],
        "fall": ["#c27567", "#8b4738", "#5b2e22"]
    },
    "avoid_colors": ["#f5e3e0", "#f1dedb", "#ebd4d0"]
}`
    const generatedPalettes = JSON.parse(response);
 
    return(
        <section className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-extrabold mb-20'>Result</h1>
            {
                generatedPalettes ? 
                <PaletteDisplay palettes={generatedPalettes}/>
                :
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
            }
            
            
        </section>
    )
};

export default Results;