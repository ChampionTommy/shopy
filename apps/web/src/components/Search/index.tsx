'use client';

import { useRef } from 'react';
import { Icon16CancelCircle, Icon16SearchOutline } from '@vkontakte/icons';
import { useSearch } from 'hooks/search';

export function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    value,
    onClickClear,
    handleChange,
  } = useSearch();
  return (
    <div className="search input__default">
      <Icon16SearchOutline color="#A3A3A3" />
      <input
        ref={inputRef}
        value={value}
        onChange={handleChange}
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
