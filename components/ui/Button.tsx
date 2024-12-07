import { ButtonProps } from '@/types'
import React from 'react'
import cn from 'classnames';

const Button = ({children, type, onGenerate}: ButtonProps) => {
    const btnStyles = cn('bg-[#6DC0B4] border border-[#495867] w-[200px] mx-auto rounded-lg text-center text-lg lg:text-xl font-bold capitalize cursor-pointer hover:border-[#F2E8D5] hover:underline hover:underline-offset-4',
        {
            'py-3' : type === 'main',
            'py-1 w-[160px]' : type === 'primary',
            'py-1 bg-[#D3D3D3] w-[160px]' : type === 'secondary'
        });
  return (
    <div role="button" className={btnStyles} onClick={onGenerate}>
            {children}
    </div>
  )
}

export default Button