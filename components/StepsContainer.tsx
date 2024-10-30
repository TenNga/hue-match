'use client'

import React, { useContext, useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import { StepContext, StepProvider } from '@/contexts/StepContext'
import useStepContext from '@/hooks/useStepContext'

const StepsContainer = () => {
    const {upload, setUpload} = useStepContext();
    
   return (
    <div className='flex flex-col gap-10'>

        <FirstStep onUpload={setUpload} upload={upload}/>
        
        {
            upload && 
                <SecondStep image={upload[0]}/>
        }
            
        
    </div>
  )
}

export default StepsContainer