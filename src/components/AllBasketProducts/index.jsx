import React from "react";
import { useSelector } from "react-redux";
import BasketProduct from "../BasketProduct";
import { AllBasketProductsWrapper } from "./styles";

const AllBasketProducts = () => {
  const basketProducts = useSelector((state) => state.products.basketProducts);
  return (
    <AllBasketProductsWrapper>
      <div className="col">
        {basketProducts.map((product) => (
          <div
            className="col-sm-3 mb-4"
            key={Date.now() + product.id + Math.random()}
          >
            <BasketProduct
              name={product.name}
              cost={product.cost}
              id={product.id}
              quantity={product.quantity}
              img={product.url}
            />
          </div>
        ))}
      </div>
    </AllBasketProductsWrapper>
  );
};

export default AllBasketProducts;
