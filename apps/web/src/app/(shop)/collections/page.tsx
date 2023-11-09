"use client";
import { Icon20AddCircle, Icon24DeleteOutline } from "@vkontakte/icons";
import Image from "next/image";
import { ShopyItem } from "public/images";
export default function Collections() {
  return (
    <div className="collections">
      <span className="collections__title">Your Products</span>
      <div className="collections__list">
        <div className="collections__item collections__item_add">
          <Icon20AddCircle width={40} height={40} color="#2B77EB" />
          <span className="collections__item_add__text">New Product</span>
        </div>
        <div className="collections__item">
          <div className="collections__item__delete">
            <Icon24DeleteOutline color="#A3A3A3" />
          </div>
          <div className="collections__item__tip">
            On sale
          </div>
          <Image src={ShopyItem} alt="shopy_item" width={274} height={174} />
          <div className="collections__item_body">
            <h2>DJI Mini 3 Pro (DJI RC)</h2>
            <div className="collections__item_body_price">
              <span className="collections__item_body_price__text">Price:</span>
              <span className="collections__item_body_price__count">$1158</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
