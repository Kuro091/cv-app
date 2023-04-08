import { AnimatedCard } from '../../AnimatedComponents/AnimatedCard';
import { useColor } from '../../hooks/useColor';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CakeIcon from '@mui/icons-material/Cake';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Button from '@mui/material/Button';

const LeftContent = () => {
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
    <div className='grid justify-center py-20 bg-gray-200 text-blue-gray-900 rounded-lg border-2 border-blue-gray-900 shadow-lg'>
      <div className='flex flex-col gap-y-2 text-center px-5'>
        <div
          className='p-10 aspect-square rounded-2xl object-center'
          style={{
            backgroundImage: 'url(/images/cat2.jpg)',
            backgroundColor: currentColor?.lighter,
            backgroundSize: 'cover',
          }}
        ></div>

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
                  backgroundColor: currentColor?.dark,
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
