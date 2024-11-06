import {
  ProductWithDefaultImageDto,
  ProductWithDefaultImageSchema,
  WishListItemDto,
  WishListItemSchema,
} from "@/dto";
import { axiosInstance } from "@/utils";

export class WishListService {
  static async getAllWishList(): Promise<ProductWithDefaultImageDto[]> {
    const { data } = await axiosInstance.get("/wish-list");

    const products = ProductWithDefaultImageSchema.array().parse(data);

    return products;
  }

  static async addToWishList(productId: string): Promise<WishListItemDto> {
    const { data } = await axiosInstance.post(`wish-list/${productId}`);

    const products = await WishListItemSchema.parse(data);

    return products;
  }

  static async removeFromWishList(productId: string): Promise<WishListItemDto> {
    const { data } = await axiosInstance.delete(`wish-list/${productId}`);
    return data;
  }

  static async removeAllFromWishList() {
    await axiosInstance.delete("wish-list");
  }
}
