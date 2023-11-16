'use client';

import { Card, Filter, NavbarFilter, Pagination, Search } from 'components';
import { useGetAllProductsQuery } from 'resources/product/product.api';
import { useTypedSelector } from 'redux/store';
import { Product } from '@types';
import { useEffect, useState } from 'react';

export default function Shop() {
  const [filtering, setFiltering] = useState('');
  const searchResult = useTypedSelector((state) => state.filter);
  const { data, isLoading } = useGetAllProductsQuery(searchResult);

  return (
    <div className="marketplace">
      <Filter />
      <div className="marketplace__main">
        <Search />
        <NavbarFilter />
        <div className="marketplace__items">
          {isLoading
            ? <div>....loading</div>
            : data?.map((obj: Product) => (
              <Card
                key={obj.id}
                title={obj.title}
                price={obj.price}
                images={obj.images}
              />
            ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
