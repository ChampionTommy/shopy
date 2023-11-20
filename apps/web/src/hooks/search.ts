import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { setSearchValue } from 'redux/slice/Filter';
import { useAppDispatch } from 'redux/store';
import { useDebounce } from './debounce';

export function useSearch() {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');
  const updateSearchValue = useDebounce(value);
  const inputDiv = useRef(null);
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
  useEffect(() => {
    const handleFocus = () => {
      setIsActive(true);
    };

    const handleBlur = () => {
      setIsActive(false);
    };

    const inputElement = inputRef.current;

    if (inputElement) {
      inputElement.addEventListener('focus', handleFocus);
      inputElement.addEventListener('blur', handleBlur);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('focus', handleFocus);
        inputElement.removeEventListener('blur', handleBlur);
      }
    };
  }, []);
  return {
    value,
    setValue,
    onClickClear,
    handleChange,
    updateSearchValue,
    inputRef,
    inputDiv,
    isActive,
  };
}
