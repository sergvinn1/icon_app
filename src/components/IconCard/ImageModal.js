import React from 'react';
import { Modal, Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90%',
  maxHeight: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const ImageModal = ({ open, handleClose, image }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <img src={image} alt="icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Box>
    </Modal>
  );
};

export default ImageModal;
