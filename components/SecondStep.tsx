import React, { useState } from 'react'
import Step from './ui/Step'
import { steps } from '@/constants'
import ColorPicker from './ColorPicker'
import PickedColors from './PickedColors'

const SecondStep = ({image}:{image:File}) => {
    const [skinColor, setSkinColor] = useState('rgb(255,255,255)');
    const handleColorPicked = (color : string) => {
        setSkinColor(color)
    }
  return (
    <div className='second-step'>
         <Step step={steps.two} />  
         <div className='mx-24'>
            <PickedColors firstColor={skinColor}/>  
            <ColorPicker onPicked = {handleColorPicked} image={image}/>
         </div>
    </div>
  )
}

export default SecondStep