import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';

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
      <div className='grid place-items-center gap-10'>
        <div>
          My resume as <span className='font-bold'>PDF</span>
        </div>
        <Button onClick={handleDownloadFile} variant='outlined' className='font-extrabold text-2xl'>
          Get Resume
        </Button>
      </div>
    </>
  );
};

export default Resume;
