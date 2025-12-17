import type { Product } from "../entities/product.entity";

export type CartItem = Product & { quantity: number,unitPrice:number };