import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/detail' component={Detail} />
    </div>
  );
}

export default App;
