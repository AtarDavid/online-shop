import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../context/Context';

export default function Item(props) {
  const { name, imageSrc } = props;
  const [isAvailable, setIsAvailable] = useState(false);
  const { addProductToCart } = useContext(Context);
  const image = require(`../design/${imageSrc}`);
  const randomFetch = require('../api/mock');

  useEffect(() => {
    // Check availability using the mock and set isAvailable state to true when the response returns status 204
    randomFetch('https://example.com/-/v1/stock/reserve', {
      method: 'POST',
    })
      .then(value => Promise.resolve(value))
      .then(res => setIsAvailable(res.ok));
  }, [randomFetch]);

  return (
    <div className="item">
      <div className="image-container">
        <img src={image} alt={name} />
        {/* Render Add button when product is available, otherwise render alternative text */}
        {isAvailable && (
          <div
            className="add-container"
            onClick={() => {
              addProductToCart();
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
