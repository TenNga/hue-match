'use client'

import React, { useState } from 'react'
import Button from './ui/Button'
import useStepContext from '@/hooks/useStepContext'
import usePalette from '@/hooks/usePalette';

const MainButtons = () => {
    const [palette, setPalette] = useState();
    const { skinColor, skinTwoColor, hairColor } = useStepContext();
    const selectedColorsArr = [skinColor, skinTwoColor]
    
    const PaletteGenerator = ({ selectedColorsArr, hairColor }: { selectedColorsArr: string[], hairColor: string }) => {
        const { data: palette, error, isLoading } = usePalette(selectedColorsArr, hairColor);
        setPalette(palette);
    }

    const handleGenerate = () =>{ PaletteGenerator({selectedColorsArr,hairColor})};
  return (
                <div className='flex justify-between items-center gap-9 pl-24'>
                    {palette && <p>{palette}</p>}
                    <Button type='primary' onGenerate={handleGenerate}>
                        Generate
                    </Button>
                    <Button type='secondary'>
                        reset
                    </Button>
                </div>
  )
}

export default MainButtons