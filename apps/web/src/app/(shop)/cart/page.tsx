"use client";

import { CartTab } from "components/CartTab";
import { HistoryTab } from "components/HistoryTab";
import { useState } from "react";

export default function Cart() {
  const [empty, setEmpty] = useState(true);
  const [cartTabs, setCartTabs] = useState("cart");
  const handleCartTab = () => {
    setCartTabs("cart");
  };
  const handleHistoryTab = () => {
    setCartTabs("history");
  };
  return (
    <div className="cart">
      <div className="cart__header">
        <span
          className={`cart__header_item ${
            cartTabs === "cart" ? "cart__header_item__active" : ""
          }`}
          onClick={handleCartTab}
        >
          My Cart
        </span>
        <span
          className={`cart__header_item ${
            cartTabs === "history" ? "cart__header_item__active" : ""
          }`}
          onClick={handleHistoryTab}
        >
          History
        </span>
      </div>
      {cartTabs === "cart" && <CartTab empty={empty} />}
      {cartTabs === "history" && <HistoryTab />}
    </div>
  );
}
