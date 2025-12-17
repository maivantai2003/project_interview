using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(IProductService _productService) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllProduct()
        {
            var response = await _productService.GetAllProduct();
            if (response.Success)
            {
                return Ok(response.Data);
            }
            return BadRequest(response.Errors);
        }
    }
}
