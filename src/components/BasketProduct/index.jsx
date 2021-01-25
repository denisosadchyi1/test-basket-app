import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  addBasketQuantity,
  addQuantity,
  subBasketQuantity,
} from "../../redux/actions/actions";

const BasketProductWrapper = styled.div`
  width: 550px;
  height: 150px;
`;

const CardWrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;

const AmountWrapper = styled.div`
  width: 130px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  h5 {
    margin-top: 5px;
    font-weight: 700;
    font-size: 22px;
  }
`;

const ProductNameWrapper = styled.div`
  width: 190px;
  margin-top: 30px;
  margin-left: 10px;
  h5{
    font-size: 20px;
  }
`;

const ProductPrice = styled.div`
  width: 170px;
  margin-top: 20px;
`;

const ImgWrapper = styled.div`
  width: 170px;
  height: 100px;
  margin: 0 auto;
  img {
    width: 90px;
    height: 110px;
  }
`;

const BasketProduct = ({ name, cost, quantity, id, img }) => {
  const Quantity = useSelector((state) => state.products.basketProducts);
  let test_quantity = 0;
  Quantity.map((product) => {
    if (product.id === id) {
      test_quantity = test_quantity + product.quantity;
    }
  });
  const dispatch = useDispatch();
  return (
    <BasketProductWrapper className="card mt-3">
      <CardWrapper className="card-body">
        <ImgWrapper>
          <img src={img} alt="" />
        </ImgWrapper>
        <ProductNameWrapper>
          <h5 className="card-title" id="name">
            {name}
          </h5>
        </ProductNameWrapper>
        <ProductPrice>
          <label htmlFor="phone">Цена</label>
          <h5 className="card-title" id="phone">
            ${cost * quantity}
          </h5>
        </ProductPrice>
        <div>
          <AmountWrapper>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(subBasketQuantity(id, quantity))}
              >
                -
              </button>
            </div>
            <div>
              <h5 className="card-title" id="phone">
                {test_quantity}
              </h5>
            </div>
            <div>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addQuantity(id))}
              >
                +
              </button>
            </div>
          </AmountWrapper>
        </div>
      </CardWrapper>
    </BasketProductWrapper>
  );
};

export default BasketProduct;
