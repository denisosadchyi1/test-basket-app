import React from  'react';
import styled from  'styled-components';
import AllBasketProducts from '../components/AllBasketProducts';

const BasketWrapper = styled.div`
  width: 800px;
  margin: 100px auto;
  background: #e6dcdc;
  display: flex;
  justify-content: center;
`;

const Basket = () => {
  return (
    <BasketWrapper>
      <AllBasketProducts />
    </BasketWrapper>
  )
}

export default Basket;