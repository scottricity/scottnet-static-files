import React from 'react';
import { Button, ThemeProvider, Typography, CssBaseline, Container, Box, Link } from '@mui/material';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import theme from '../theme.mjs';
import { render } from '@testing-library/react';

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://www.scottnet.dev/">
          scottnet.dev
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function StickyFooter() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              Made with <Link href='https://expressjs.com/'>express</Link> and <Link href='https://reactjs.org/'>React</Link>!
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    );
  }

function Home(){
    return (
        <ThemeProvider theme={theme}>
            <Typography v>
                Hello React!
            </Typography>
            <StickyFooter></StickyFooter>
        </ThemeProvider>
    )
}

export default Home