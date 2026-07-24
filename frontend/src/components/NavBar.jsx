import { Link, NavLink } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/homepage", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/homepage#features", label: "Why Novatech" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-electric ${isActive ? "text-white" : "text-slate-400"}`;
  return (
    <header className="sticky top-0 z-50 border-b border-white/7 glass">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          to="/homepage"
          className="flex items-center gap-2 text-xl font-black tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-sky-400 to-blue-600 text-sm shadow-lg shadow-sky-500/30">
            N
          </span>{" "}
          NOVATECH
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <button
            aria-label="Search"
            className="text-slate-300 hover:text-white"
          >
            <Search size={20} />
          </button>
          <button
            aria-label="Shopping bag"
            className="relative text-slate-300 hover:text-white"
          >
            <ShoppingBag size={20} />
            <span className="absolute -right-2 -top-2 grid size-4 place-items-center rounded-full bg-electric text-[9px] text-white">
              2
            </span>
          </button>
          <Link
            to="/products"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
          >
            Shop now
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#080d1c] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <NavLink
                onClick={() => setOpen(false)}
                key={item.label}
                to={item.to}
                className={linkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              onClick={() => setOpen(false)}
              to="/products"
              className="w-fit rounded-full bg-electric px-5 py-2 text-sm font-bold"
            >
              Shop now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
