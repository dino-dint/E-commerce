import { ShoppingBag } from "lucide-react";
export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/4 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white/7">
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-sky-300 backdrop-blur">
          {product.tag}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-bold tracking-widest text-sky-400 uppercase">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
        <p className="mt-1 text-sm text-slate-400">{product.specs}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-black">
            ${product.price.toLocaleString()}
          </span>
          <button
            aria-label={`Add ${product.name} to cart`}
            className="grid size-10 place-items-center rounded-full bg-electric transition hover:bg-sky-300"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
