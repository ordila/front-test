export interface ProductImage {
  id: number;
  productId: number;
  imageUrl: string;
  isDefault: boolean;
}

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  price: number;
  discount: number;

  images: ProductImage[];
}
