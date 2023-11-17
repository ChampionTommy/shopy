import { debounce } from 'lodash';
import { useCallback } from 'react';
import { setSearchValue } from 'redux/slice/Filter';
import { useAppDispatch } from 'redux/store';

export function useDebounce(value: string, delay?: number) {
  const dispatch = useAppDispatch();

  const updateDebounceValue = useCallback(
    debounce(() => {
      dispatch(setSearchValue(value));
    }, delay),
    [],
  );

  return updateDebounceValue;
}
