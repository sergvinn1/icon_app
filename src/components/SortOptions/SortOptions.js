import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortOptions = ({ sortCriteria, setSortCriteria }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="sort-label">Сортувати за</InputLabel>
      <Select
        labelId="sort-label"
        value={sortCriteria}
        onChange={(e) => setSortCriteria(e.target.value)}
        label="Сортувати за"
      >
        <MenuItem value="name">Назва</MenuItem>
        <MenuItem value="iconNumber">Номер ікони</MenuItem>
        <MenuItem value="cabinetNumber">Номер шафи</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortOptions;
