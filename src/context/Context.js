import React, { useState, useEffect } from 'react';
export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = url => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(products => setProducts(products));
  };

  const addProductToCart = () => {
    setCart(cart + 1);
  };

  useEffect(() => {
    fetchProducts('products.json');
  }, []);

  return (
    <Context.Provider value={{ products, cart, addProductToCart }}>
      {children}
    </Context.Provider>
  );
}
