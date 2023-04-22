import { Button } from '@mui/material';

const downloadFile = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.setAttribute('download', 'resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Resume = () => {
  return (
    <>
      <div className='grid place-items-center gap-10'>
        <div>
          My resume as <span className='font-bold'>PDF</span>
        </div>
        <Button
          sx={{
            width: 350,
            height: 200,
          }}
          onClick={downloadFile}
          variant='outlined'
          className='font-extrabold text-2xl'
        >
          Get Resume
        </Button>
      </div>
    </>
  );
};

export default Resume;
