'use client';

import { Icon12ChevronLeft, Icon12ChevronRight } from '@vkontakte/icons';

export function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination__item pagination__chevron pagination__arrowLeft pagination__disable">
        <Icon12ChevronLeft width={16} height={16} />
      </div>
      <div className="pagination__item pagination__active">1</div>
      <div className="pagination__item">2</div>
      <div className="pagination__item">3</div>
      <div className="pagination__item pagination__chevron pagination__arrowRight">
        <Icon12ChevronRight width={16} height={16} />
      </div>
    </div>
  );
}
