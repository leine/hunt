// @flow

import './App.css';
import React from 'react';
import Leaderboard from './Leaderboard';

export default function App(): React.MixedElement {
  return (
    <div className="App">
      <header className="header">
        Hunt
      </header>
      <Leaderboard />
    </div>
  );
}