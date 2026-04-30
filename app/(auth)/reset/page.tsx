"use client";

import Link from "next/link";

export default function ResetPasswordPage() {
  const steps = [
    { id: 1, label: "Email" },
    { id: 2, label: "Verify" },
    { id: 3, label: "Reset" },
  ];

  return (
    <>
      {/* Background */}
      <div className="bg-shape-1" />
      <div className="bg-shape-2" />
      <div className="tech-lines" />
 <header className="w-full fixed top-0 left-0  z-50 glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/*//! Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96zM117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5l-.6 .7zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">Masarak</span>
          </Link>

          {/*//! Back Home */}
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 288 246.6 182.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            Back Home
          </Link>
        </div>
      </header>
      {/* Main */}
      <main className="w-full max-w-7xl mx-auto px-4 flex items-center justify-center min-h-screen relative z-10 pt-24">
        <div className="glass-card w-full max-w-md p-8 sm:p-10 rounded-2xl relative overflow-hidden">
          {/* Top line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-60" />

          {/* STEP INDICATOR (FINAL STEP ACTIVE) */}
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2" />

            {steps.map((s) => {
              const isActive = s.id === 3;
              const isDone = s.id < 3;

              return (
                <div key={s.id} className="flex flex-col items-center z-10">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                    ${
                      isDone
                        ? "bg-green-500 text-white shadow-green-500/30"
                        : isActive
                          ? "bg-indigo-500 text-white shadow-indigo-500/30 scale-110"
                          : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {isDone ? "✓" : s.id}
                  </div>

                  <span
                    className={`text-xs mt-2 ${
                      isActive
                        ? "text-indigo-400 font-medium"
                        : isDone
                          ? "text-green-400"
                          : "text-gray-500"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Reset Password
            </h2>
            <p className="text-sm text-gray-400">
              Create a new secure password for your account
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5">
            {/* New Password */}
            <div>
              <input
                type="password"
                placeholder="New password"
                className="input-glass w-full rounded-xl py-3.5 px-4 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                placeholder="Confirm password"
                className="input-glass w-full rounded-xl py-3.5 px-4 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition"
              />
            </div>

            {/* Button */}
            <Link
              href="/login"
              className="primary-btn w-full py-3.5 rounded-xl font-semibold text-center block"
            >
              Reset Password
            </Link>
          </form>

          {/* Back to login */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Remember it?{" "}
            <Link
              href="/login"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Back to login
            </Link>
          </p>
        </div>

        {/* Glow */}
        <div className="hidden lg:block absolute -top-12 -right-12 w-24 h-24 bg-linear-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />
        <div className="hidden lg:block absolute -bottom-12 -left-12 w-32 h-32 bg-linear-to-tr from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl" />
      </main>
    </>
  );
}
