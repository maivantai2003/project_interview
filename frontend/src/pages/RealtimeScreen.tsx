
import { useEffect, useState } from "react";
import type { Order } from "../entities/order.entity";
import { OrderService } from "../services/OrderService";
import { signalRService } from "../services/signalRService";
import Realtime from "../components/real/Realtime";
import OrderList from "../components/real/OrderList";
function RealtimeScreen() {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    let mounted = true;
    OrderService.getAllOrders().then((data) => {
      if (mounted) setOrders(data);
    });
    signalRService.start().catch(console.error);
    const handler = (newOrder: Order) => {
      setOrders((prev) => [newOrder, ...prev]);
    };
    signalRService.on("OrderCreated", handler);

    return () => {
      mounted = false;
      signalRService.off("OrderCreated", handler);
      signalRService.stop();
    };
  }, []);
  return (
    <div className="p-6 bg-gray-50 min-h-screen overflow-y-auto">
      <Realtime total={orders.length} />
      <OrderList orders={orders} />
    </div>
  );
}
export default RealtimeScreen;
