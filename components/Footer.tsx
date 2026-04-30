import Link from "next/link";

const footerLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#for-hr", label: "For HR" },
  { href: "#pricing", label: "Pricing" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2026 Masarak. All rights reserved.</p>
        <div className="flex flex-wrap gap-6">
          {footerLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
