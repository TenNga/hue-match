import React from 'react'
import useStepContext from './useStepContext';
import { whiteColor } from '@/constants';

export const useReset = () => {
    const {
        setUpload,
        setCurrentColor,
        setSkinColor,
        setSkinTwoColor,
        setHairColor,
        setCount,
        setPalettes,
    } = useStepContext();

    const reset = ()=>{
        setUpload(null)
        setCurrentColor(whiteColor)
        setSkinColor(whiteColor)
        setSkinTwoColor(whiteColor)
        setHairColor(whiteColor)
        setCount(0)
        setPalettes('')
    }

    return reset;
}