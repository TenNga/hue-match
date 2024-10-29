'use client'

import React, { useState } from 'react'
import Step from './ui/Step'
import FileUploader from './FileUploader'
import { steps } from '@/constants'
import { FileProps, FirstStepProps } from '@/types'

const FirstStep = ({onUpload,upload}:FirstStepProps) => {

  return (
    <div className='first-step'>
        <Step step={steps.one} />
        <FileUploader onChange={onUpload} />   
        {upload && <h1>Filed Uploaded and ready!</h1>} 
    </div>
  )
}

export default FirstStep