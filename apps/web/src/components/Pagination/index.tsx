'use client';

import { Icon12ChevronLeft, Icon12ChevronRight } from '@vkontakte/icons';

export function Pagination({ prev, next, page }: any) {
  return (
    <ul className="pagination">
      <li
        className={`pagination__item pagination__chevron pagination__arrowLeft ${
          page === 0 ? ' pagination__disable' : ''
        }`}
        onClick={prev}
      >
        <Icon12ChevronLeft width={16} height={16} />
      </li>
      <li className="pagination__item pagination__active">1</li>
      <li className="pagination__item">2</li>
      <li className="pagination__item">3</li>
      <li
        className="pagination__item pagination__chevron pagination__arrowRight"
        onClick={next}
      >
        <Icon12ChevronRight width={16} height={16} />
      </li>
    </ul>
  );
}
