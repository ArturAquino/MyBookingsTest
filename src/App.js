import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import {
  DesktopMenu
} from './components'

import {
  MyBookings
} from './containers'

function App() {
  return (
    <div className="App">
      <DesktopMenu />
      <Container style={{ padding: '80px 0 15px' }}>
        <Typography variant="h1" className="Title" >Your Flights.</Typography>
        <MyBookings / >
      </Container>
    </div>
  )
}

export default App;
