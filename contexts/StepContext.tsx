'use client'

import { whiteColor } from '@/constants';
import { ShareContextType } from '@/types';
import React, { createContext, useState } from 'react'

const StepContext = createContext<ShareContextType | null>(null);
const StepProvider = ({children}:{children: React.ReactNode}) => {
    const [upload, setUpload] = useState<File[] | null>(null)
    
    const [currentColor, setCurrentColor] = useState(whiteColor);
    const [skinColor, setSkinColor] = useState(whiteColor);
    const [skinTwoColor, setSkinTwoColor] = useState(whiteColor);
    const [hairColor, setHairColor] = useState(whiteColor);
    const [count, setCount] = useState(0); //use to count three clicks

    const shareContext = {
        upload,
        setUpload,
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
