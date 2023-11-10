'use client';

import { MouseEventHandler, useState } from 'react';
import { Icon20SortOutline, Icon24ChevronDown } from '@vkontakte/icons';

type SortItem = {
  name: string;
};

const sortList = [
  { name: 'Sort by newest' },
  { name: 'Sort by oldest' },
];
export function Poppup() {
  const [sortValue, setSortValue] = useState('');
  const [openPoppup, setOpenPoppup] = useState(false);

  const handleSort = () => {
    setOpenPoppup(!openPoppup);
  };

  const onClickListItem = () => {
    setOpenPoppup(!openPoppup);
  };

  return (
    <div className="navbar__poppup_sort">
      <Icon20SortOutline />
      <div className="navbar__poppup_sort__block">
        <span
          className="navbar__poppup_sort__block--title"
          onClick={handleSort}
          role="button"
          tabIndex={0}
        >
          {sortValue === '' ? 'Sort by newest' : sortValue}
        </span>
        {openPoppup && (
          <ul>
            {sortList.map((obj) => (
              <li
                key={obj.name}
                onClick={onClickListItem}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onClickListItem();
                  }
                }}
                role="presentation"
              >
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Icon24ChevronDown width={20} height={20} color="#A3A3A3" />
    </div>
  );
}
