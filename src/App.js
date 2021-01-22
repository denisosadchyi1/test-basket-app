import Reactm from  'react';
import styled from 'styled-components';
import {Switch, Route} from  'react-router-dom';
import Navigation from './components/Navigation';
import Basket from './pages/Basket';
import Home from './pages/Home';

const App = () => {

  // async function fetchProducts() {
  //   const response = await fetch(
  //     "https://my-json-server.typicode.com/denisosadchyi1/mockend-db/products"
  //   );
  //   return await response.json();
  // }

  // console.log(fetchProducts());
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
