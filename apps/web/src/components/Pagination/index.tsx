// react/jsx-no-useless-fragment

import { PaginationProp } from '@types';
import { Icon12ChevronLeft, Icon12ChevronRight } from '@vkontakte/icons';

export function Pagination(
  { numbers, currentPage, setPage, totalPages }: PaginationProp,
) {
  const goToPreviousPage = () => {
    if (currentPage !== 1) {
      setPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== totalPages) {
      setPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <ul className="pagination">
      <li
        className={`pagination__item pagination__chevron pagination__arrowLeft ${
          currentPage === 1 ? ' pagination__disable' : ''
        }`}
        onClick={goToPreviousPage}
      >
        <Icon12ChevronLeft width={16} height={16} />
      </li>
      {numbers.map((v: number, i: number) => (
        <li
          key={v}
          className={`pagination__item ${
            currentPage === v ? 'pagination__active' : ''
          }`}
          onClick={() => goToPage(v)}
        >
          {v}
        </li>
      ))}
      <li
        className="pagination__item pagination__chevron pagination__arrowRight"
        onClick={goToNextPage}
      >
        <Icon12ChevronRight width={16} height={16} />
      </li>
    </ul>
  );
}
