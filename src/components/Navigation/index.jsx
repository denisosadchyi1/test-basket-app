import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import {NavigationWrapper, NavigationItem, Item, BasketItem} from './styles';


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
