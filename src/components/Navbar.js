import Link from "next/link";

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#estimator" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-sm border-b border-outline-variant/40">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-base font-bold tracking-tight text-on-surface font-manrope">
          Project Refresh
        </Link>

        {/* Centre nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm text-on-surface-variant hover:text-on-surface transition-colors duration-150 font-inter"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="text-sm font-semibold text-white bg-primary px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors duration-150 font-manrope"
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
