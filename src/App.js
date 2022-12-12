import React, { useState } from 'react';
import ProductGrid from './ProductGrid'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './Header';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

export default function App() {

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const theme = createTheme({
    palette: {
      mode: checked ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        theme={theme}
        control={
          <Switch
            theme={theme}
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label={
          checked ? "🌙" : "🌞"
        }
      />
      <Header />
      <ProductGrid />
    </ThemeProvider>
  );
}

