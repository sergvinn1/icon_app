import React from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from './AddIcon';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #800000',
  boxShadow: 24,
  p: 4,
};

const AddIconModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="h2">
            Додати ікону
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <AddIcon handleClose={handleClose} />
        <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
          Закрити
        </Button>
      </Box>
    </Modal>
  );
};

export default AddIconModal;
