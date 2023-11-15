'use client';

import { useState } from 'react';
import { Filter, NavbarFilter, Pagination, Search } from 'components';

export default function Shop() {
  const [page, setPage] = useState(0);

  const handlePrevPage = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="marketplace">
      <Filter />
      <div className="marketplace__main">
        <Search />
        <NavbarFilter />
        <div className="marketplace__items" />
        <Pagination page={page} prev={handlePrevPage} next={handleNextPage} />
      </div>
    </div>
  );
}
