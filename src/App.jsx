import React, {lazy, Suspense} from 'react';
import { Button, ThemeProvider, Typography } from '@mui/material';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import theme from './theme.mjs';

const Home = lazy(() => import('./routes/Home'));

const App = () => (
  <Router>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Suspense>
</Router>
);



export default App;