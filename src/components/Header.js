import React, { useContext } from 'react';
import { Context } from '../context/Context';
import vimcarLogo from '../design/vimcar-logo.svg';
import cartLogo from '../design/cart.svg';

export default function Header() {
  const { cart, products } = useContext(Context);
  console.log(products);
  return (
    <header className="App-header">
      <img className="logo" src={vimcarLogo} alt="vimcar" />
      <div className="cart">
        <img src={cartLogo} alt="cart" />
        <div>{cart.length}</div>
      </div>
    </header>
  );
}
