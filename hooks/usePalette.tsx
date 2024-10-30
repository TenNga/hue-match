import { useQuery } from 'react-query';
import { generatePalette } from '../utils/generatePalette';

const usePalette = (selectedColors: string[], hairColor: string) => {
  return useQuery(['palette', selectedColors, hairColor], () =>
    generatePalette(selectedColors, hairColor)
  );
};

export default usePalette;