'use client';

import { Product } from '@types';
import Image from 'next/image';

export function Card({ title, price, images }: Product) {
  const staticImg = images[0];
  return (
    <div className="card">
      <div className="card__image">
        <img src={staticImg} alt="shopy_item" width={1000} height={1000} />
      </div>
      <div className="card__body">
        <div className="card__body-title">
          <h1>
            {title}
          </h1>
        </div>
        <div className="card__body_price">
          <span className="card__body_price--text">Price:</span>
          <h1 role="presentation">
            $
            {price}
          </h1>
        </div>
        <button className="button button__default card__button" type="submit">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
