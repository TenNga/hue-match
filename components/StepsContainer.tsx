'use client'

import React, { useContext, useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import { StepContext, StepProvider } from '@/contexts/StepContext'

const StepsContainer = () => {
    const [upload, setUpload] = useState<File[] | null>(null)
    
   return (
    <div className='flex flex-col gap-10'>

        <FirstStep onUpload={setUpload} upload={upload}/>
        
        {
            upload && 
            <StepProvider>
                <SecondStep image={upload[0]}/>
            </StepProvider>
        }
            
        
    </div>
  )
}

export default StepsContainer