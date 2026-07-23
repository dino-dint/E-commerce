import React from "react";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-linear-to-b from-white from-10% via-gray-500 via-50% to-black to-100% shadow-2xl">
        <div className="w-full max-w-6xl grid md:grid-cols-2 rounded-3xl overflow-hidden min-h-175 shadow-2xl bg-black border border-neutral-800">
          {/* Left Side: Image+Background Panel */}
          <div className="hidden md:flex flex-col justify-center items-center p-10 bg-linear-to-br from-blue-500  via-sky-300 to-slate-400 hover:from-sky-100 hover:via-blue-300 hover:to-blue-600 transition">
            <img
              src="/nova.png"
              alt="Graphic"
              className="w-40 h-40 object-contain opacity-70"
            />
            <div className="text-center mt-8 space-y-4">
              <h1 className="text-4xl font-semibold text-slate-100 tracking-tight">
                Get Started with Us
              </h1>
              <h3 className="text- font-semibold text-white tracking-tight">
                Complete these easy steps to register <br /> your account.
              </h3>
              <div className="space-y-3 mt-8 w-full">
                <h1 className="bg-slate-200 text-lg text-zinc-900  shadow-4xl rounded-xl p-4">
                  1. Sign up your account
                </h1>
                <h1 className="bg-slate-200/20 text-lg text-zinc-900  shadow-4xl rounded-xl p-4">
                  2. Set up your workspace
                </h1>
                <h1 className="bg-slate-200/20 text-lg text-zinc-900  shadow-4xl rounded-xl p-4">
                  3. Set up your profile
                </h1>
              </div>
            </div>
          </div>
          {/* Right Side: Form Panel */}
          <div className="flex flex-col justify-center bg-black text-white p-8 md:p-12 lg:p-14">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold tracking-tight">
                Sign Up Account
              </h2>

              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                Enter your personal information to create your account.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-3 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl active:scale-95">
                <img src="/google.png" alt="" className="w-5 h-5" />
                Google
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl active:scale-95">
                <img src="/facebook.png" alt="" className="w-5 h-5" />
                Facebook
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-xl active:scale-95">
                <img src="/discord.png" alt="" className="w-5 h-5" />
                Discord
              </button>
            </div>

            {/* Divider */}

            <div className="relative flex items-center my-8">
              <div className="grow border-t border-neutral-800"></div>

              <span className="mx-4 bg-black px-4 text-xs uppercase tracking-[0.35em]text-neutral-500">
                OR
              </span>

              <div className="grow border-t border-neutral-800"></div>
            </div>

            {/* Form */}

            <form className="space-y-5">
              {/* First Last */}

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-neutral-300">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g John"
                    className=" w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition-all duration-300 hover:border-sky-400 hover:-translate-y-0.5 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-neutral-300">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g Smith"
                    className=" w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition-all duration-300 hover:border-sky-400 hover:-translate-y-0.5 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="block mb-2 text-sm font-medium text-neutral-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className=" w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition-all duration-300 hover:border-sky-400 hover:-translate-y-0.5 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                />
              </div>

              {/* Password */}

              <div>
                <label className="block mb-2 text-sm font-medium text-neutral-300">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className=" w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition-all duration-300 hover:border-sky-400 hover:-translate-y-0.5 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                  />

                  <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 cursor-pointer transition-all duration-300 hover:text-sky-400 hover:scale-125" />
                </div>

                <p className="mt-2 text-xs text-neutral-500">
                  Must be at least 8 characters.
                </p>
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="
      w-full

      rounded-xl

      bg-linear-to-r
      from-sky-500
      to-blue-600

      py-3.5

      text-white
      font-semibold

      transition-all
      duration-300

      hover:scale-[1.02]
      hover:shadow-2xl
      hover:shadow-sky-500/30

      active:scale-95
      "
              >
                Create Account
              </button>
            </form>

            {/* Footer */}

            <p className="text-center text-sm text-neutral-400 mt-8">
              Already have an account?
              <Link
              to="/Login"
                className="
      ml-2
      font-semibold
      text-sky-400

      transition

      hover:text-sky-300
      hover:underline
      "
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
