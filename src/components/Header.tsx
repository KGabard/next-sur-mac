"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full flex items-center justify-between px-8 py-6 bg-transparent backdrop-blur-sm transition-colors duration-200">
      <Link
        href="/"
        className={`text-xl font-semibold transition text-white hover:text-neutral-200`}
      >
        NATH PHOTO{" "}
      </Link>

      <nav className={`flex gap-6 text-sm transition text-white`}>
        <Link href="/portfolio" className="transition hover:text-current/80">
          Portfolio
        </Link>
        <Link href="/a-propos" className="transition hover:text-current/80">
          À propos
        </Link>
        <Link href="/contact" className="transition hover:text-current/80">
          Contact
        </Link>
      </nav>
    </header>
  );
}
