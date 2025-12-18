import { memo } from "react";
import type { Order } from "../../entities/order.entity";
import OrderCard from "./OrderCard";
interface Props {orders: Order[];}
function OrderList({ orders }: Props) {
  return (
    <div className="grid gap-6">
      {orders.map((o) => (
        <OrderCard key={o.orderId} order={o} />
      ))}
    </div>
  );
}

export default memo(OrderList);
