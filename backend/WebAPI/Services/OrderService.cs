using WebAPI.Common;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class OrderService(IOrderRepository _orderRepository,IUnitOfWork _unitOfWork) : IOrderService
    {
        public async Task<ApiResponse<bool>> CreateOrder(OrderCreateDto orderDto)
        {
            await _unitOfWork.BeginTransactionAsync();
            try
            {
                var order = new Order()
                {
                    CustomerName = orderDto.CustomerName,
                    TotalAmount = orderDto.TotalAmount,
                    Total = orderDto.Total,
                    Items = orderDto.Items?.Select(itemDto => new OrderItem
                    {
                        ProductId = itemDto.ProductId,
                        Quantity = itemDto.Quantity,
                        UnitPrice = itemDto.UnitPrice
                    }).ToList()
                };
                await _orderRepository.CreateOrder(order);
                await _unitOfWork.CommitAsync();
                return ApiResponse<bool>.SuccessResponse("Order created successfully", true);
            }
            catch(Exception ex)
            {
                return ApiResponse<bool>.ErrorResponse("Failed to create order", new List<string> { ex.Message });
            }
        }

        public async Task<ApiResponse<IEnumerable<OrderDto>>> GetAllOrders()
        {
            var response=await _orderRepository.GetAllOrders();
            return ApiResponse<IEnumerable<OrderDto>>.SuccessResponse("Orders retrieved successfully", response);
        }

        public Task<ApiResponse<OrderDto>> GetOrderById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ApiResponse<OrderDto>> UpdateOrder(int id, OrderUpdateDto order)
        {
            throw new NotImplementedException();
        }
    }
}
