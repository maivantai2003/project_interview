import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Order } from "../entities/order.entity";
import { OrderService } from "../services/OrderService";
import { signalRService } from "../services/signalRService";

function RealtimeScreen() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    OrderService.getAllOrders().then(setOrders);
    signalRService.start().catch(console.error);
    signalRService.on("OrderCreated", (newOrder: Order) => {
      setOrders((prev) => [newOrder, ...prev]);
    });
    return () => {
      signalRService.stop();
    };
  }, []);
  return (
    <div className="p-6 bg-gray-50 min-h-screen overflow-y-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-3 sm:mb-0">
          Đơn hàng Realtime
        </h1>
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow">
          {orders.length} đơn
        </div>
      </div>
      <div className="grid gap-6">
        {orders.map((o) => (
          <motion.div
            key={o.orderId}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            className="border border-gray-200 rounded-2xl p-5 shadow-sm bg-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="text-gray-700 text-lg">
                Mã đơn: <b>HĐ#{o.orderId}</b>
              </div>
              <div className="text-gray-500 text-sm mt-1 sm:mt-0">
                {new Intl.DateTimeFormat("vi-VN", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }).format(new Date(o.orderDate))}
              </div>
            </div>
            <div className="mb-4">
              <b className="text-gray-600">Sản phẩm:</b>
              <div className="mt-3 space-y-4">
                {o.items.map((i) => (
                  <div
                    key={i.productId}
                    className="flex items-center bg-white rounded-xl px-4 py-3 border hover:shadow-md transition"
                  >
                    <img
                      src={i.imageUrl}
                      alt={i.name}
                      className="w-16 h-16 object-cover rounded-lg mr-5 border"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-gray-900 font-semibold text-base">
                            {i.name}
                          </div>
                          {i.description && (
                            <div className="text-gray-500 text-sm mt-1 line-clamp-2">
                              {i.description}
                            </div>
                          )}
                        </div>
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                          x{i.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-gray-800 font-bold text-sm ml-6 whitespace-nowrap">
                      💰 {(i.unitPrice * i.quantity).toLocaleString()} đ
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-right font-bold text-lg text-gray-800 border-t pt-3 mt-3">
              Tổng: {o.totalAmount.toLocaleString()} đ
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default RealtimeScreen;
