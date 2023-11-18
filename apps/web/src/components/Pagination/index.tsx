// react/jsx-no-useless-fragment

'use client';

import { Icon12ChevronLeft, Icon12ChevronRight } from '@vkontakte/icons';

export function Pagination(
  { numbers, currentPage, setPage, totalPages }: any,
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
    <div>
      {totalPages !== 1
        ? (
          <ul className="pagination">
            <li
              className={`pagination__item pagination__chevron pagination__arrowLeft ${
                currentPage === 1 ? ' pagination__disable' : ''
              }`}
              onClick={goToPreviousPage}
            >
              <Icon12ChevronLeft width={16} height={16} />
            </li>
            {numbers.map((n: number) => (
              <li
                key={n}
                className={`pagination__item ${
                  currentPage === n ? 'pagination__active' : ''
                }`}
                onClick={() => goToPage(n)}
              >
                {n}
              </li>
            ))}
            <li
              className="pagination__item pagination__chevron pagination__arrowRight"
              onClick={goToNextPage}
            >
              <Icon12ChevronRight width={16} height={16} />
            </li>
          </ul>
        )
        : null}
    </div>
  );
}
