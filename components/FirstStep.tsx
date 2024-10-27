'use client'

import React from 'react'
import Step from './ui/Step'
import FileUploader from './FileUploader'
import { steps } from '@/constants'

const FirstStep = () => {
    const handleFileUpload = () => {
        
    }
  return (
    <div className='first-step'>
        <Step step={steps.one} />
        <FileUploader onChange={handleFileUpload} />    
    </div>
  )
}

export default FirstStep