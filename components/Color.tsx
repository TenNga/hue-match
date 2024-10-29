import { ColorProps } from '@/types'
import React from 'react'
import rgbHex from 'rgb-hex';

const Color = ({ label, color }: ColorProps) => {

  const hexColor = color ? `#${rgbHex(color)}` : '#FFFFFF'; 

  return (
    <div className='skin-one flex gap-3 items-center'>
      <p className="text-[#49586] text-xl font-bold capitalize">{label}</p>
      <div 
      className={`w-10 h-10 skin-color-1 border rounded-full border-black`}
      style={{backgroundColor:hexColor}}></div>
    </div>
  )
}

export default Color