import { memo } from "react";
import { motion } from "framer-motion";
import type { Order } from "../../entities/order.entity";
import { formatDateTimeVN } from "../../helpers/date";
interface Props {order: Order;}
function OrderCard({ order }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white"
    >
      <div className="flex justify-between mb-4">
        <div>
          Mã đơn: <b>HĐ#{order.orderId}</b>
        </div>
        <div className="text-sm text-gray-500">
          {formatDateTimeVN(order.orderDate)}
        </div>
      </div>

      <div className="space-y-4 mb-4">
        {order.items.map((i) => (
          //   <OrderItem key={i.productId} item={i} />
          <div className="flex items-center rounded-xl px-4 py-3 border hover:shadow transition">
            <img
              src={i.imageUrl}
              alt={i.name}
              className="w-16 h-16 rounded-lg mr-4"
            />

            <div className="flex-1">
              <div className="font-semibold">{i.name}</div>
              {i.description && (
                <div className="text-sm text-gray-500 line-clamp-2">
                  {i.description}
                </div>
              )}
            </div>

            <div className="ml-4 text-right">
              <div className="text-xs bg-blue-100 text-blue-700 rounded-full px-2">
                x{i.quantity}
              </div>
              <div className="font-bold mt-1">
                {(i.unitPrice * i.quantity).toLocaleString()} đ
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right font-bold border-t pt-3">
        Tổng: {order.totalAmount.toLocaleString()} đ
      </div>
    </motion.div>
  );
}

export default memo(OrderCard);
