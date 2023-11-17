'use client';

import { Card, Filter, NavbarFilter, Pagination, Search } from 'components';
import { useGetAllProductsQuery } from 'resources/product/product.api';
import { useTypedSelector } from 'redux/store';
import { Product } from '@types';
import { useState } from 'react';

export default function Shop() {
  const searchResult = useTypedSelector((state) => state.filter);
  const { data, isLoading } = useGetAllProductsQuery(searchResult);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil((data?.length || 0) / recordsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const goToPreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
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
          currentPage={currentPage}
          changeCPage={goToPage}
          nextPage={goToNextPage}
          prePage={goToPreviousPage}
          numbers={pageNumbers}
        />
      </div>
    </div>
  );
}
