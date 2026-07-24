import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productsApi";

const categories = ["All", "Laptops", "PC & Gaming", "Accessories"];
export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("We could not load products right now."));
  }, []);
  const visible = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [category, products, query],
  );
  return (
    <>
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_50%_-50%,rgba(36,153,255,.4),transparent_55%)] px-5 py-20 text-center">
        <p className="text-sm font-bold tracking-[.2em] text-sky-400 uppercase">
          The collection
        </p>
        <h1 className="mt-3 text-4xl font-black sm:text-6xl">
          Find your next upgrade.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-slate-300">
          Performance, style and reliability — all in one place.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                onClick={() => setCategory(item)}
                key={item}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${category === item ? "bg-electric text-white" : "border border-white/15 text-slate-300 hover:bg-white/10"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="flex w-full items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-slate-400 md:w-70">
            <Search size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </label>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            Showing{" "}
            <span className="font-bold text-white">{visible.length}</span>{" "}
            products
          </p>
          <button className="flex items-center gap-2 text-sm text-slate-400">
            <SlidersHorizontal size={16} /> Sort by
          </button>
        </div>
        {error ? (
          <p className="py-20 text-center text-rose-300">{error}</p>
        ) : (
          <>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {visible.length === 0 && (
              <p className="py-20 text-center text-slate-400">
                No products match your search.
              </p>
            )}
          </>
        )}
        {/* <p className="mt-12 rounded-xl border border-dashed border-sky-400/30 bg-sky-400/5 p-4 text-center text-sm text-slate-300">
          PHP CRUD connection: add{" "}
          <code className="text-sky-300">
            VITE_PRODUCTS_API=your-products.php-url
          </code>{" "}
          to your <code className="text-sky-300">.env</code>. New products
          returned by that API appear here automatically after refresh.
        </p> */}
      </section>
    </>
  );
}
