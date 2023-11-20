import Image from 'next/image';
import { useAppDispatch } from 'redux/store';
import { addItem, minusItem, removeItem } from 'redux/slice/Cart';
import { Product } from '@types';
import { Icon12Cancel, Icon16Add, Icon16Minus } from '@vkontakte/icons';

export function ProductTabCard({ id, title, price, count, images }: Product) {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as Product),
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <tr className="cart__table_item">
      <td className="cart__table_item_block">
        <img
          src={images[0]}
          alt="cart_item"
          width={80}
          height={80}
          className="cart__table_item_block_img"
        />
        {title}
      </td>
      <td className="cart__table_price">{`${price} $`}</td>
      <td className="cart__table_quantity">
        <Icon16Minus
          onClick={onClickMinus}
        />
        {count}
        <Icon16Add
          onClick={onClickPlus}
        />
      </td>
      <td
        className="cart__table_remove"
        onClick={onClickRemove}
      >
        <Icon12Cancel width={20} height={20} />
        Remove
      </td>
    </tr>
  );
}
