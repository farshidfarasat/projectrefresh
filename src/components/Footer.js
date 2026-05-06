import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Insurance & Warranty", href: "/warranty" },
  { label: "Accreditations", href: "/accreditations" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-outline-variant">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        {/* Left — brand */}
        <div>
          <p className="font-bold text-on-surface font-manrope text-body-md">
            Project Refresh
          </p>
          <p className="mt-1 text-label-sm text-on-surface-variant">
            &copy; {year} Project Refresh Ltd. All rights reserved.
          </p>
        </div>

        {/* Right — links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-label-sm text-on-surface-variant hover:text-on-surface transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
