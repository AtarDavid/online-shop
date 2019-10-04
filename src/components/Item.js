import React from 'react';

export default function Item(props) {
  const { name, imageSrc } = props;
  const image = require(`../design/${imageSrc}`);
  return (
    <div className="item">
      <div className="image-container">
        <img src={image} alt={name} />
        <div className="add-container">
          <p>Add to Cart</p>
        </div>
      </div>
      <p className="product-name">{name}</p>
    </div>
  );
}
