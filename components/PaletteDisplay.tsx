import React from 'react'
import RenderEachSeason from './RenderEachSeason';

const PaletteDisplay = ({palettes}:{palettes:any}) => {
    //     `{
    //     "color_palettes": {
    //         "winter": ["#678b87", "#3c6469", "#13293c"],
    //         "summer": ["#ccac96", "#dab3b9", "#b89fa0"],
    //         "spring": ["#c0938d", "#d3b3ad", "#e1cdbf"],
    //         "fall": ["#c27567", "#8b4738", "#5b2e22"]
    //     },
    //     "avoid_colors": ["#f5e3e0", "#f1dedb", "#ebd4d0"]
    // }
    
    const renderSeason = Object.keys(palettes.color_palettes).map(key => {
        const props = {key,season:palettes.color_palettes[key]}
        return (
            <RenderEachSeason key={key} eachSeason={props}/>
        )
      });

  return (
    <section>
        <div>
            {renderSeason}
        </div>
    </section>
  )
}

export default PaletteDisplay