using System.ComponentModel.DataAnnotations;
using WebAPI.Models;

namespace WebAPI.Dtos
{
    public class OrderDto
    {
        public int OrderId { get; set; }
        public string? CustomerName { get; set; }
        public DateTime OrderDate { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal Total { get; set; }
        public List<OrderItemDto>? Items { get; set; }
    }
}
