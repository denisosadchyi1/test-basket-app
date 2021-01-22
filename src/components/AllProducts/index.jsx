import React from  'react';
import { useSelector } from 'react-redux';
import styled from  'styled-components';
import Product from '../Product'; 


const AllProducts = () => {
  const products = useSelector(state => state.products)
  console.log(products)
  if(!products.length) {
    return (
      <div style={{width: '500px', margin: '0 auto'}}>
        <h5 style={{textAlign:'center'}}>Продукции пока нету, нажмите на кнопку чтобы загрузить товары :)</h5>
      </div>
    )
  }
 return(
  <div className="row">
    {products.map(product => (
      <div className="col-sm-3 mb-4" key={Date.now()}>
        <Product name={product.name} cost={product.cost} />
      </div>
      )) }
  </div>
 ) 
}

export default AllProducts;