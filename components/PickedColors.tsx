import React from 'react'
import Color from './Color'

const PickedColors = ({firstColor}:{firstColor: string}) => {
    return (
        <div className='flex justify-start gap-5'>
            <Color label="skin # 1" color={firstColor} />
            <Color label="skin # 2" color={firstColor} />
            <Color label="Hair" color={firstColor} />
        </div>
    )
}

export default PickedColors