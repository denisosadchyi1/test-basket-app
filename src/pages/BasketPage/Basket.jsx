import React from  'react';
import { useSelector } from 'react-redux';
import AllBasketProducts from '../../components/AllBasketProducts';
import BasketForm from '../../components/BasketForm';
import {BasketFormContainer, BasketWrapper, TextWrapper} from './styles';


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