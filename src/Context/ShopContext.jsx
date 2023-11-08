import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItem] = useState([]);

  const addToCart = (product) => {
    setCartItem((prev) => [...prev,product]);
  };

  const removeFromCart = (itemId) => {
    const newCartItems = cartItems.filter((item)=>item.id !== itemId);
    setCartItem(newCartItems)
  };

  const getSubTotalPrice = () => {
    const totalOldPrice = cartItems.reduce((acc, product) => {
      return acc + (product.old_price || 0); // Eğer old_price tanımsızsa, 0 olarak kabul et
  }, 0);

  return totalOldPrice;
  }

  const getTotalCartAmount = () => {
    const totalNewPrice = cartItems.reduce((acc, product) => {
      return acc + (product.new_price || 0); // Eğer old_price tanımsızsa, 0 olarak kabul et
  }, 0);

  return totalNewPrice;
  }

  const getTotalCartItems = () => {
      let totalItem = 0;
      for(const item in cartItems){
        if(cartItems[item > 0]){
          totalItem+= cartItems(item);
        }
      }
      return totalItem;
  }

  const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart,getSubTotalPrice };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
