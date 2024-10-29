import React from 'react'
import Color from './Color'
import { PickedColorsProps } from '@/types'

const PickedColors = ({firstColor, secondColor, thirdColor}:PickedColorsProps) => {
    return (
        <div className='flex justify-start gap-5'>
            <Color label="skin # 1" color={firstColor} />
            <Color label="skin # 2" color={secondColor} />
            <Color label="Hair" color={thirdColor} />
        </div>
    )
}

export default PickedColors