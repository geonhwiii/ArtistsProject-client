import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import { Home } from './pages';
import { Detail } from './pages';
import Player from './components/Player';

function App() {
  const [trackUrl, setTrackUrl] = useState('');
  const [hidePlayer, setHidePlayer] = useState(true);
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route
        path='/detail/:id'
        render={props => (
          <Detail
            {...props}
            setTrackUrl={setTrackUrl}
            setHidePlayer={setHidePlayer}
          />
        )}
      />
      <Player
        url={trackUrl}
        hidePlayer={hidePlayer}
        setHidePlayer={setHidePlayer}
      />
    </div>
  );
}

export default App;
