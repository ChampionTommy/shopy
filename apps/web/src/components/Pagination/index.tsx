'use client';

import { Icon12ChevronLeft, Icon12ChevronRight } from '@vkontakte/icons';

export function Pagination(
  { numbers, currentPage, prePage, nextPage, changeCPage }: any,
) {
  return (
    <ul className="pagination">
      <li
        className={`pagination__item pagination__chevron pagination__arrowLeft ${
          currentPage === 0 ? ' pagination__disable' : ''
        }`}
        onClick={prePage}
      >
        <Icon12ChevronLeft width={16} height={16} />
      </li>
      {numbers.map((n: number) => (
        <li
          key={n}
          className={`pagination__item ${
            currentPage === n ? 'pagination__active' : ''
          }`}
          onClick={() => changeCPage(n)}
        >
          {n}
        </li>
      ))}
      <li
        className="pagination__item pagination__chevron pagination__arrowRight"
        onClick={nextPage}
      >
        <Icon12ChevronRight width={16} height={16} />
      </li>
    </ul>
  );
}
