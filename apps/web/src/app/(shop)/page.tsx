'use client';

import { Card, Filter, NavbarFilter, Pagination, Search } from 'components';
import { useGetAllProductsQuery } from 'resources/product/product.api';
import { useTypedSelector } from 'redux/store';
import { Product } from '@types';
import { usePaginate } from 'hooks/paginate';

export default function Shop() {
  const searchResult = useTypedSelector((state) => state.filter);
  const { data, isLoading } = useGetAllProductsQuery(searchResult);
  const {
    currentPage,
    setCurrentPage,
    records,
    pageNumbers,
    totalPages,
  } = usePaginate(data);
  return (
    <div className="marketplace">
      <Filter />
      <div className="marketplace__main">
        <Search />
        <NavbarFilter />
        <div className="marketplace__items">
          {isLoading
            ? <div>....loading</div>
            : records?.map((obj: Product) => (
              <Card
                key={obj.id}
                title={obj.title}
                price={obj.price}
                images={obj.images}
              />
            ))}
        </div>
        <Pagination
          setPage={setCurrentPage}
          currentPage={currentPage}
          numbers={pageNumbers}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
