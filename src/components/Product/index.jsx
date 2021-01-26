import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addQuantity, addToBasket } from "../../redux/actions/actions";

const ProductWrapper = styled.div`
  position: relative;
  color: #000;
  width: 300px;
  height: 350px;
  background: #fff;
  label {
    font-size: 17px;
  }
`;

const ProductItemWrapper = styled.div`
  text-align: center;
  width: 170px;
  margin: 35px auto;
`;

const PriceWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
`; 

const ImgWrapper = styled.div`
  width: 150px;
  height: 185px;
  margin: 0 auto;
  img{
    width: 155px;
    height: 185px;
  }
`;


const Product = ({ name, cost, id, quantity, img }) => {
  console.log(quantity)
  const basketProducts = useSelector(state => state.products.basketProducts)
  const products = useSelector(state => state.products.products)

  const addBasketQuantity = (id, quantity) => {
    console.log(quantity)
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
          <ImgWrapper>
            <img src={img} alt=""/>
          </ImgWrapper>
          <ProductItemWrapper>
            <h5 className="card-title" id="name">
              {name}
            </h5>
          </ProductItemWrapper>
          <PriceWrapper>
            <h5 className="card-title" id="phone">
              ${cost}
            </h5>
          </PriceWrapper>
      </div>
      <button 
        className="btn btn-success"
        onClick={() => addBasketQuantity(id, quantity)}>Добавить в корзину</button>
    </ProductWrapper>
  );
};

export default Product;
