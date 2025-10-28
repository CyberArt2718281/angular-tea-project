export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
}

export interface FormData {
  name: string;
  last_name: string;
  phone: string;
  country: string;
  zip: string;
  product: string;
  address: string;
  comment?: string;
}
