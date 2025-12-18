import type { CartItem } from "../types/order-item.type";
export interface Order {
  orderId: number;
  totalAmount: number;
  orderDate: Date;
  items: CartItem[];
};