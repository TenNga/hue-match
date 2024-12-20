import React from 'react'
import Step from './ui/Step'
import FileUploader from './FileUploader'
import { steps } from '@/constants'
import { FirstStepProps } from '@/types'

const FirstStep = ({onUpload,upload}:FirstStepProps) => {

  return (
    <div className='first-step'>
        <Step step={steps.one} />
        <FileUploader onChange={onUpload} upload={upload} />    
    </div>
  )
}

export default FirstStep