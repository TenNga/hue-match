import React from 'react'
import Step from './ui/Step'
import { steps } from '@/constants'

const SecondStep = () => {
  return (
    <div className='second-step'>
         <Step step={steps.two} />    
    </div>
  )
}

export default SecondStep