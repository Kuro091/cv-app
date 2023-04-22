import Image from 'next/image';
import { Project } from '../hooks/useProjects';
import { memo, useState } from 'react';
import { useColor } from '../../hooks/useColor';
import { Modal } from '../../Modal';
import { Chip, Button, Box } from '@mui/material';
import Link from 'next/link';
import Carousel from 'react-material-ui-carousel';

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard = memo(({ project }: PortfolioCardProps) => {
  const [hover, setHover] = useState(false);
  const { currentColor } = useColor();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '20rem',
          width: '24rem',
          padding: 0,
          borderRadius: '0.5rem',
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          cursor: 'pointer',
          overflowY: 'hidden',
        }}
        component='section'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen(true)}
      >
        <div
          style={{
            width: '100%',
            height: hover ? '0%' : '75%',
            transition: 'height 0.2s ease-in-out',
          }}
          className='relative bg-gray-900 overflow-hidden'
        >
          <Image
            className='object-cover rounded-tr-lg rounded-tl-lg'
            fill
            alt={project.title}
            src={project.imgUrl}
          />
        </div>
        <div
          className={`w-full flex items-start justify-start row-span-2  bg-white ${
            hover ? 'rounded-lg' : 'rounded-bl-lg rounded-br-lg'
          }`}
          style={{
            width: '100%',
            height: hover ? '100%' : '25%',
            transition: 'height 0.2s ease-in-out',
          }}
        >
          <div
            className={`flex flex-col items-start justify-start py-5 px-5 h-full gap-5 overflow-hidden`}
          >
            <div
              className='text-3xl font-extrabold'
              style={{
                color: currentColor?.dark,
              }}
            >
              {project.title}
            </div>
            <div
              className='text-lg normal-case'
              style={{
                color: currentColor?.darkest,
              }}
            >
              {project.description}
            </div>
          </div>
        </div>
      </Box>
      {open && (
        <Modal open={open} handleClose={() => setOpen(false)}>
          <div className='flex flex-col items-center justify-center h-[80vh] gap-5'>
            <div className='relative bg-gray-900 rounded-lg overflow-hidden h-3/4 w-full'>
              <Carousel className='w-full h-full' navButtonsAlwaysVisible animation='slide'>
                {project.images &&
                  project.images.map((img, index) => (
                    <Image
                      key={index}
                      className='object-contain'
                      alt=''
                      fill
                      src={img}
                      style={{
                        filter: hover ? 'brightness(0.5)' : 'brightness(1)',
                        scale: hover ? '1.1' : '1',
                      }}
                    />
                  ))}
              </Carousel>
            </div>
            <div className='flex flex-col h-1/4 gap-y-4  w-full'>
              <div className='text-5xl font-bold'>{project.title}</div>
              <div className='text-lg normal-case'>{project.detailedDescription}</div>

              <Button variant='outlined'>
                <Link href={project.projectUrl || ''}>Live URL</Link>
              </Button>
              <div className='mt-5 flex gap-2 flex-wrap'>
                {project.techStack?.map((tech) => (
                  <Chip key={tech} label={tech} />
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
});

PortfolioCard.displayName = 'PortfolioCard';

export default PortfolioCard;
