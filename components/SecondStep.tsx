import React, { useContext, useEffect, useState } from 'react'
import Step from './ui/Step'
import { steps } from '@/constants'
import ColorPicker from './ColorPicker'
import PickedColors from './PickedColors'
import { StepContext, StepProvider } from '@/contexts/StepContext'

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
        count,setCount
    } = useContext(StepContext);
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
         <div className='pl-24'>
            <PickedColors firstColor={skinColor} secondColor={skinTwoColor} thirdColor={hairColor}/>  
            <ColorPicker onPicked = {handleColorPicked} image={image}/>
         </div>
    </div>
  )
}

export default SecondStep