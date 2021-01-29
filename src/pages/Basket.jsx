import React from  'react';
import { useSelector } from 'react-redux';
import styled from  'styled-components';
import AllBasketProducts from '../components/AllBasketProducts';
import BasketForm from '../components/BasketForm';

const BasketWrapper = styled.div`
  border: 2px solid #eee;
  border-radius: 7px;
  width: 900px;
  margin: 100px auto;
  background: #fcf9f9;
  display: flex; 
  justify-content: space-between; 
`;

const BasketFormContainer = styled.div`
  width: 300px;
`;

const TextWrapper = styled.div`
  width: 520px;
  margin: 100px auto;
  text-align: center;
  font-size: 25px;
`;

const Basket = () => {
  const basket = useSelector(state => state.products.basketProducts)
  if(basket.length !== 0) {
    return (
      <BasketWrapper>
        <AllBasketProducts />
        <BasketFormContainer>
          <BasketForm / >
        </BasketFormContainer>
      </BasketWrapper>
    )
  } else {
    return (
      <TextWrapper>
        Корзина пуста, добавьте какой-либо товар :)
      </TextWrapper>
    )
  }
}

export default Basket;