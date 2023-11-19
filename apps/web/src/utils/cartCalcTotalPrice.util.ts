import { Product } from '@types';

export function calcTotalPrice(items: Product[]): number {
  return items.reduce((total, item) => total + (+item.price * (item.count || 1)), 0);
}
