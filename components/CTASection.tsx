import React from "react";
import { Button } from "./ui/Button";

export function CTASection(): React.ReactElement {
  return (
    <section id="cta" className="py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          
          {/* Inner Card */}
          <div className="glass-card rounded-3xl p-12 md:p-16 relative overflow-hidden bg-[#0b0b14]">

            {/* Animated Glow */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>

            {/* Content */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Supercharge
              </span>{" "}
              Your Career?
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have already found their dream
              jobs using our AI-powered platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* Primary */}
              <Button className="px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
                Get Started for Free
              </Button>

              {/* Secondary */}
              <Button
                variant="secondary"
                className="px-8 py-4 rounded-xl text-lg font-semibold border border-white/20 hover:bg-white/5 hover:scale-105 transition-all duration-300"
              >
                Talk to Sales
              </Button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}