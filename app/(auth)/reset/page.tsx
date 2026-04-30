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
