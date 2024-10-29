'use client'

import React, { useState } from 'react'
import FirstStep from './FirstStep'

const StepsContainer = () => {
    const [upload, setUpload] = useState<File[] | null>(null)
    const handleFileUpload = (files : File[]) => {
        setUpload(files)
    }
  return (
    <div>
        <FirstStep onUpload={setUpload} upload={upload}/>
    </div>
  )
}

export default StepsContainer