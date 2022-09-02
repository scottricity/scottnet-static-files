import React, {lazy, Suspense} from 'react';
import { Button, ThemeProvider, Typography } from '@mui/material';
import {initializeSession} from "./client"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import theme from './theme.mjs';



const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);



export default App;