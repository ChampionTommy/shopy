'use client';

import { PriceFilterState } from '@types';
import { Icon12CancelOutline } from '@vkontakte/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  resetPriceFilter,
  setPriceMax,
  setPriceMin,
  updatePriceFilter,
} from 'redux/slice/Filter';
import { RootState, useAppDispatch } from 'redux/store';

export function Filter() {
  const dispatch = useAppDispatch();
  const [price, setPrice] = useState<PriceFilterState>({
    minPrice: '',
    maxPrice: '',
    isFrozen: false,
  });
  const values = useSelector((state: RootState) => state.filter);

  const handleResetFilter = () => {
    dispatch(resetPriceFilter());
  };
  const handleApplyParams = () => {
    dispatch(updatePriceFilter(price));
  };

  useEffect(() => {
    setPrice(values);
  }, [values]);
  return (
    <div className="filter">
      <div className="filter__header">
        <h1>Filters</h1>
        {values.isFrozen
          ? (
            <span
              className="filter_btn__reset"
              onClick={handleResetFilter}
              role="button"
              tabIndex={0}
            >
              Reset All
              <Icon12CancelOutline />
            </span>
          )
          : null}
      </div>
      <div className="filter__body">
        <div className="filter__item">
          <h6>Price</h6>
          <div className="filter__controllers">
            <div
              className={`input__default filter__controllers_item price${
                values.isFrozen ? ' input__default_disabled' : ''
              }`}
            >
              <label className="price__label">
                <h5>
                  From:
                </h5>
              </label>
              <input
                className="price__item"
                type="number"
                placeholder="100$"
                name="minPrice"
                value={values.minPrice || ''}
                onChange={(e) => dispatch(setPriceMin(e.target.value))}
                disabled={values.isFrozen}
              />
            </div>
            <div
              className={`input__default filter__controllers_item price${
                values.isFrozen ? ' input__default_disabled' : ''
              }`}
            >
              <label className="price__label">
                <h5>
                  To:
                </h5>
              </label>
              <input
                className="price__item"
                type="number"
                name="maxPrice"
                placeholder="1000$"
                value={values.maxPrice || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setPriceMax(e.target.value))}
                disabled={values.isFrozen}
              />
            </div>
          </div>
        </div>
      </div>
      {values.isFrozen === false
        ? (
          <button
            className="button button__default filter_btn_apply"
            type="button"
            onClick={handleApplyParams}
          >
            Apply Parameters
          </button>
        )
        : null}
    </div>
  );
}
