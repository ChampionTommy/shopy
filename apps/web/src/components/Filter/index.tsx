'use client';

import { Icon12CancelOutline } from '@vkontakte/icons';
import { debounce } from 'lodash';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { resetPriceFilter, updatePriceFilter } from 'redux/slice/Filter';
import { RootState, useAppDispatch } from 'redux/store';

export function Filter() {
  const dispatch = useAppDispatch();
  const values = useSelector((state: RootState) => state.filter);

  const handleResetFilter = () => {
    dispatch(resetPriceFilter());
  };

  const [priceValues, setPriceValues] = useState({
    minPrice: '',
    maxPrice: '',
  });
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const updateSearchFilter = useCallback(
    debounce(() => {
      if (shouldUpdate) {
        dispatch(updatePriceFilter(priceValues));
        setShouldUpdate(false);
      }
    }, 150),
    [shouldUpdate, dispatch, priceValues],
  );

  const onChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPriceValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setShouldUpdate(true);
  }, []);
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
                value={priceValues.minPrice}
                onChange={onChangeInput}
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
                value={priceValues.maxPrice}
                onChange={onChangeInput}
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
            onClick={updateSearchFilter}
          >
            Apply Parameters
          </button>
        )
        : null}
    </div>
  );
}
