'use client';

import { Product } from '@types';
import { Card, Filter, NavbarFilter, Pagination, Search } from 'components';
import { useState } from 'react';
import { useListProductsQuery } from 'services/marketplace.service';

export default function Shop() {
  const [page, setPage] = useState(0);
  const { data = [], isLoading, isFetching } = useListProductsQuery({
    offset: page,
    limit: '6',
  });

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No posts :(</div>;
  }

  return (
    <div className="marketplace">
      <Filter />
      <div className="marketplace__main">
        <Search />
        <NavbarFilter countItems={data.length} />
        <div className="marketplace__items">
          {data?.map((obj: Product) => (
            <Card
              key={obj.id}
              title={obj.title}
              price={obj.price}
              images={obj.images}
            />
          ))}
        </div>
        <Pagination page={page} prev={handlePrevPage} next={handleNextPage} />
      </div>
    </div>
  );
}
