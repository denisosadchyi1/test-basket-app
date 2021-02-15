import React from  'react';
import AllProducts from '../../components/AllProducts';
import LoadProducts from '../../components/LoadProducts';
import {HomeWrapper} from './styles';

const Home = () => {
  return (
    <HomeWrapper>
      <LoadProducts />
      <AllProducts />
    </HomeWrapper>
  )
}

export default Home;