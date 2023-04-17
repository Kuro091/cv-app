import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material';
import React from 'react';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
  title?: string;
}

const Modal = ({ open, handleClose, children, title }: ModalProps) => {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth='lg'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions className='flex items-center'>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
