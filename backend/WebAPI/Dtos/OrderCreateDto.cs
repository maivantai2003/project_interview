using WebAPI.Models;

namespace WebAPI.Dtos
{
    public class OrderCreateDto
    {
        public string? CustomerName { get; set; }
        public decimal TotalAmount { get; set; }
        public decimal Total { get; set; }
        public List<OrderItemCreateDto>? Items { get; set; }
    }
}
