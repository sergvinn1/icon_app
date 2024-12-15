import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Box, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { deleteIcon } from '../../redux/actions/iconActions';
import EditIconModal from './EditIconModal';

const IconCard = ({ icon }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteIcon(icon.id));
  };

  const handleEditOpen = () => {
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <Card sx={{ width: 250, height: 300, border: '2px solid #800000', m: 2, position: 'relative' }}>
        <CardContent sx={{ pb: 6 }}>
          <Typography gutterBottom variant="h5" component="div">
            {icon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Номер ікони: ${icon.iconNumber}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Номер шафи: ${icon.cabinetNumber}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {icon.additionalInfo}
          </Typography>
        </CardContent>
        <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)' }}>
          <Paper elevation={3} sx={{ p: 1, display: 'flex', justifyContent: 'center', gap: 2, bgcolor: 'rgba(255, 255, 255, 0.7)', borderRadius: 5 }}>
            <IconButton onClick={handleEditOpen} aria-label="edit" sx={{ color: '#FFD700' }}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete} aria-label="delete" sx={{ color: '#FF6347' }}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        </Box>
      </Card>
      {isEditModalOpen && (
        <EditIconModal open={isEditModalOpen} handleClose={handleEditClose} icon={icon} />
      )}
    </>
  );
};

export default IconCard;
