'use client';

import { Product } from '@types';
import { Icon20AddCircle, Icon24DeleteOutline } from '@vkontakte/icons';
import { Pagination } from 'components';
import { usePaginate } from 'hooks/paginate';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from 'resources/product/product.api';

export default function Collections() {
  const pathname = usePathname();
  const { data, isLoading } = useGetAllProductsQuery({
    minPrice: '',
    maxPrice: '',
    searchValue: '',
  });
  const [deleteProduct, { isError }] = useDeleteProductMutation();

  const handleDeleteClick = (productId: number) => {
    const confirmDelete = window.confirm( // eslint-disable-line no-alert
      'Are you sure you want to delete this product?',
    );
    if (confirmDelete) {
      deleteProduct(productId).unwrap();
    }
  };
  const {
    currentPage,
    setCurrentPage,
    records,
    pageNumbers,
    totalPages,
  } = usePaginate(data);
  return (
    <div className="collections">
      <span className="collections__title">Your Products</span>
      <div className="collections__list">
        <Link
          href={`${pathname}/create`}
          className="collections__item collections__item_add"
        >
          <Icon20AddCircle width={40} height={40} color="#2B77EB" />
          <span className="collections__item_add__text">New Product</span>
        </Link>
        {records?.map((obj: Product) => (
          <div key={obj.id} className="collections__item">
            <div className="collections__item__contollers">
              <div
                role="button"
                tabIndex={0}
                className="collections__controllers--delete"
                onClick={() => handleDeleteClick(obj.id)}
              >
                <Icon24DeleteOutline color="#A3A3A3" />
              </div>
              <div className="collections__controllers--tipSold">
                Sold
              </div>
            </div>
            <img
              src={obj.images[0]}
              alt="shopy_item"
              width={274}
              height={174}
            />
            <div className="collections__item_body">
              <h2>{obj.title}</h2>
              <div className="collections__item_body_price">
                <span className="collections__item_body_price__text">
                  Price:
                </span>
                <span className="collections__item_body_price__count">
                  {`${obj.price} $`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        setPage={setCurrentPage}
        currentPage={currentPage}
        numbers={pageNumbers}
        totalPages={totalPages}
      />
    </div>
  );
}
