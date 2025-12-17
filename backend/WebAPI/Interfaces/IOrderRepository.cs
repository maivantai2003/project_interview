using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IOrderRepository
    {
        Task<IEnumerable<OrderDto>> GetAllOrders();
        Task<Order?> GetOrderById(int id);
        Task CreateOrder(Order order);
        Task UpdateOrder(int id,OrderUpdateDto order);
    }
}
