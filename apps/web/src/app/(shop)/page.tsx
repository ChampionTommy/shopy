'use client';

import { useState } from 'react';
import { Card, Filter, NavbarFilter, Pagination, Search } from 'components';
import { useGetAllProductsQuery } from 'resources/Marketplace/api';
import { Product } from '@types';

export default function Shop() {
  const [page, setPage] = useState(0);
  const [searchResult, setSearchResult] = useState('');
  const { data, isLoading } = useGetAllProductsQuery(searchResult);
  const handleSearchResult = (value: string) => setSearchResult(value);
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
        <Search valueSearch={handleSearchResult} />
        <NavbarFilter />
        <div className="marketplace__items">
          {isLoading
            ? <div>....loading</div>
            : data?.map((obj: Product) => (
              <Card title={obj.title} price={obj.price} images={obj.images} />
            ))}
        </div>
        <Pagination page={page} prev={handlePrevPage} next={handleNextPage} />
      </div>
    </div>
  );
}
