//import logo from './logo.svg';
import './App.css'
import React from 'react';
import Header from './Header'
import TinderCards from './TinderCards';
import SwipeButton from './SwipeButton';

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  );
}

export default App;
