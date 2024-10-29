import { convertFileToUrl } from '@/lib/utils';
import React from 'react'
import { ImageColorPicker } from 'react-image-color-picker';


const ColorPicker = ({image}:{image:File}) => {
  const handleColorPick = (color: string) => {
    console.log('Selected color:', color); // Selected color: rgb(101, 42, 65)
  };

  return (
    <div>
      <ImageColorPicker
        onColorPick={handleColorPick}
        imgSrc={convertFileToUrl(image)}
        zoom={1}
      />
    </div>
  );
};

export default ColorPicker;