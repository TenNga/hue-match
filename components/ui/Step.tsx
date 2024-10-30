import { StepProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const Step = ({step:{icon,label}, done}:StepProps) => {
  return (
    <div className="flex justify-start items-center gap-7">
              <Image 
                src={done? 'assets/icons/step_done.svg' : icon.src}
                width={icon.width}
                height={icon.height}
                alt={icon.alt}
              />
              <p className="inline text-3xl font-extrabold capitalize">{label}</p>
            </div>
  )
}

export default Step