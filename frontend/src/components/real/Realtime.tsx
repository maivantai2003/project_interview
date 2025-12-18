import { memo } from "react";
interface Props {total: number;}
function Realtime({ total }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-3 sm:mb-0">Đơn hàng</h1>
      <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow">
        {total} đơn
      </div>
    </div>
  );
}

export default memo(Realtime);
