"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const router = useRouter();

  const steps = [
    { id: 1, label: "Email" },
    { id: 2, label: "Verify" },
    { id: 3, label: "Reset" },
  ];

  const nextStep = () => {
    // TEMP NAVIGATION (UI ONLY)
    router.push("/verify");
  };

  return (
    <>
      {/* Background */}
      <div className="bg-shape-1" />
      <div className="bg-shape-2" />
      <div className="tech-lines" />

      {/* Navbar */}
      <header className="w-full fixed top-0 left-0 z-50 glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96z" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">Masarak</span>
          </Link>

          {/* Back */}
          <Link
            href="/login"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L141.3 288 246.6 182.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            Back
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen relative z-10 pt-24">
        <div className="w-full max-w-md relative z-20">
          <div className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            {/* Top bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-60" />

            {/* STEP INDICATOR (IMPROVED) */}
            <div className="flex items-center justify-between mb-10 relative">
              {/* Line */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2" />

              {steps.map((s) => {
                const isActive = step === s.id;
                const isDone = step > s.id;

                return (
                  <div key={s.id} className="flex flex-col items-center z-10">
                    {/* Circle */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                      ${
                        isDone
                          ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                          : isActive
                            ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-110"
                            : "bg-white/10 text-gray-400"
                      }`}
                    >
                      {isDone ? "✓" : s.id}
                    </div>

                    {/* Label */}
                    <span
                      className={`text-xs mt-2 transition-colors ${
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

            {/* TITLE */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Forgot Password?
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Enter your email and we’ll send you a verification code.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-6">
              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64z" />
                  </svg>
                </div>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-glass w-full rounded-xl py-3.5 pl-11 pr-4 text-sm placeholder-gray-500 focus:ring-0"
                />
              </div>

              {/* BUTTON (UI ONLY NEXT STEP) */}
              <button
                type="button"
                onClick={() => {
                  setStep(2);
                  nextStep();
                }}
                className="primary-btn w-full py-3.5 rounded-xl font-semibold text-sm"
              >
                Next Step
              </button>
            </form>

            {/* FOOTER */}
            <p className="text-center text-xs text-gray-500 mt-6">
              Remember password?{" "}
              <Link
                href="/login"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Login
              </Link>
            </p>
          </div>

          {/* Glow */}
          <div className="hidden lg:block absolute -top-12 -right-12 w-24 h-24 bg-linear-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />
          <div className="hidden lg:block absolute -bottom-12 -left-12 w-32 h-32 bg-linear-to-tr from-purple-500/20 to-indigo-500/20 rounded-full blur-2xl" />
        </div>
      </main>
    </>
  );
}
