import React from  'react';
import styled from  'styled-components';
import AllProducts from '../components/AllProducts';
import LoadProducts from '../components/LoadProducts';

const HomeWrapper = styled.div`

`;

const Home = () => {
  return (
    <HomeWrapper>
      <LoadProducts />
      <AllProducts />
    </HomeWrapper>
  )
}

export default Home;