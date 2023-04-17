import Image from 'next/image';
import { Project } from '../useProjects';
import { useState } from 'react';
import { useColor } from '../../hooks/useColor';
import { Modal } from '../../Modal';
import { Chip, Button, Box } from '@mui/material';
import Link from 'next/link';

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
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
          background: `white`,
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          transition: 'all 0.5s ease-in-out',
          cursor: 'pointer',
        }}
        component='section'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpen(true)}
      >
        <div
          className='relative bg-gray-900 rounded-tr-lg rounded-tl-lg overflow-hidden'
          style={{
            height: hover ? '0%' : '100%',
            width: '100%',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <Image className='object-contain' alt='' fill src={project.imgUrl} />
        </div>
        <div
          className='w-full flex items-start justify-start row-span-2 rounded-bl-lg rounded-br-lg'
          style={{
            height: hover ? '100%' : '25%',
            width: '100%',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <div className='flex flex-col items-start justify-center py-5 px-5 h-full'>
            <div
              className='text-3xl font-bold'
              style={{
                color: currentColor?.darkest,
              }}
            >
              {project.title}
            </div>
            {hover && (
              <div
                className='text-lg normal-case'
                style={{
                  color: currentColor?.darkest,
                }}
              >
                {project.description}
              </div>
            )}
          </div>
        </div>
      </Box>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <div className='flex flex-col lg:flex-row items-center justify-center h-[80vh] gap-x-5'>
          <div className='relative bg-gray-900 rounded-lg overflow-hidden w-full h-full flex-1'>
            <Image
              className='object-contain'
              alt=''
              fill
              src={project.imgUrl}
              style={{
                filter: hover ? 'brightness(0.5)' : 'brightness(1)',
                scale: hover ? '1.1' : '1',
              }}
            />
          </div>
          <div className='flex flex-col flex-1 gap-y-4'>
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
    </>
  );
};

export default PortfolioCard;
