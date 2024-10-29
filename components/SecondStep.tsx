import React from 'react'
import Step from './ui/Step'
import { steps } from '@/constants'
import ColorPicker from './ColorPicker'

const SecondStep = ({image}:{image:File}) => {
  return (
    <div className='second-step'>
         <Step step={steps.two} />    
         <ColorPicker image={image}/>
    </div>
  )
}

export default SecondStep