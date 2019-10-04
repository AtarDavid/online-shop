import React, { useContext } from 'react';
import { Context } from '../context/Context';
import Item from './Item';

export default function Shop() {
  const { products } = useContext(Context);
  return (
    <main>
      {products.map(item => {
        const { id, name, imageSrc } = item;
        return <Item key={`${id}`} name={name} imageSrc={imageSrc} />;
      })}
    </main>
  );
}
