import { useColor } from '../../hooks/useColor';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CakeIcon from '@mui/icons-material/Cake';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Button from '@mui/material/Button';
import Image from 'next/image';

interface LeftContentProps {
  className?: string;
}

const LeftContent = ({ className }: LeftContentProps) => {
  const { currentColor } = useColor();

  // because we need to re-render them when the color changes
  const items = [
    {
      name: 'Email',
      value: 'lcminhhp@gmail.com',
      icon: <ContactMailIcon sx={{ color: currentColor?.light }} />,
    },
    {
      name: 'Birthday',
      value: 'August 31, 1999',
      icon: <CakeIcon sx={{ color: currentColor?.light }} />,
    },
    {
      name: 'Location',
      value: 'Vietnam',
      icon: <PinDropIcon sx={{ color: currentColor?.light }} />,
    },
  ];

  return (
    <div
      className={[
        'grid justify-center py-20 bg-gray-200 text-blue-gray-900 rounded-lg border-2 border-blue-gray-900 shadow-lg',
        className,
      ].join(' ')}
    >
      <div className='flex flex-col items-center gap-y-2 text-center px-5 '>
        <Image
          src='/images/cat2.jpg'
          width={200}
          height={200}
          alt='cat2'
          className='rounded-full mb-5 shadow-xl p-1'
        />

        <div className='text-xl font-semibold'>MINHLC</div>
        <div className='text-sm font-semibold'>Full-stack Developer</div>

        <div className='flex flex-col gap-5 mt-10'>
          {items.map((item) => (
            <div key={item.name} className='flex-1 flex gap-10 items-center'>
              <Button
                variant='outlined'
                className='rounded-lg'
                sx={{
                  borderColor: currentColor?.light,
                }}
              >
                {item.icon}
              </Button>

              <div className='flex flex-col items-start gap-1'>
                <div className='text-sm font-bold'>{item.name}</div>
                <div className='text-xs'>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
