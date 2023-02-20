import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
  Avatar,
} from '@material-tailwind/react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

const Header = () => {
  const testEnv = process.env.NEXT_PUBLIC_THE_SAME_KEY;
  return (
    <Card className='w-96'>
      {testEnv && <h1>{testEnv}</h1>}
      <CardHeader floated={false} className='h-80 flex flex-col justify-center'>
        <Image
          alt='avatar'
          width='384'
          height='320'
          priority={true}
          src='https://purr.objects-us-east-1.dream.io/i/gRzRv.png'
        />
      </CardHeader>
      <CardBody className='text-center'>
        <h1 className='text-2xl text-gray-800 font-bold'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Mohamad Usman').pause().start();
            }}
          />
        </h1>

        <Typography variant='h5' className='mb-2 md:text-lg text-gray-600'>
          Software Engineer
        </Typography>
        <Typography className='text-gray-600 md:hidden mt-1'>(moh.usman168@gmail.com)</Typography>
      </CardBody>
      <CardFooter divider className='flex py-3'>
        <div className='w-full flex justify-center gap-6'>
          <IconButton size='sm' ripple={true}>
            <i className='fa-brands fa-linkedin'></i>
          </IconButton>
          <IconButton size='sm' ripple={true}>
            <i className='fa-brands fa-linkedin'></i>
          </IconButton>
          <IconButton size='sm' ripple={true}>
            <i className='fa-brands fa-linkedin'></i>
          </IconButton>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Header;
