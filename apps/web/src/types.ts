import { StaticImageData } from 'next/image';
import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface ButtonProps {
  name: string;
  type: 'default' | 'secondary' | 'ghost';
  size: 'large' | 'medium' | 'small';
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  title: string;
  id: string;
  name: any;
  register: UseFormRegister<FieldValues>;
}

export interface PriceFilterState {
  minPrice: string;
  maxPrice: string;
  isFrozen: boolean;
  searchValue?: string;
}
export interface Product {
  id?: number;
  title: string;
  price: string;
  category?: string;
  description?: string;
  images: any;
  creationAt?: string,
  updatedAt?: string,
}

export type CardErrors = {
  status: string;
};

type Button = {
  url: string;
  title: string;
};

export interface StatusData {
  image: StaticImageData | null;
  title: string;
  subtitle: string;
  button: Button;
}

export type HandleStatusType = 'empty' | 'failed' | 'successfull';

export type HandleStatusResponse = {
  data: StatusData;
};
