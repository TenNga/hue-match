import { convertFileToUrl } from '@/lib/utils';
import { ColorPickerProps } from '@/types';
import React from 'react'
import { ImageColorPicker } from 'react-image-color-picker';


const ColorPicker = ({image, onPicked}:ColorPickerProps) => {
  const handleColorPick = (color: string) => {
     onPicked(color);
  };

  return (
    <div className='mt-6 w-[350px] lg:w-[450px]'>
      <ImageColorPicker
        onColorPick={handleColorPick}
        imgSrc={convertFileToUrl(image)}
        zoom={1}
      />
    </div>
  );
};

export default ColorPicker;