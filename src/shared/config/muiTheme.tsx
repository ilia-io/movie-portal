import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#828187',
    },
    secondary: {
      main: '#A869F0',
    },
    success: {
      main: '#73a32f',
    },
    info: {
      main: '#FF0F4D',
    },
    background: {
      default: '#100E19',
      paper: '#1F1B2E',
    },
    error: {
      main: '#FF542E',
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
