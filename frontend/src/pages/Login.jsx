import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-linear-to-b from-white from-10% via-gray-500 via-50% to-black to-100%">
      {/* Container: Stays max-w-md on mobile, expands on desktop */}
      <div className="flex flex-col md:flex-row w-full max-w-sm sm:max-w-md md:max-w-4xl shadow-2xl rounded-2xl overflow-hidden bg-black">
        {/* Left Side: Form Panel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center text-white p-6 sm:p-10 md:p-12 gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Welcome 👋
          </h1>

          <form className="w-full flex flex-col gap-6 items-center">
            {/* Username */}
            <div className="flex flex-col text-lg sm:text-xl md:text-2xl text-left gap-1 w-full">
              <label htmlFor="username">Username</label>
              <input
                className=" w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition-all duration-300 hover:border-sky-400 hover:-translate-y-0.5 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                type="text"
                id="username"
                placeholder="e.g John Bratt"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col text-lg sm:text-xl md:text-2xl text-left gap-1 w-full">
              <label htmlFor="email">Email</label>
              <input
                className=" w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition-all duration-300 hover:border-sky-400 hover:-translate-y-0.5 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                type="text"
                id="email"
                placeholder="e.g example@gmail.com"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col text-lg sm:text-xl md:text-2xl text-left gap-1 w-full">
              <label htmlFor="pw">Password</label>

              <div className="relative flex items-center w-full">
                <input
                  className=" w-full rounded-xl bg-neutral-900 border border-neutral-700 px-4 py-3 text-sm text-white placeholder:text-neutral-500 transition-all duration-300 hover:border-sky-400 hover:-translate-y-0.5 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/20"
                  type="password"
                  id="pw"
                  placeholder="*********"
                />
                <button
                  type="button"
                  className="absolute right-3 text-zinc-400 hover:text-white transition"
                >
                  <Eye size={24} />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Link
              to="/homepage"
              className="w-full rounded-xl bg-linear-to-r from-sky-500 to-blue-600 py-3.5 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/3 active:scale-95"
            > 
              Login
            </Link>
          </form>

          {/* Footer Link */}
          <span className="text-sm sm:text-base font-semibold">
            Don't have an account?
            <Link
              to="/Register"
              className="ml-2 font-semibold text-sky-400 transition hover:text-sky-300 hover:underline"
            >
              Register
            </Link>
          </span>
        </div>

        {/* Right Side: Image Panel */}
        <div className="hidden md:flex w-1/2 bg-linear-to-tr from-white via-sky-100 to-blue-400 hover:from-sky-100 hover:via-blue-300 hover:to-blue-600 transition items-center justify-center p-6">
          <img
            src="/nova.png"
            alt="Graphic"
            className="w-full h-full max-h-87.5 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
