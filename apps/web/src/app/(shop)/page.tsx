'use client';

import { Card, Filter, NavbarFilter, Pagination, Search } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { shopApi } from 'resources/Shop';

export default function Shop() {
  const values = useSelector((state: RootState) => state.filter);
  const data = shopApi.useShopData();
  return (
    <div className="marketplace">
      <Filter />
      <div className="marketplace__main">
        <Search />
        <NavbarFilter />
        <div className="marketplace__items">
          {data?.map((obj: any) => <Card key={obj.id} title={obj.title} price={obj.price} />)}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
