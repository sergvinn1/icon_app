import React from 'react';
import { Button } from '@mui/material';

const ToggleButton = ({ isCollapsed, handleToggle }) => {
  return (
    <Button onClick={handleToggle} variant="contained" sx={{ mb: 2 }}>
      {isCollapsed ? 'Розгорнути список' : 'Згорнути список'}
    </Button>
  );
};

export default ToggleButton;
