'use client'

import React, { useContext, useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import { StepContext, StepProvider } from '@/contexts/StepContext'
import useStepContext from '@/hooks/useStepContext'
import Button from './ui/Button'

const StepsContainer = () => {
    const {upload, setUpload} = useStepContext();
    
   return (
    <section className='flex flex-col gap-10'>

        <FirstStep onUpload={setUpload} upload={upload}/>
        
        {
            upload && 
                <SecondStep image={upload[0]}/>
        }
        <div className='flex justify-between items-center gap-9 pl-24'>
            <Button type='primary'>
                Generate
            </Button>
            <Button type='secondary'>
                reset
            </Button>
        </div>
            
        
    </section>
  )
}

export default StepsContainer