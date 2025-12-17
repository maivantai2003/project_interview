using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public class ProductRepository(ApplicationDbContext _context) : IProductRepository
    {
        public async Task<List<Product?>> GetAllProduct()
        {
            var response=await _context.Products.AsNoTracking().ToListAsync();
            return response;
        }
    }
}
