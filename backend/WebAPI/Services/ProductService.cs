using WebAPI.Common;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class ProductService(IProductRepository _productRepository):IProductService
    {
        public async Task<ApiResponse<List<Product?>>> GetAllProduct()
        {
            var response = await _productRepository.GetAllProduct();
            return ApiResponse<List<Product?>>.SuccessResponse("Lấy danh sách thành công", response);
        }
    }
}
