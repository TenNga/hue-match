import Image from 'next/image'
import React from 'react'
interface StepProps {
    step: {
        icon: {
            src: string,
            width: number,
            height: number,
            alt: string
        },
        label: string
    }
}
const Step = ({step:{icon,label}}:StepProps) => {
  return (
    <div className="flex justify-start items-center gap-7">
              <Image 
                src={icon.src}
                width={icon.width}
                height={icon.height}
                alt={icon.alt}
              />
              <p className="inline text-3xl font-extrabold capitalize">{label}</p>
            </div>
  )
}

export default Step