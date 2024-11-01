'use client'

import React, { useEffect } from 'react'
import Step from './ui/Step'
import { steps } from '@/constants'
import ColorPicker from './ColorPicker'
import PickedColors from './PickedColors'
import useStepContext from '@/hooks/useStepContext'

const SecondStep = ({image}:{image:File}) => {
 
    const {
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

    useEffect(()=>{
        switch (true) {
            case count === 1:
                setSkinColor(currentColor)
                break;
            case count === 2:
                setSkinTwoColor(currentColor)
                break;
            case count === 3:
                setHairColor(currentColor)
                break;
            default:
                setHairColor(currentColor)
                break;
        }
    },[count])
    const handleColorPicked = (color : string) => {
        setCurrentColor(color)
        setCount(count+1)
    }
  return (
    <div className='second-step'>
         <Step step={steps.two} />  
         <div className='lg:ml-4 lg:pl-24'>
            <PickedColors firstColor={skinColor} secondColor={skinTwoColor} thirdColor={hairColor}/>  
            <ColorPicker onPicked = {handleColorPicked} image={image}/>
         </div>
    </div>
  )
}

export default SecondStep