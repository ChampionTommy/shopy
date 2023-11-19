'use client';

import { HistoryTab } from 'components/HistoryTab';
import { useState } from 'react';
import { CartTab } from 'components';

export default function Cart() {
  const [cartTabs, setCartTabs] = useState('cart');
  const handleCartTab = () => {
    setCartTabs('cart');
  };
  const handleHistoryTab = () => {
    setCartTabs('history');
  };
  return (
    <div className="cart">
      <div className="cart__header">
        <span
          className={`cart__header_item ${
            cartTabs === 'cart' ? 'cart__header_item__active' : ''
          }`}
          role="button"
          tabIndex={0}
          onClick={handleCartTab}
        >
          My Cart
        </span>
        <span
          className={`cart__header_item ${
            cartTabs === 'history' ? 'cart__header_item__active' : ''
          }`}
          role="button"
          tabIndex={0}
          onClick={handleHistoryTab}
        >
          History
        </span>
      </div>
      {cartTabs === 'cart' && <CartTab />}
      {cartTabs === 'history' && <HistoryTab />}
    </div>
  );
}
