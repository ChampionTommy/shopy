"use client";
import Image from "next/image";
import { ShopyItem } from "public/images";

export const Card = (obj: any) => {
  return (
    <div className="card">
      <div className="card__image">
        <Image src={ShopyItem} alt="shopy_item" width={1000} height={1000} />
      </div>
      <div className="card__body">
        <h1>{obj.name}</h1>
        <div className="card__body_price">
          <span className="card__body_price--text">Price:</span>
          <h1>$1,591</h1>
        </div>
        <button className="button button__default card__button" type="submit">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
