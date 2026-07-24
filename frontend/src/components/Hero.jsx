import { ArrowRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="grid-bg relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(21,135,255,.31),transparent_25%),radial-gradient(circle_at_25%_75%,rgba(105,45,255,.16),transparent_30%)]" />
      <div className="mx-auto grid min-h-157.5 max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_.9fr] lg:px-8">
        <div>
          <p className="mb-5 flex items-center gap-2 text-sm font-bold tracking-[.2em] text-sky-400 uppercase">
            <span className="h-px w-9 bg-sky-400" /> The future is now
          </p>
          <h1 className="max-w-3xl text-5xl leading-[.98] font-black tracking-tight sm:text-7xl">
            Upgrade your{" "}
            <span className="bg-linear-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              everyday.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Discover technology that keeps up with your ideas — from powerful
            laptops to the smallest essentials that make a difference.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 font-bold shadow-xl shadow-sky-500/25 transition hover:bg-sky-300"
            >
              Explore products <ArrowRight size={18} />
            </Link>
            <a
              href="#features"
              className="rounded-full border border-white/20 px-6 py-3.5 font-bold text-slate-200 transition hover:bg-white/10"
            >
              Why Novatech
            </a>
          </div>
          <div className="mt-12 flex gap-9">
            <div>
              <strong className="text-2xl">25k+</strong>
              <p className="text-sm text-slate-400">Happy customers</p>
            </div>
            <div>
              <strong className="text-2xl">4.9/5</strong>
              <p className="text-sm text-slate-400">Average review</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-full bg-sky-500/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/20 bg-slate-900/60 p-4 shadow-2xl">
            <img
              className="h-102.5 w-full rounded-3xl object-cover"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=90"
              alt="Premium laptop on a desk"
            />
            <div className="absolute bottom-8 left-8 rounded-2xl border border-white/15 bg-slate-950/75 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-electric">
                  <Cpu size={19} />
                </span>
                <div>
                  <p className="text-xs text-slate-400">Featured performance</p>
                  <p className="font-bold">NovaBook Pro 16</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
