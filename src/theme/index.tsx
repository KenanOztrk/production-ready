import { createTheme } from '@mui/material/styles';
import themeOptions from './theme.json';

const theme = createTheme({
  ...themeOptions,
  palette: {
	...themeOptions.palette,
	mode: themeOptions.palette.mode as 'light' | 'dark',
  },
});

export default theme;