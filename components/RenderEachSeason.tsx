import React from 'react'
import { EachSeasonType } from '@/types';
import ColorPill from './ui/ColorPill';
import cn from 'classnames'

const RenderEachSeason = ({eachSeason:{key,values,avoid}}:EachSeasonType) => {
    values.length = 3; //accept first three values
    const renderColors = values?.map(color => <ColorPill key={color} color={color} />)
  return (
    <div className='each-season'>
      <h1 className={cn('capitalize text-lg lg:text-2xl font-bold mb-4',{
        'font-extrabold' : avoid
      })}>{key} colors:</h1>
      <div className='flex justify-around gap-2 mb-6'>
        {renderColors}
      </div>
      
    </div>
  )
}

export default RenderEachSeason