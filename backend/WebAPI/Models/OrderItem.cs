using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebAPI.Models
{
    public class OrderItem
    {
        public int OrderItemId { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        [JsonIgnore]
        [ForeignKey(nameof(OrderId))]
        public Order? Order { get; set; }
        [JsonIgnore]
        [ForeignKey(nameof(ProductId))]
        public Product? Product { get; set; }
    }
}
