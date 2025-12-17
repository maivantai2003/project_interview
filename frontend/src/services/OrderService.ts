import type { OrderDto } from "../dtos/order-create.dto"
import type { Order } from "../entities/order.entity"
import { axiosClient } from "../interceptor/axiosClient"

export const OrderService={
    getAllOrders:async():Promise<Order[]>=>{
        const response=await axiosClient.get("orders")
        return response.data
    },
    createOrders:async(orderCreateDto:OrderDto):Promise<boolean>=>{
        const response=await axiosClient.post("orders",orderCreateDto)
        return response.data;
    }
}