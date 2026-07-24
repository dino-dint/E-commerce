import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold tracking-[.18em] text-sky-400 uppercase">
              Curated for you
            </p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Trending technology
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-200"
          >
            View all products <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Feature />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl border border-sky-400/25 bg-linear-to-r from-blue-700/50 to-sky-500/25 px-7 py-12 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-black">
              Build your next great setup.
            </h2>
            <p className="mt-2 text-sky-100">
              Your upgrade starts with one click.
            </p>
          </div>
          <Link
            to="/products"
            className="shrink-0 rounded-full bg-white px-6 py-3 font-bold text-slate-950 hover:bg-sky-100"
          >
            Start shopping
          </Link>
        </div>
      </section>
    </>
  );
}
