import { ChangeEvent, useRef, useState } from 'react';
import { setSearchValue } from 'redux/slice/Filter';
import { useAppDispatch } from 'redux/store';
import { useDebounce } from './debounce';

export function useSearch() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');
  const updateSearchValue = useDebounce(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    return updateSearchValue();
  };

  return {
    value,
    setValue,
    onClickClear,
    handleChange,
    updateSearchValue,
  };
}
