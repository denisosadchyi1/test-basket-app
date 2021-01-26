import React from  'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from  'styled-components';
import { clearProducts } from '../../redux/actions/actions';
import Product from '../Product'; 

const LoadingWrapper = styled.div`
  width: 300px;
  text-align: center;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 600;
`;

const AllProductsWrapper = styled.div`
  padding: 20px 0;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  top: -20px;
  right: 20px;
  button{
    padding: 4px 11px;
    border-radius: 100%;
    font-weight: bold;
  }
`;


const AllProducts = () => {
  const products = useSelector(state => state.products.products)
  const showProducts = useSelector(state => state.products.showProduct)
  const loading = useSelector(state => state.app.loading)
  const dispatch = useDispatch()

  if(loading) {
    return (
      <LoadingWrapper>
        <h5>Loading....</h5>
      </LoadingWrapper>
    )
  }

  if(!products.length || showProducts === false) {
    return (
      <div style={{width: '500px', margin: '0 auto'}}>
        <h5 style={{textAlign:'center'}}>Продукции пока нету, нажмите на кнопку чтобы загрузить товары :)</h5>
      </div>
    )
  }

 return(
  <AllProductsWrapper>
    <CloseButton>
      <button 
        className="btn btn-danger"
        onClick={() => dispatch(clearProducts())}>X</button>
    </CloseButton>
    <div className="row">
      {products.map(product => (
        <div className="col-sm-3 mb-4" key={Date.now() + product.id}>
          <Product name={product.name} cost={product.cost} id={product.id} quantity={product.quantity} img={product.url} />
        </div>
        )) }
    </div>
  </AllProductsWrapper>
 ) 
}

export default AllProducts;