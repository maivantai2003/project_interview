import { toast } from "react-toastify";
import ProductGrid from "../components/poss/ProductGrid";
import { OrderService } from "../services/OrderService";
import type { CartItem } from "../types/order-item.type";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProductService } from "../services/ProductService";
import type { Product } from "../entities/product.entity";
import CartPanel from "../components/poss/CartPanel";
function POSScreen() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    ProductService.getAllProduct()
      .then(setProducts)
      .catch(() => toast.error("Lỗi hiển thị danh sách sản phẩm"))
      .finally(() => setLoading(false));
  }, []);
  const total = useMemo(
    () => cart.reduce((s, i) => s + i.unitPrice * i.quantity, 0),
    [cart]
  );
  const addToCart = useCallback((p: Product) => {
    setCart(prev => {
      const exist = prev.find(x => x.productId === p.productId);
      return exist
        ? prev.map(x =>
            x.productId === p.productId
              ? { ...x, quantity: x.quantity + 1 }
              : x
          )
        : [...prev, {
            productId: p.productId,
            name: p.name,
            description: p.description,
            imageUrl: p.imageUrl,
            quantity: 1,
            unitPrice: p.price,
            price: p.price,
          }];
    });
  },[]);

  const checkout = async () => {
    if (!cart.length) return;
    if (!window.confirm("Bạn có chắc muốn thanh toán không?")) return;
    const response=await OrderService.createOrders({
      totalAmount: total,
      total: cart.reduce((s, i) => s + i.quantity, 0),
      items: cart.map(x => ({
        productId: x.productId,
        quantity: x.quantity,
        unitPrice: x.unitPrice,
      })),
    });
    console.log(response)
    if(response.success){
      setCart([]);
      toast.success("Thanh toán thành công");
    }else{
      toast.error("Thanh toán không thành công "+response.message);
    }
  };
  return (<div className="h-[calc(100vh-120px)] grid grid-cols-3 gap-6">
      <ProductGrid
        products={products}
        loading={loading}
        search={search}
        setSearch={setSearch}
        onAdd={addToCart}/>
      <CartPanel
        cart={cart}
        total={total}
        onIncrease={id =>setCart(c => c.map(i => i.productId === id ? { ...i, quantity: i.quantity + 1 } : i))}
        onDecrease={id =>setCart(c =>c.map(i => i.productId === id ? { ...i, quantity: i.quantity - 1 } : i).filter(i => i.quantity > 0))}
        onRemove={id => setCart(c => c.filter(i => i.productId !== id))}
        onCheckout={checkout}/></div>
  );
}
export default POSScreen;
