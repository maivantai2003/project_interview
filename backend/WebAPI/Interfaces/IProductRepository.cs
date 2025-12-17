using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IProductRepository
    {
        Task<List<Product?>> GetAllProduct();
    }
}
