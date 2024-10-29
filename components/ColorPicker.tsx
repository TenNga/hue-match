import { convertFileToUrl } from '@/lib/utils';
import { ColorPickerProps } from '@/types';
import React from 'react'
import { ImageColorPicker } from 'react-image-color-picker';


const ColorPicker = ({image, onPicked}:ColorPickerProps) => {
  const handleColorPick = (color: string) => {
    console.log('Selected color:', color); // Selected color: rgb(101, 42, 65)
    onPicked(color);
  };

  return (
    <div className='mt-6'>
      <ImageColorPicker
        onColorPick={handleColorPick}
        imgSrc={convertFileToUrl(image)}
        zoom={1}
      />
    </div>
  );
};

export default ColorPicker;