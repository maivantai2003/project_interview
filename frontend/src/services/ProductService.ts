import type { Product } from "../entities/product.entity";
import { axiosClient } from "../interceptor/axiosClient"

export const ProductService={
    getAllProduct:async():Promise<Product[]>=>{
        const response=await axiosClient.get("products")
        return response.data;
    }
}