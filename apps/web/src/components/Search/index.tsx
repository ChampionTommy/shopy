'use client';

import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { Icon16CancelCircle, Icon16SearchOutline } from '@vkontakte/icons';
import { setSearchValue } from 'redux/slice/Filter';
import { useAppDispatch } from 'redux/store';
import { debounce } from 'lodash';

export function Search() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className="search input__default">
      <Icon16SearchOutline color="#A3A3A3" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="search--input search--text"
        type="text"
        placeholder="Type to search..."
      />
      {value && (
        <Icon16CancelCircle
          className="search__clear"
          onClick={onClickClear}
        />
      )}
    </div>
  );
}
