'use client';

import { Product } from '@types';
import { addItem } from 'redux/slice/Cart';
import { useAppDispatch } from 'redux/store';

export function Card({ title, price, images, id }: Product) {
  const dispatch = useAppDispatch();
  const staticImg = images[0];
  const onClickAdd = () => {
    const item: Product = {
      id,
      title,
      price,
      images,
      count: 0,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="card">
      <div className="card__image">
        <img src={staticImg} alt="shopy_item" />
      </div>
      <div className="card__body">
        <h1>
          {title}
        </h1>
        <div className="card__body_price">
          <span className="card__body_price--text">Price:</span>
          <h1 role="presentation">
            $
            {price}
          </h1>
        </div>
        <button
          className="button button__default card__button"
          type="submit"
          onClick={onClickAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
