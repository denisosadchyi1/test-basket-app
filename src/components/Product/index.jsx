import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addQuantity, addToBasket } from "../../redux/actions/actions";

const ProductWrapper = styled.div`
  position: relative;
  color: #000;
  width: 300px;
  height: 200px;
  background: #fff;
  label {
    font-size: 17px;
  }
`;

const ProductItemWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const PriceWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
`; 


const Product = ({ name, cost, id, quantity }) => {
  const addBasketQuantity = (id, quantity) => {
    if(quantity === 0) {
      console.log(quantity, 'first quantity')
      console.log(id)
      dispatch(addToBasket(id))
    } else if (quantity > 0) {
      console.log('second quantity', quantity)
      dispatch(addQuantity(id))
    }
  }
  const dispatch = useDispatch()
  return (
    <ProductWrapper className="card mt-3">
      <div className="card-body">
        <div className="row">
          <ProductItemWrapper className="col">
            <label htmlFor="name">Найменование</label>
            <h5 className="card-title" id="name">
              {name}
            </h5>
          </ProductItemWrapper>
          <PriceWrapper className="col">
            <label htmlFor="phone">Цена</label>
            <h5 className="card-title" id="phone">
              {cost}
            </h5>
          </PriceWrapper>
        </div>
      </div>
      <button 
        className="btn btn-success"
        onClick={() => addBasketQuantity(id, quantity)}>Добавить в корзину</button>
    </ProductWrapper>
  );
};

export default Product;
