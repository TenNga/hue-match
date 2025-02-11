'use client'

import useStepContext from '@/hooks/useStepContext';
import React from 'react';
import Step from './ui/Step';
import { steps } from '@/constants';
import PaletteDisplay from './PaletteDisplay';

const Results = () => {
    const {
        upload,
        hairColor,
        palettes
    } = useStepContext();

    const RenderSteps = () => {
        if(upload && hairColor !== 'rgb(255,255,255)'){
            return(<>
                <Step step={steps.one} done={true} />
                <Step step={steps.two} done={true} /> 
                <Step step={steps.three} done={false} />
            </>)
        } else {
            return(<>
                <Step step={steps.one} done={false} />
                <Step step={steps.two} done={false} />
                <Step step={steps.three} done={false} />
            </>)
        }
    }

    
    const RenderResult = () => {
        const generatedPalettes = palettes && JSON.parse(palettes);
        
        if (generatedPalettes) {
            return <PaletteDisplay palettes={generatedPalettes} />
        }

        return (
            <div className='flex flex-col items-start gap-8'>
                <RenderSteps />
            </div>
        )
    }
 
    return(
        <section className='flex-grow flex flex-col items-center justify-start'>
            <h1 className='text-2xl font-extrabold mb-8 text-center lg:text-left'>Result</h1>
            <RenderResult />
        </section>
    )
};

export default Results;