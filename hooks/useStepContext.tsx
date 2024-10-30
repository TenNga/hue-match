'use client'

import { StepContext } from '@/contexts/StepContext';
import React, { useContext } from 'react'

const useStepContext = () => {
    const currentStepContext = useContext(StepContext);
    
    if (!currentStepContext) {
        throw new Error(
          "currentStepContext has to be used within <currentStepContext.Provider>"
        );
    }
    return currentStepContext;
}

export default useStepContext