// eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role

'use client';

import Image from 'next/image';
import { ShopyItem } from 'public/images';
import { Icon12Cancel, Icon16Add, Icon16Minus } from '@vkontakte/icons';
import { ErrorInfoCard } from 'components/ErrorInfoCard';

export function CartTab({ empty }: any) {
  return (
    <div>
      {empty
        ? (
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
                  <td className="cart__table_quantity">
                    <Icon16Minus />
                    1
                    <Icon16Add />
                  </td>

                  <td>
                    <span className="cart__table_remove">
                      <Icon12Cancel width={20} height={20} />
                      Remove
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="cart__summary">
              <div className="cart__summary_header">
                <h1 role="presentation">Summary</h1>
              </div>
              <div className="cart__summary_body">
                <span className="cart__summary_body__text">Total Price</span>
                <span className="cart__summary_body__price">$1929</span>
              </div>
              <button
                className="button button__default cart__summary__button"
                type="button"
              >
                Proceed to Ckeckout
              </button>
            </div>
          </div>
        )
        : <ErrorInfoCard status="failed" />}
    </div>
  );
}
