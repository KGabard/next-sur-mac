import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden text-white">
        <Image
          src="/images/hero.jpeg"
          alt="Portrait photographique réalisé en lumière naturelle"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[90%_75%] transition-opacity duration-500"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen flex-col px-6 py-8 sm:px-10 lg:px-16">
          <div className="my-auto max-w-4xl">
            <p className="mb-5 text-sm font-medium tracking-[0.3em] uppercase">
              Portrait · Événement · Reportage
            </p>

            <h1 className="text-5xl leading-[0.95] font-medium tracking-tight sm:text-7xl lg:text-8xl">
              Capturer ce qui mérite de rester.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              Une photographie naturelle et sensible, pensée pour raconter les
              personnes, les lieux et les instants.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/85"
              >
                Découvrir le portfolio
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/50 px-6 py-3 font-medium transition hover:bg-white hover:text-black"
              >
                Prendre contact
              </Link>
            </div>
          </div>

          <a
            href="#featured-projects"
            className="flex w-fit items-center gap-2 text-sm text-white/75"
          >
            Découvrir
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        id="featured-projects"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-10"
      >
        <p className="text-sm tracking-[0.25em] text-neutral-500 uppercase">
          Sélection
        </p>

        <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-6xl">
          Projets récents
        </h2>

        {/* Tu peux remettre ici tes cartes de portfolio existantes. */}
      </section>
    </main>
  );
}
