'use client';

import { Filter, NavbarFilter, Pagination, Search, Card } from 'components';

const ItemList = [
  { name: 'DJI Air 3', price: '1549' },
  { name: 'DJI Air 3', price: '1549' },
  { name: 'DJI Air 3', price: '1549' },
  { name: 'DJI Air 3', price: '1549' },
  { name: 'DJI Air 3', price: '1549' },
  { name: 'DJI Air 3', price: '1549' },
];
export default function Shop() {
  return (
    <div className="marketplace">
      <Filter />
      <div className="marketplace__main">
        <Search />
        <NavbarFilter />
        <div className="marketplace__items">
          {ItemList.map((obj) => <Card key={obj} title={obj.name} price={obj.price} />)}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
