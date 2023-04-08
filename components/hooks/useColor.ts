import { Color } from './types';
import { useColorsStore } from './useColorsStore';

export const useColor = (findColor?: Color) => {
  const { currentColor, colors, setCurrentColor } = useColorsStore();
  const _currentColor = findColor ? colors.find((color) => color.name === findColor) : colors.find((color) => color.name === currentColor);

  return {currentColor: _currentColor, setCurrentColor, colors};
}