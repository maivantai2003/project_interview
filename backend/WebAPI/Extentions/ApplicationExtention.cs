using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Interfaces;
using WebAPI.Repositories;
using WebAPI.Services;

namespace WebAPI.Extentions
{
    public static class ApplicationExtention
    {
        public static IServiceCollection AddApplication(this IServiceCollection services,IConfiguration configuration)
        {
            // Add application services here in the future
            services.AddDbContext<ApplicationDbContext>(option=>option.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IOrderService, OrderService>();
            //services.AddScoped<IOrderItemService, OrderItemService>();
            services.AddScoped<IProductService, ProductService>();
            return services;
        }
    }
}
