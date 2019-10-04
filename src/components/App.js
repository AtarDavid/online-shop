import React from 'react';
import '../scss/App.scss';
import vimcarLogo from '../design/vimcar-logo.svg';
import cartLogo from '../design/cart.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={vimcarLogo} />
        <div className="cart">
          {/* TODO: Show number of added items */}
          <img src={cartLogo} />
        </div>
      </header>
      <main>
        {/* TODO: Fetch Items */}
        <p>Hello world</p>
      </main>
    </div>
  );
}

export default App;
