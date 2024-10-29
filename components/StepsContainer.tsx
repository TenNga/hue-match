'use client'

import React, { useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

const StepsContainer = () => {
    const [upload, setUpload] = useState<File[] | null>(null)
    
  return (
    <div>
        <FirstStep onUpload={setUpload} upload={upload}/>
        {
            upload && <SecondStep />
        }
    </div>
  )
}

export default StepsContainer