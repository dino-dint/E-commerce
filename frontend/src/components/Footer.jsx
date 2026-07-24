import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030611]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/homepage" className="text-xl font-black">
            NOVATECH<span className="text-electric">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Technology selected for the way you create, play and move forward.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Shop</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <Link to="/products">Laptops</Link>
            </li>
            <li>
              <Link to="/products">PC & Gaming</Link>
            </li>
            <li>
              <Link to="/products">Accessories</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Support</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Shipping & Returns</li>
            <li>Warranty</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Stay in the loop</h3>
          <p className="mt-4 text-sm text-slate-400">
            New drops and member-only offers.
          </p>
          <div className="mt-4 flex">
            <input
              aria-label="Email address"
              placeholder="you@email.com"
              className="min-w-0 flex-1 rounded-l-lg border border-white/15 bg-white/6 px-3 py-2 text-sm outline-none focus:border-electric"
            />
            <button className="rounded-r-lg bg-electric px-3 text-sm font-bold">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 py-5 text-center text-xs text-slate-500">
        © 2026 Novatech. Built for what’s next.
      </div>
    </footer>
  );
}


