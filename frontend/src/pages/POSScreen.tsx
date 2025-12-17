import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Product } from "../entities/product.entity";
import type { CartItem } from "../types/order-item.type";
import { ProductService } from "../services/ProductService";
import { toast } from "react-toastify";
import Search from "../components/Search";
import type { OrderDto } from "../dtos/order-create.dto";
import { OrderService } from "../services/OrderService";
function POSScreen() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductService.getAllProduct();
        setProducts(response);
        console.log(response);
      } catch (error) {
        console.log(error);
        toast.error("Lỗi hiển thị danh sách sản phẩm");
      }
    };
    fetchData();
  }, []);
  const total = cart.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
  const addToCart = (p: Product) => {
    setCart((prev) => {
      const isExist = prev.find((x) => x.productId === p.productId);
      if (isExist)
        return prev.map((x) =>
          x.productId === p.productId ? { ...x, quantity: x.quantity + 1 } : x
        );
      return [
        ...prev,
        {
          productId: p.productId,
          name: p.name,
          description: p.description,
          imageUrl: p.imageUrl,
          quantity: 1,
          unitPrice: p.price,
        },
      ];
    });
  };

  const checkout = async () => {
    try {
      if (cart.length > 0) {
        const isConfirm = window.confirm("Bạn có chắc muốn thanh toán không?");
        if (!isConfirm) return;
        const orderCreateDto: OrderDto = {
          totalAmount: total,
          total: cart.reduce((s, i) => s + i.quantity, 0),
          items: cart.map((x) => ({
            productId: x.productId,
            quantity: x.quantity,
            unitPrice: x.unitPrice,
          })),
        };
        const response = await OrderService.createOrders(orderCreateDto);
        console.log(response);
        if (response) {
          setCart([]);
          toast.info("Thanh toán thành công");
        }
      }
    } catch (ex) {
      console.log(ex);
      toast.error("Thanh toán thành công");
    }
  };
  const filterProducts = products.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );
  const increaseQuantity = (productId: number) => {
    setCart((x) =>
      x.map((i) =>
        i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((x) =>
      x
        .map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (productId: number) => {
    setCart((prev) => prev.filter((i) => i.productId !== productId));
  };

  return (
    <div className="h-[calc(100vh-120px)] grid grid-cols-3 gap-6">
      <div className="col-span-2 overflow-y-auto pr-2">
        <Search search={search} setSearch={setSearch} />
        <div className="grid grid-cols-3 gap-4">
          {filterProducts.map((p) => (
            <motion.div
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 50 }}
              key={p.productId}
              className="bg-white border rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center"
            >
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-32 h-32 object-cover rounded-xl mb-3 shadow"
              />
              <h3 className="ttext-gray-900 text-base font-semibold text-center line-clamp-2 truncate w-full">
                {p.name}
              </h3>
              <p className="text-gray-500 text-sm text-center line-clamp-2 mt-1">
                {p.description}
              </p>
              <p className="text-red-600 font-semibold text-lg mt-2">
                {p.price.toLocaleString()} đ
              </p>
              <button
                onClick={() => addToCart(p)}
                className=" mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 font-medium transition-all duration-200 shadow"
              >
                Thêm vào giỏ
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border rounded-2xl p-4 shadow h-full flex flex-col min-h-0">
        <h2 className="text-xl font-semibold mb-3">Giỏ hàng</h2>
        <div className="flex-1 overflow-y-auto space-y-2 min-h-0">
          {cart.length === 0 && (
            <p className="text-gray-400 text-sm text-center mt-10">
              Chưa có sản phẩm
            </p>
          )}

          {cart.map((c) => (
            <div
              key={c.productId}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50"
            >
              <img
                src={c.imageUrl}
                alt={c.name}
                className="w-14 h-14 object-cover rounded-lg border"
              />
              <div className="flex-1">
                <p className="font-medium leading-tight">{c.name}</p>
                <p className="text-sm text-gray-500">
                  {c.unitPrice.toLocaleString()} đ
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => decreaseQuantity(c.productId)}
                  className="w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  −
                </button>
                <span className="w-6 text-center font-semibold">
                  {" "}
                  {c.quantity}
                </span>
                <button
                  onClick={() => increaseQuantity(c.productId)}
                  className="w-7 h-7 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(c.productId)}
                className="text-red-500 hover:text-red-700 text-lg ml-1"
                title="Xoá"
              >
                🗑
              </button>
            </div>
          ))}
        </div>
        <hr className="my-3" />
        <div className="flex justify-between font-bold">
          <span>Tổng tiền</span>
          <span>{total.toLocaleString()} đ</span>
        </div>
        <button
          disabled={!cart.length}
          onClick={checkout}
          className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl disabled:opacity-50"
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
}

export default POSScreen;
