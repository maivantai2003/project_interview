import type { CartItem } from "../../types/order-item.type";
import CartItemRow from "./CartItemRow";
interface Props {cart: CartItem[];
  total: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
}
export default function CartPanel({cart, total, onIncrease, onDecrease, onRemove, onCheckout}: Props) {
    return (
    <div className="border rounded-2xl p-4 shadow flex flex-col">
      <h2 className="text-xl font-semibold mb-3">Giỏ hàng</h2>
      <div className="flex-1 overflow-y-auto space-y-2">
        {cart.length === 0 && (
          <p className="text-gray-400 text-center mt-10">Chưa có sản phẩm</p>
        )}

        {cart.map(item => (<CartItemRow
            key={item.productId}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}/>
        ))}
      </div>
      <div className="flex justify-between font-bold mt-3">
        <span>Tổng tiền</span>
        <span>{total.toLocaleString()} đ</span>
      </div>
      <button
        disabled={!cart.length}
        onClick={onCheckout}
        className="mt-4 bg-green-600 text-white py-3 rounded-xl"
      >
        Thanh toán
      </button>
    </div>
  );
}
