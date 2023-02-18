import React from 'react';
import Header from './components/Header';
import Home from './pages/home';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter = {AdapterDateFns}>
        <Home />
      </LocalizationProvider>
    </>
  );
}

export default App;
