import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <Link href="/" className="text-xl font-semibold">
        Studio Photo
      </Link>

      <nav className="flex gap-6">
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/a-propos">À propos</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
