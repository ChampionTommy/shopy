import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

async function fetchProducts() {
  return (await axios.get('https://fakestoreapi.com/products')).data;
}

export function useShopData() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  return data;
}
