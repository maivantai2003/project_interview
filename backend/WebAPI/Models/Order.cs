using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public string? CustomerName { get; set; }
        public DateTime OrderDate { get; set; }=DateTime.UtcNow;
        public decimal TotalAmount { get; set; }
        public decimal Total { get; set; }
        public List<OrderItem>? Items { get; set; }
    }
}
