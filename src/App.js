import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import { Home } from './pages';
import { Detail } from './pages';

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/detail/:id' component={Detail} />
    </div>
  );
}

export default App;
