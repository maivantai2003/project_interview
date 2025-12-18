import { memo } from "react";
import { motion } from "framer-motion";
import type { Order } from "../../entities/order.entity";
import { formatDateTimeVN } from "../../helpers/date";
interface Props {
  order: Order;
}
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
        <div className="text-sm text-red-500">
          {formatDateTimeVN(order.orderDate)}
        </div>
      </div>

      <div className="space-y-4 mb-4">
        {order.items.map((i) => (
          <div
            key={i.productId}
            className="flex items-center rounded-xl px-4 py-4 border border-gray-200 bg-blue-50 shadow-sm 
                    hover:bg-blue-100 
                    hover:shadow-md 
                    transition"
          >
            <img
              src={i.imageUrl}
              alt={i.name}
              className="w-20 h-20 object-cover rounded-lg mr-5"
            />

            <div className="flex-1">
              <div className="text-base font-semibold text-gray-800">
                {i.name}
              </div>
              {i.description && (
                <div className="text-sm text-gray-500 mt-1">
                  {i.description}
                </div>
              )}
            </div>

            <div className="ml-6 text-right">
              <div className="text-sm text-gray-600 mb-1">
                Số lượng:{" "}
                <span className="font-medium text-blue-600">x{i.quantity}</span>
              </div>
              <div className="text-base font-bold text-green-600">
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
