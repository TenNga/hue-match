import React from 'react'

const ColorPill = ({color}:{color:string}) => {
    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(color);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      };
  return (
    <button onClick={handleCopy} key={color} className='rounded-lg py-2 px-4 text-white font-semibold border border-[#495867] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' style={{backgroundColor:color}}>{color}</button>
  )
}

export default ColorPill