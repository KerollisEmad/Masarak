"use client";

import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const router = useRouter();

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const steps = [
    { id: 1, label: "Email" },
    { id: 2, label: "Verify" },
    { id: 3, label: "Reset" },
  ];

  // Handle OTP input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const goNext = () => {
    router.push("/reset");
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

          <Link
            href="/forgot-password"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Back
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="w-full max-w-7xl mx-auto px-4 flex items-center justify-center min-h-screen pt-24 relative z-10">
        <div className="glass-card w-full max-w-md p-8 sm:p-10 rounded-2xl text-center relative overflow-hidden">
          {/* Top line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-60" />

          {/* STEP INDICATOR */}
          <div className="flex items-center justify-between mb-10 relative">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2" />

            {steps.map((s) => {
              const isActive = s.id === 2;
              const isDone = s.id < 2;

              return (
                <div key={s.id} className="flex flex-col items-center z-10">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                    ${
                      isDone
                        ? "bg-green-500 text-white"
                        : isActive
                        ? "bg-indigo-500 text-white scale-110"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {isDone ? "✓" : s.id}
                  </div>

                  <span
                    className={`text-xs mt-2 ${
                      isActive
                        ? "text-indigo-400"
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
          <h2 className="text-white text-2xl font-bold mb-2">Verify Code</h2>

          <p className="text-gray-400 text-sm mb-8">
            Enter the 6-digit code sent to your email
          </p>

          {/* OTP */}
          <div className="flex justify-between gap-2 mb-8">
            {[...Array(6)].map((_, i) => (
              <input
                key={i}
                ref={(el) => (inputsRef.current[i] = el)}
                maxLength={1}
                type="text"
                onChange={(e) => handleChange(e, i)}
                className="w-12 h-12 text-center bg-white/5 border border-white/10 rounded-xl text-white text-lg focus:border-indigo-500 focus:outline-none transition"
              />
            ))}
          </div>

          {/* BUTTON */}
          <button
            onClick={goNext}
            className="primary-btn w-full py-3.5 rounded-xl font-semibold"
          >
            Verify
          </button>

          {/* Resend */}
          <p className="text-sm text-gray-400 mt-5">
            Didn’t receive code?{" "}
            <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer">
              Resend
            </span>
          </p>
        </div>
      </main>
    </>
  );
}
