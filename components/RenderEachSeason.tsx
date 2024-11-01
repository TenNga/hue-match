import React from 'react'
import SeasonColors from './SeasonColors';
import { EachSeasonType } from '@/types';
import ColorPill from './ui/ColorPill';
import cn from 'classnames'

const RenderEachSeason = ({eachSeason:{key,values,avoid}}:EachSeasonType) => {
  //"winter": ["#678b87", "#3c6469", "#13293c"]
    const renderColors = values.map(color => <ColorPill key={color} color={color} />)
  return (
    <div className='each-season'>
      <h1 className={cn('capitalize text-2xl font-bold mb-4',{
        'font-extrabold' : avoid
      })}>{key} colors:</h1>
      <div className='flex justify-around gap-2 mb-6'>
        {renderColors}
      </div>
      
    </div>
  )
}

export default RenderEachSeason