import React from  'react';
import {Switch, Route} from  'react-router-dom';
import Navigation from './components/Navigation';
import Basket from './pages/Basket';
import Home from './pages/Home';

const App = () => {

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </>
  );
}

export default App;
