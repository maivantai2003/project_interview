using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using WebAPI.Dtos;
using WebAPI.Hubs;
using WebAPI.Interfaces;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController(IOrderService _orderService,IHubContext<OrderHub> _orderHub) : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllOrders()
        {
            var response = await _orderService.GetAllOrders();
            if (response.Success)
            {
                return Ok(response.Data);
            }
            return BadRequest(response.Errors);
        }
        [HttpPost]
        public async Task<IActionResult> CreateOrder(OrderCreateDto orderCreateDto)
        {
            var response = await _orderService.CreateOrder(orderCreateDto);
            if (response.Success)
            {
                await _orderHub.Clients.All.SendAsync("OrderCreated", response.Data);
                return Ok(response.Data);
            }
            return BadRequest(response.Errors);
        }
    }
}
