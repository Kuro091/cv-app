import { useColorsStore } from './hooks/useColorsStore';

const Footer = () => {
  const { currentColor, colors } = useColorsStore();
  const _currentColor = colors.find((color) => color.name === currentColor);

  return (
    <section
      className={`bottom-0 w-full flex justify-center items-end py-5 ${_currentColor?.topBorderClass} z-0`}
    >
      <div className='text-xs font-semibold'>Copyright 2023 ©Kuro091</div>
    </section>
  );
};

export default Footer;
