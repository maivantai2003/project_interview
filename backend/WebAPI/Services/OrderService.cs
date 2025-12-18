using WebAPI.Common;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class OrderService(IOrderRepository _orderRepository,IUnitOfWork _unitOfWork) : IOrderService
    {
        public async Task<ApiResponse<OrderDto>> CreateOrder(OrderCreateDto orderDto)
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
                var response=await _orderRepository.GetOrderById(order.OrderId);
                return ApiResponse<OrderDto>.SuccessResponse("Thanh toán thành công",response);
            }
            catch(Exception ex)
            {
                return ApiResponse<OrderDto>.ErrorResponse("Thanh toán không thành công", new List<string> { ex.Message });
            }
        }

        public async Task<ApiResponse<IEnumerable<OrderDto>>> GetAllOrders()
        {
            var response=await _orderRepository.GetAllOrders();
            return ApiResponse<IEnumerable<OrderDto>>.SuccessResponse("Lấy danh sách thành công", response);
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
