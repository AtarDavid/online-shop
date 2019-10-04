import React, { useContext } from 'react';
import { Context } from '../context/Context';
import Item from './Item';

export default function Shop() {
  const { products } = useContext(Context);
  return (
    <main>
      {products.map(item => {
        const { id, name, imageSrc, amount } = item;
        return (
          <Item key={`${id}`} name={name} imageSrc={imageSrc} amount={amount} />
        );
      })}
    </main>
  );
}
