import React from 'react'
import SeasonColors from './SeasonColors';

const RenderEachSeason = ({eachSeason:{key,season}}:{eachSeason:{
  key: string;
  season: string[];
}}) => {
  //"winter": ["#678b87", "#3c6469", "#13293c"]
    const renderColors = season.map(color =>{
      return(
        <div key={color} className='rounded py-2 px-4' style={{backgroundColor:color}}>{color}</div>
      )
    })
  return (
    <div>
      <h1 className='capitalize text-2xl'>{key} Colors</h1>
      <div className='flex justify-between w-full'>
        {renderColors}
      </div>
      
    </div>
  )
}

export default RenderEachSeason