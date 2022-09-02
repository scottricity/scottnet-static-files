import React from 'react';
import { Button, ThemeProvider, Typography } from '@mui/material';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import theme from '../theme.mjs';
import { render } from '@testing-library/react';

function Home(){
    return (
        <ThemeProvider theme={theme}>
            <Typography>
                Hello React!
            </Typography>
        </ThemeProvider>
    )
}

export default Home