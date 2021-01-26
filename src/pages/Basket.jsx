import React from  'react';
import styled from  'styled-components';
import AllBasketProducts from '../components/AllBasketProducts';

const BasketWrapper = styled.div`
  border: 2px solid #eee;
  border-radius: 7px;
  width: 800px;
  margin: 100px auto;
  background: #fcf9f9;
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