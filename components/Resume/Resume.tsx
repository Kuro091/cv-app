import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';
import Link from 'next/link';
import React from 'react';

const downloadFile = (callback: () => void) => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.setAttribute('download', 'resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  callback();
};

const Resume = () => {
  const sendDataToGTM = useGTMDispatch();

  const handleDownloadFile = () => {
    downloadFile(() => {
      sendDataToGTM({
        event: 'file_download',
        file_name: 'resume.pdf',
      });
    });
  };

  return (
    <>
      <div className='place-items-center gap-10 grid'>
        <Button onClick={handleDownloadFile} variant='outlined' className='font-extrabold text-2xl'>
          <Link href='/resume.pdf' passHref>
            View Resume
          </Link>
        </Button>
        <Button onClick={handleDownloadFile} variant='outlined' className='font-extrabold text-2xl'>
          Download Resume
        </Button>
      </div>
    </>
  );
};

export default Resume;
