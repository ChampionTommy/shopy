import { Product } from '@types';
import { calcTotalPrice } from './cartCalcTotalPrice.util';

export const getCartFromLS = () => {
  if (typeof localStorage !== 'undefined') {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);

    return {
      items: items as Product[],
      totalPrice,
    };
  }

  return {
    items: [],
    totalPrice: 0,
  };
};
