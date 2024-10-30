'use client'

import { ShareContextType } from '@/types';
import React, { createContext, useState } from 'react'

const StepContext = createContext<ShareContextType | null>(null);
const StepProvider = ({children}:{children: React.ReactNode}) => {
  
    const [currentColor, setCurrentColor] = useState('rgb(255,255,255)');
    const [skinColor, setSkinColor] = useState('rgb(255,255,255)');
    const [skinTwoColor, setSkinTwoColor] = useState('rgb(255,255,255)');
    const [hairColor, setHairColor] = useState('rgb(255,255,255)');
    const [count, setCount] = useState(0); //use to count three clicks

    const shareContext = {
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
    }
    return (
    <StepContext.Provider value={shareContext}>
        {children}
    </StepContext.Provider>
  )
}

export { StepProvider, StepContext };
