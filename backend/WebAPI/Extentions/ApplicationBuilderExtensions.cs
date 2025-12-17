using WebAPI.Middleware;

namespace WebAPI.Extentions
{
    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder UseGlobalException(this IApplicationBuilder app)
        {
            return app.UseMiddleware<ExceptionMiddleware>();
        }
    }
}
