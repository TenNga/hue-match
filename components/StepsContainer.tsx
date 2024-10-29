'use client'

import React, { useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'

const StepsContainer = () => {
    const [upload, setUpload] = useState<File[] | null>(null)
    const [skinColor1, setSkinColor1] = useState("");
    const [skinColor2, setSkinColor2] = useState("");
    const [hairColor, setHairColor] = useState("");
    
  return (
    <div className='flex flex-col gap-10'>
        <FirstStep onUpload={setUpload} upload={upload}/>
        {
            upload && <SecondStep image={upload[0]}/>
        }
    </div>
  )
}

export default StepsContainer