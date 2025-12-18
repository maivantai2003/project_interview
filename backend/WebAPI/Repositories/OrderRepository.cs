using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class OrderRepository(ApplicationDbContext _context) : IOrderRepository
    {
        public async Task CreateOrder(Order order)
        {
            await _context.Orders.AddAsync(order);
        }

        public async Task<IEnumerable<OrderDto>> GetAllOrders()
        {
            var response=await _context.Orders.AsNoTracking().OrderByDescending(x => x.OrderDate).Select(o=>new OrderDto
            {
                OrderId=o.OrderId,
                CustomerName=o.CustomerName,
                OrderDate=o.OrderDate,
                TotalAmount=o.TotalAmount,
                Total=o.Total,
                Items=o.Items.Select(oi=>new OrderItemDto
                {
                    ProductId=oi.ProductId,
                    Name=oi.Product.Name,
                    Quantity =oi.Quantity,
                    UnitPrice=oi.UnitPrice,
                    Description=oi.Product.Description, 
                    OrderItemId =oi.OrderItemId,
                    ImageUrl=oi.Product.ImageUrl
                }).ToList()
            }).ToListAsync();
            return response;
        }

        public async Task<OrderDto?> GetOrderById(int id)
        {
            return await _context.Orders.AsNoTracking()
             .Where(o => o.OrderId == id)
             .Select(o => new OrderDto
             {
                 OrderId = o.OrderId,
                 CustomerName = o.CustomerName,
                 OrderDate = o.OrderDate,
                 TotalAmount = o.TotalAmount,
                 Total = o.Total,
                 Items = o.Items.Select(oi => new OrderItemDto
                 {
                     OrderItemId = oi.OrderItemId,
                     ProductId = oi.ProductId,
                     Name = oi.Product.Name,
                     Description = oi.Product.Description,
                     ImageUrl = oi.Product.ImageUrl,
                     Quantity = oi.Quantity,
                     UnitPrice = oi.UnitPrice
                 }).ToList()
             })
         .FirstOrDefaultAsync();
        }

        public Task UpdateOrder(int id, OrderUpdateDto order)
        {
            throw new NotImplementedException();
        }
    }
}
