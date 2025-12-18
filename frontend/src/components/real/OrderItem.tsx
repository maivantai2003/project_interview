
// import { memo } from "react";
// function OrderItem({ item }: { item: Item }) {
//   return (
//     <div className="flex items-center rounded-xl px-4 py-3 border hover:shadow transition">
//       <img
//         src={item.imageUrl}
//         alt={item.name}
//         className="w-16 h-16 rounded-lg mr-4"
//       />

//       <div className="flex-1">
//         <div className="font-semibold">{item.name}</div>
//         {item.description && (
//           <div className="text-sm text-gray-500 line-clamp-2">
//             {item.description}
//           </div>
//         )}
//       </div>

//       <div className="ml-4 text-right">
//         <div className="text-xs bg-blue-100 text-blue-700 rounded-full px-2">
//           x{item.quantity}
//         </div>
//         <div className="font-bold mt-1">
//           {(item.unitPrice * item.quantity).toLocaleString()} đ
//         </div>
//       </div>
//     </div>
//   );
// }

// export default memo(OrderItem);
