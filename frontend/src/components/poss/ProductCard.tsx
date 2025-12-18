import type { Product } from "../../entities/product.entity";
import { motion } from "framer-motion";
export default function ProductCard({product,onAdd,}: {product: Product;onAdd: (p: Product) => void;}) {
    return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      className="bg-white border rounded-2xl p-4 shadow flex flex-col items-center"
    >
      <img src={product.imageUrl} className="w-32 h-32 rounded-xl mb-3" />
      <h3 className="font-semibold text-center">{product.name}</h3>
      <p className="text-sm text-gray-500 text-center">
        {product.description}
      </p>
      <p className="text-red-600 font-semibold mt-2">
        {product.price.toLocaleString()} đ
      </p>
      <button
        onClick={() => onAdd(product)}
        className="mt-3 w-full bg-blue-600 text-white rounded-xl py-2"
      >
        Thêm vào giỏ
      </button>
    </motion.div>
  );
}
