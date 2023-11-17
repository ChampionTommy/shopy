import { debounce } from 'lodash';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { resetPriceFilter, updatePriceFilter } from 'redux/slice/Filter';
import { RootState, useAppDispatch } from 'redux/store';

export function useFilter() {
  const dispatch = useAppDispatch();
  const values = useSelector((state: RootState) => state.filter);
  const [priceValues, setPriceValues] = useState({
    minPrice: '',
    maxPrice: '',
  });

  const handleResetFilter = () => {
    dispatch(resetPriceFilter());
    setPriceValues({ minPrice: '', maxPrice: '' });
  };

  const updateSearchFilter = useCallback(
    debounce(() => {
      dispatch(updatePriceFilter(priceValues));
    }, 150),
    [dispatch, updatePriceFilter, priceValues],
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPriceValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  return { values, onChangeInput, updateSearchFilter, handleResetFilter, priceValues };
}
