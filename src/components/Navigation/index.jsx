import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";

const NavigationWrapper = styled.div`
  a{
    color: #fff;
    text-decoration: none;
    /* color: #000; */
    font-size: 20px;
    font-weight: 700;
  }
  a:hover{
    color: yellow;
  }
`;

const NavigationItem = styled.nav`
  /* background-color: #e6dcdc; */
  background:  #007bff;
`;

const Item = styled.div`
  padding: 10px 0;
  width: 100px;
`;

const BasketItem = styled.div`
  padding: 10px 0;
  width: 120px;
  display: flex;
  justify-content: space-between;
  p{
    color: #fff;
    font-weight: 800;
    font-size: 17px;
    margin-top: 3px;
  }
`;


const Navigation = () => {
  const countOfProducts = useSelector(state => state.products.basketProducts.length)
  const pricesAndQuantity= useSelector(state => state.products.basketProducts)
  let totalPrice = 0
  let totalQuantity = 0
  pricesAndQuantity.map(product => {
    totalPrice = totalPrice + product.cost * product.quantity
    totalQuantity = totalQuantity + product.quantity
  })
  return (
    <NavigationWrapper>
      <NavigationItem className="navbar navbar-expand-lg navbar-light">
        <div className="container-md">
          <Item>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </Item>
          <Item>
            <BasketItem>
              <NavLink to="/basket">
              <FontAwesomeIcon icon={faShoppingBasket} />
              </NavLink>
              {
                countOfProducts === 0  
                ? '' 
                : <div><p>{totalQuantity} ({totalPrice}$)</p></div>
              }
            </BasketItem>
          </Item>
        </div>
      </NavigationItem>
    </NavigationWrapper>
  );
};

export default Navigation;
