using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string? Name { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public string? ImageUrl { get; set; }
        public List<OrderItem>? OrderItems { get; set; }
    }
}
