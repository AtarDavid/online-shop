import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../context/Context';

export default function Item(props) {
  const { name, imageSrc, amount } = props;
  const [count, setCount] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);
  const { addProductToCart } = useContext(Context);
  const image = require(`../design/${imageSrc}`);

  useEffect(() => {
    if (count >= amount) {
      setIsAvailable(false);
    }
  }, [amount, count]);

  const handleClick = () => {
    if (count >= amount) {
      alert('nope');
    } else {
      setCount(count + 1);
      addProductToCart();
    }
  };

  return (
    <div className="item">
      <div className="image-container">
        <img src={image} alt={name} />
        {isAvailable && (
          <div
            className="add-container"
            onClick={() => {
              handleClick();
            }}
          >
            <p>Add to Cart</p>
          </div>
        )}
        {!isAvailable && (
          <div className="not-available-container">
            <p>Product is currently unavailable</p>
          </div>
        )}
      </div>
      <p className="product-name">{name}</p>
    </div>
  );
}
