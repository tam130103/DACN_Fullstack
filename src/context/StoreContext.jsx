// src/context/StoreContext.js
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const updated = { ...prev };
      if (updated[itemId] === 1) delete updated[itemId];
      else updated[itemId] -= 1;
      return updated;
    });
  };

  const foodMap = new Map(food_list.map((product) => [product._id, product]));

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const itemInfo = foodMap.get(itemId);
        if (itemInfo) {
          return total + itemInfo.price * quantity;
        }
      }
      return total;
    }, 0);
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
