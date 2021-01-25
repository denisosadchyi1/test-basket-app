import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BasketProduct from '../BasketProduct';

const AllBasketProductsWrapper = styled.div`
  padding: 20px 0;
`;

const AllBasketProducts = () => {

  const basketProducts = useSelector(state => state.products.basketProducts)
  console.log(basketProducts)
  return (
    <AllBasketProductsWrapper>
    <div className="col">
      {basketProducts.map(product => (
        <div className="col-sm-3 mb-4" key={Date.now() + product.id}>
           <BasketProduct name={product.name} cost={product.cost} id={product.id} quantity={product.quantity} />
        </div>
        ) ) }
    </div>
    </AllBasketProductsWrapper>
  )
}

export default AllBasketProducts;