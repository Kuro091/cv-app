import { useColor } from './hooks/useColor';

const Footer = () => {
  const { currentColor } = useColor();

  return (
    <section
      className={`bottom-0 w-full flex justify-center items-end py-5`}
      style={{
        borderTop: '1px solid',
        borderColor: currentColor?.lightest,
      }}
    >
      <div className='text-xs font-semibold'>Copyright 2023 ©Kuro091</div>
    </section>
  );
};

export default Footer;
