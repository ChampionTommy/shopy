'use client';

import { useTypedSelector } from 'redux/store';
import { ProductTabCard } from 'components/CartTab/productTabCard';
import { Product } from '@types';

export default function Cart() {
  const { totalPrice, items } = useTypedSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart__header">
        <span className="cart__header_title">
          My Cart
        </span>
      </div>
      <div className="cart__table">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Unit Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: Product) => (
              <ProductTabCard
                key={item.id}
                id={item.id}
                count={item.count}
                title={item.title}
                price={item.price}
                images={item.images}
              />
            ))}
          </tbody>
        </table>
        <div className="cart__summary">
          <div className="cart__summary_header">
            <h1 role="presentation">Summary</h1>
          </div>
          <div className="cart__summary_body">
            <span className="cart__summary_body__text">Total Price</span>
            <span className="cart__summary_body__price">
              {`${totalPrice} $`}
            </span>
          </div>
          <button
            className="button button__default cart__summary__button"
            type="button"
          >
            Proceed to Ckeckout
          </button>
        </div>
      </div>
    </div>
  );
}
