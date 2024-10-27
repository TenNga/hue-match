import { ButtonProps } from '@/types'
import React from 'react'
import cn from 'classnames';

const Button = ({children, type}: ButtonProps) => {
    const btnStyles = cn('bg-[#6DC0B4] border border-[#495867] rounded-lg w-full text-center text-3xl font-bold capitalize hover:border-[#F2E8D5] hover:underline hover:underline-offset-4',
        {
            'py-5' : type === 'main',
            'py-2' : type === 'primary',
            'py-2 bg-[#D3D3D3]' : type === 'secondary'
        });
  return (
    <div className={btnStyles}>
            {children}
    </div>
  )
}

export default Button