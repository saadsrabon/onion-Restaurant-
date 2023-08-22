import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
       <div className="App">
      <RouterProvider router={router}/>
    </div>
    </ThemeProvider>
   
  );
}

export default App;
