'use client'

import React from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import useStepContext from '@/hooks/useStepContext'
import { whiteColor } from '@/constants'
import MainButtons from './MainButtons'

const StepsContainer = () => {
    const {upload, setUpload, hairColor} = useStepContext();
    
   return (
    <section className='flex flex-col gap-2 lg:gap-10'>

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