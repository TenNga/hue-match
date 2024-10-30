'use client'

import React, { useContext, useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import { StepContext, StepProvider } from '@/contexts/StepContext'
import useStepContext from '@/hooks/useStepContext'
import Button from './ui/Button'
import { whiteColor } from '@/constants'
import MainButtons from './MainButtons'

const StepsContainer = () => {
    const {upload, setUpload, hairColor} = useStepContext();
    
   return (
    <section className='flex flex-col gap-10'>

        <FirstStep onUpload={setUpload} upload={upload}/>
        
        {
            upload && 
                <SecondStep image={upload[0]}/>
        }
        
        {
        hairColor !== whiteColor && <MainButtons />
        }
        
            
        
    </section>
  )
}

export default StepsContainer