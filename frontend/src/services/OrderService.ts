import type { OrderDto } from "../dtos/order-create.dto"
import type { Order } from "../entities/order.entity"
import { axiosClient } from "../interceptor/axiosClient"
import type { ApiResponse } from "../types/api-response"

export const OrderService={
    getAllOrders:async():Promise<Order[]>=>{
        const response=await axiosClient.get("orders")
        return response.data
    },
    createOrders:async(orderCreateDto:OrderDto):Promise<ApiResponse<Order>>=>{
        const response=await axiosClient.post<ApiResponse<Order>>("orders",orderCreateDto)
        return response.data;
    }
}