import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, subBasketQuantity } from "../../redux/actions/actions";
import {
  BasketProductWrapper,
  CardWrapper,
  ImgWrapper,
  ProductNameWrapper,
  ProductPrice,
  AmountWrapper,
} from "./styles";

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
          <img src={img} alt="Product img" />
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
