// hooks/usePalette.ts
import { useMutation } from 'react-query';
import { generatePalette } from '../utils/generatePalette';

export const usePaletteMutation = () => {
  return useMutation((params: { faceImage: string; selectedColors: string[]; hairColor: string }) =>
    generatePalette(params.selectedColors, params.hairColor)
  );
};