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
    <button onClick={handleCopy} className={`bg-[${color}]`}>{color}</button>
  )
}

export default ColorPill