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
      Still underconstructing, but here&apos;s a pdf: &nbsp;
      <Button onClick={downloadFile} variant='outlined'>
        Get Resume
      </Button>
    </>
  );
};

export default Resume;
