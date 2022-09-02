import React from 'react';
import { Button, ThemeProvider, Typography } from '@mui/material';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function Home(){
    fetch("http://localhost:4000/mh").then(r => {
        r.json().then(d => {
            return (d)
        })
    })
}

export default Home