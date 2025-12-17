using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var context = serviceProvider.GetRequiredService<ApplicationDbContext>();

            if (context.Products.Any())
                return;

            context.Products.AddRange(

                // ===== SMARTPHONES =====
                new Product
                {
                    Name = "iPhone 16 Pro",
                    Price = 29990000,
                    Description = "Flagship Apple 2024",
                    ImageUrl = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409?wid=512&hei=512&fmt=jpeg&qlt=90"
                },
                new Product
                {
                    Name = "iPhone 16",
                    Price = 22990000,
                    Description = "iPhone thế hệ mới",
                    ImageUrl = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409?wid=512&hei=512&fmt=jpeg&qlt=90"
                },
                new Product
                {
                    Name = "Samsung Galaxy S24 Ultra",
                    Price = 25990000,
                    Description = "Flagship Samsung 2024",
                    ImageUrl = "https://images.samsung.com/vn/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-highlights-color-titanium-gray-back.jpg"
                },
                new Product
                {
                    Name = "Samsung Galaxy A55",
                    Price = 9990000,
                    Description = "Tầm trung pin khỏe",
                    ImageUrl = "https://images.samsung.com/is/image/samsung/p6pim/vn/sm-a556elvdxxv/gallery/vn-galaxy-a55-5g-sm-a556-sm-a556elvdxxv-540253574"
                },
                new Product
                {
                    Name = "Xiaomi 14",
                    Price = 15990000,
                    Description = "Flagship Xiaomi",
                    ImageUrl = "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-14/specs-header.png"
                },
                new Product
                {
                    Name = "OPPO Reno11 Pro",
                    Price = 13990000,
                    Description = "Camera chân dung đẹp",
                    ImageUrl = "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/reno11-pro-en/listpage/reno11-pro-green-427_600.png"
                },

                // ===== TABLETS =====
                new Product
                {
                    Name = "iPad Pro M4 11-inch",
                    Price = 28990000,
                    Description = "Tablet cao cấp Apple",
                    ImageUrl = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202405?wid=512&hei=512&fmt=jpeg&qlt=90"
                },
                new Product
                {
                    Name = "Samsung Galaxy Tab S9",
                    Price = 18990000,
                    Description = "Tablet Android cao cấp",
                    ImageUrl = "https://images.samsung.com/is/image/samsung/p6pim/vn/sm-x710nzaaxxv/gallery/vn-galaxy-tab-s9-sm-x710-464340-sm-x710nzaaxxv-538445298"
                },

                // ===== ACCESSORIES =====
                new Product
                {
                    Name = "AirPods Pro 2",
                    Price = 6490000,
                    Description = "Tai nghe chống ồn Apple",
                    ImageUrl = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2nd-gen-202209?wid=512&hei=512&fmt=jpeg&qlt=90"
                },
                new Product
                {
                    Name = "Samsung Galaxy Buds 2 Pro",
                    Price = 4990000,
                    Description = "Tai nghe true wireless",
                    ImageUrl = "https://images.samsung.com/is/image/samsung/p6pim/vn/sm-r510nlvaxxv/gallery/vn-galaxy-buds2-pro-r510-sm-r510nlvaxxv-533187964"
                },
                new Product
                {
                    Name = "Apple Watch Series 9",
                    Price = 11990000,
                    Description = "Smartwatch Apple",
                    ImageUrl = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-45mm-aluminum-midnight-sport-band-midnight?wid=512&hei=512&fmt=jpeg&qlt=90"
                },
                new Product
                {
                    Name = "Xiaomi Watch S3",
                    Price = 3990000,
                    Description = "Smartwatch pin trâu",
                    ImageUrl = "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-watch-s3/section01.png"
                },

                // ===== LAPTOPS =====
                new Product
                {
                    Name = "MacBook Air M3",
                    Price = 27990000,
                    Description = "Laptop mỏng nhẹ Apple",
                    ImageUrl = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-m3-13-select-midnight-202403?wid=640&hei=595&fmt=jpeg&qlt=90"
                },
                new Product
                {
                    Name = "Dell XPS 13 Plus",
                    Price = 31990000,
                    Description = "Ultrabook cao cấp Dell",
                    ImageUrl = "https://i.dell.com/sites/csimages/Video_Imagery/all/xps-13-plus-9320-laptop.jpg"
                },
                new Product
                {
                    Name = "Logitech MX Master 3S",
                    Price = 2490000,
                    Description = "Chuột không dây cao cấp",
                    ImageUrl = "https://resource.logitech.com/w_800,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-top-view-graphite.png"
                }
            );

            context.SaveChanges();
        }
    }
}
