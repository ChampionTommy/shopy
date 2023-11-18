import { useState } from 'react';
import { Product } from '@types';

export const usePaginate = (data: Product[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil((data?.length || 0) / recordsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return {
    currentPage,
    setCurrentPage,
    records,
    pageNumbers,
    totalPages,
  };
};
