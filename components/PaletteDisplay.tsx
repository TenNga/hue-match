import React from 'react'
import RenderEachSeason from './RenderEachSeason';

const PaletteDisplay = ({palettes}:{palettes:any}) => {
 
    const renderSeason = Object.keys(palettes.color_palettes).map(key => {
        const props = {
            key,
            values:palettes.color_palettes[key],
            avoid:false
        }
        return (
            <RenderEachSeason key={key} eachSeason={props} />
        )
      });

  return (
    <section className='w-full'>
        <div className='palette-container'>
            {renderSeason}
            <RenderEachSeason key="color to avoid" eachSeason={{key:"Avoid",values:palettes.avoid_colors, avoid:true}} />
            <p className='text-lg text-red-500'>* Click to copy color value</p>
        </div>
    </section>
  )
}

export default PaletteDisplay