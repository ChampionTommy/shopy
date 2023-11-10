'use client';

import { Icon12CancelOutline } from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter, setFrom, setTo } from 'redux/slice/Filter';
import { AppDispatch, RootState } from 'redux/store';

export function Filter() {
  const dispatch = useDispatch<AppDispatch>();
  const values = useSelector((state: RootState) => state.filter);
  const handleFromChange = (value: string) => dispatch(setFrom(value));
  const handleToChange = (value: string) => dispatch(setTo(value));
  const handleReset = () => dispatch(resetFilter());
  return (
    <div className="filter">
      <div className="filter__header">
        <h1>Filters</h1>
        {values.isEmpty === false
          ? (
            <span className="filter_btn__reset" onClick={handleReset} role="button" tabIndex={0}>
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
                value={values.from || ''}
                onChange={(e) => handleFromChange(e.target.value)}
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
                value={values.to || ''}
                onChange={(e) => handleToChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
