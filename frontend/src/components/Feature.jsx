import { ShieldCheck, Truck, Zap } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Latest, always",
    text: "Fresh releases and performance-first gear, carefully selected.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine guaranteed",
    text: "Every product is authentic and backed by trusted warranties.",
  },
  {
    icon: Truck,
    title: "Fast, protected delivery",
    text: "Your new setup arrives quickly and safely at your door.",
  },
];

export default function Feature() {
  return (
    <section id="features" className="border-y border-white/8 bg-[#080d1d]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-bold tracking-[.18em] text-sky-400 uppercase">
            The Novatech standard
          </p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Tech buying, made simple.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/4 p-7"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-sky-500/12 text-sky-400">
                <Icon size={24} />
              </span>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
