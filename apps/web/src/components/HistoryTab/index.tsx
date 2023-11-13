'use client';

import Image from 'next/image';
import { ShopyItem } from 'public/images';

export function HistoryTab() {
  return (
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
          <tr className="cart__table_item">
            <td className="cart__table_item_block">
              <Image
                src={ShopyItem}
                alt="cart_item"
                width={80}
                height={80}
                className="cart__table_item_block_img"
              />
              DJI Pocket 2 Creator Combo
            </td>
            <td className="cart__table_price">$499</td>

            <td className="cart__table_date">
              16.10.99
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
