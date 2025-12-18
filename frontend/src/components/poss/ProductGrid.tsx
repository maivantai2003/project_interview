import type { Product } from "../../entities/product.entity";
import Search from "../Search";
import ProductCard from "./ProductCard";
interface Props {
  products: Product[];
  loading: boolean;
  search: string;
  setSearch: (v: string) => void;
  onAdd: (p: Product) => void;
}
export default function ProductGrid({products, loading, search, setSearch, onAdd}: Props) {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="col-span-2 overflow-y-auto pr-2">
      <Search search={search} setSearch={setSearch} />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {filtered.map(p => (
            <ProductCard key={p.productId} product={p} onAdd={onAdd} />
          ))}
        </div>
      )}
    </div>
  );
}
