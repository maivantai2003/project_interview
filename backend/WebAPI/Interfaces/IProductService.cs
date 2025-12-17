using WebAPI.Common;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IProductService
    {
        Task<ApiResponse<List<Product?>>> GetAllProduct();
    }
}
