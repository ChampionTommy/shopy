'use client';

import { Post } from '@types';
import { Card, Filter, NavbarFilter, Pagination, Search } from 'components';
import { useListProductsQuery } from 'services/marketplace.service';

export default function Shop() {
  const { data = [], isLoading, isFetching } = useListProductsQuery();
  const count = 12;

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
        <NavbarFilter countItems={count} />
        <div className="marketplace__items">
          {data?.map((obj: Post) => (
            <Card key={obj.id} title={obj.title} price={obj.price} />
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
