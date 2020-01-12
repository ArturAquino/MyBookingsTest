import React from 'react';
import Container from '@material-ui/core/Container'
import './App.css';

import { TravelCard } from './components'

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm md">
				<TravelCard />
      </Container>
    </div>
  )
}

export default App;
