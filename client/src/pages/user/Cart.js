import React from 'react';
import CartItemList from './components/CartItemList';

import './Shop.css';

export default function Cart() {
  return (
    <div className='shopContainer'>
      <div className='itemContainer'>
        <CartItemList />
      </div>
    </div>
  );
}
