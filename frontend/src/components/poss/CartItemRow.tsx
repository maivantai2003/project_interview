import type { CartItem } from "../../types/order-item.type";
export default function CartItemRow({
  item, onIncrease, onDecrease, onRemove}: {item: CartItem;
    onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50">
      <img src={item.imageUrl} className="w-14 h-14 rounded-lg" />
      <div className="flex-1">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-500">
          {item.unitPrice.toLocaleString()} đ
        </p>
      </div>

      <div className="flex items-center gap-1">
        <button onClick={() => onDecrease(item.productId)}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrease(item.productId)}>+</button>
      </div>

      <button onClick={() => onRemove(item.productId)}>🗑</button>
    </div>
  );
}
