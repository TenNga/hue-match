import React, { useEffect, useState } from 'react'
import Step from './ui/Step'
import { steps } from '@/constants'
import ColorPicker from './ColorPicker'
import PickedColors from './PickedColors'

const SecondStep = ({image}:{image:File}) => {
    let combineColor;
    const [currentColor, setCurrentColor] = useState('rgb(255,255,255)');
    const [skinColor, setSkinColor] = useState('rgb(255,255,255)');
    const [skinTwoColor, setSkinTwoColor] = useState('rgb(255,255,255)');
    const [hairColor, setHairColor] = useState('rgb(255,255,255)');
    const [count, setCount] = useState(0);

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
         <div className='mx-24'>
            <h1>Count:: {count}</h1>
            <PickedColors firstColor={skinColor} secondColor={skinTwoColor} thirdColor={hairColor}/>  
            <ColorPicker onPicked = {handleColorPicked} image={image}/>
         </div>
    </div>
  )
}

export default SecondStep