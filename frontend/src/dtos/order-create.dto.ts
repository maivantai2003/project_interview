import type { OrderItemDto } from "./order-item.dto"

export interface OrderDto{
    totalAmount:number
    total:number
    items:OrderItemDto[]
}