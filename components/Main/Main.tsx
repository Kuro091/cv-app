import Button from '@mui/material/Button';
import { useColor } from '../hooks/useColor';
import { LeftContent } from './LeftContent';
import { RightContent } from './RightContent';
import { Color } from '../hooks/types';

const Main = () => {
  const { setCurrentColor, colors } = useColor();
  return (
    <>
      <section className='flex items-center justify-center flex-col h-fit'>
        <div className='text-2xl font-bold'>Hi there!</div>
        <div className='text-xl font-semibold'>This is my portfolio</div>
        <div className='flex flex-col items-center gap-5 mt-5'>
          <div className='flex gap-2'>
            {Object.keys(Color).map((color) => {
              const thisColor = colors.find((c) => c.name.toLowerCase() === color.toLowerCase());

              return (
                <Button
                  variant='outlined'
                  key={color}
                  style={{
                    backgroundColor: thisColor?.dark,
                    color: 'white',
                    border: `1px solid ${thisColor?.darkest}`,
                  }}
                  onClick={() => setCurrentColor(Color[color as keyof typeof Color])}
                >
                  {color}
                </Button>
              );
            })}
          </div>
        </div>
        <div className='mt-5 w-full'>
          <div className='relative mx-10 mb-10 gap-5 md:mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-x-5 md:w-3/4 md:min-h-3/4 min-h-[45rem] h-fit '>
            <LeftContent className='lg:sticky lg:top-10 h-fit' />
            <RightContent className='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
