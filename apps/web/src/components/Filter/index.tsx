"use client";
import { useState } from "react";
import { Icon12CancelOutline } from "@vkontakte/icons";
export const Filter = () => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleFocus = () => {
    setIsActive(true);
  };
  const handleBlur = () => {
    setIsActive(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\$/g, "");
    setInputValue(sanitizedValue);

    if (sanitizedValue.length > 0) {
      setIsActive(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      const updatedValue = inputValue.slice(0, -1);
      const sanitizedValue = updatedValue.replace(/\$/g, "");
      setInputValue(sanitizedValue);

      if (sanitizedValue.length > 0) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  };

  const formattedValue = isActive
    ? `${inputValue}$`
    : inputValue && inputValue != null
    ? `${inputValue}$`
    : "";

  return (
    <div className="filter">
      <div className="filter__header">
        <h1>Filters</h1>
        <span className="filter_btn__reset">
          Reset All<Icon12CancelOutline />
        </span>
      </div>
      <div className="filter__body">
        <div className="filter__item">
          <h6>Price</h6>
          <div className="filter__controllers">
            <div className="input__default filter__controllers_item price">
              <label className="price__label">
                <h5>
                  From:
                </h5>
              </label>
              <input
                className="price__item"
                type="text"
                placeholder="100$"
                value={formattedValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="input__default filter__controllers_item price">
              <label className="price__label">
                <h5>
                  To:
                </h5>
              </label>
              <input
                className="price__item"
                type="text"
                placeholder="1000$"
                value={formattedValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
