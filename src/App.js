import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import IconList from './components/IconCard/IconList';
import SearchBar from './components/SearchBar/SearchBar';
import SortOptions from './components/SortOptions/SortOptions';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import AddIconModal from './components/AddIcon/AddIconModal';
import ToggleButton from './ToggleButton/ToggleButton';
import { Button, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css'; // Імпортуємо CSS файл

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const icons = useSelector((state) => state.icons.icons);

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    icon.iconNumber.includes(searchQuery)
  );

  const sortedIcons = [...filteredIcons].sort((a, b) => {
    if (sortCriteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === 'iconNumber') {
      return a.iconNumber.localeCompare(b.iconNumber);
    } else if (sortCriteria === 'cabinetNumber') {
      return a.cabinetNumber.localeCompare(b.cabinetNumber);
    } else {
      return 0;
    }
  });

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#800000',
      },
      secondary: {
        main: '#FFD700',
      },
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setIsCollapsed(!isCollapsed);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="background"></div>
      <Container className="app-container">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <h1>Пошук ікон</h1>
        <Button onClick={handleOpen} variant="contained" color="primary" sx={{ my: 2 }}>
          Додати ікону
        </Button>
        <AddIconModal open={open} handleClose={handleClose} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortOptions sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} />
        <ToggleButton isCollapsed={isCollapsed} handleToggle={handleToggle} />
        {!isCollapsed && <IconList icons={sortedIcons} />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
