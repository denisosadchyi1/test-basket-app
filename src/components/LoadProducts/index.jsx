import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {loadProducts} from '../../redux/actions/actions';

const LoadProductsWrapper = styled.div`
  width: 150px;
  margin: 30px auto;
`;

const LoadProductsButton = styled.button`
  width: 150px;
  font-weight: 700;
  border-radius: 4px;
`;

const LoadProducts = () => {
  const dispatch = useDispatch()
  return (
    <LoadProductsWrapper>
      <LoadProductsButton 
        className="btn btn-primary"
        onClick={() => dispatch(loadProducts())}>Load Products</LoadProductsButton>
    </LoadProductsWrapper>
  )
}

export default LoadProducts;