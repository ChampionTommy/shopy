'use client';

import { Icon16CancelCircle, Icon16SearchOutline } from '@vkontakte/icons';
import { useSearch } from 'hooks/search';

export function Search() {
  const {
    value,
    onClickClear,
    handleChange,
    inputRef,
    inputDiv,
    isActive,
  } = useSearch();
  return (
    <div
      ref={inputDiv}
      className={`search input__default ${
        isActive ? 'input__default_active' : ''
      } `}
    >
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
