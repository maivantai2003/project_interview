using WebAPI.Common;
using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IOrderService
    {
        Task<ApiResponse<IEnumerable<OrderDto>>> GetAllOrders();
        Task<ApiResponse<OrderDto>> GetOrderById(int id);
        Task<ApiResponse<OrderDto>> CreateOrder(OrderCreateDto orderDto);
        Task<ApiResponse<OrderDto>> UpdateOrder(int id, OrderUpdateDto order);
    }
}
