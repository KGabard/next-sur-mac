export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 text-white">
      <section className="max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
          Premier projet Next.js
        </p>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Mon workflow de développement avec Next.js et Vercel est prêt !!
        </h1>

        <p className="mt-6 text-lg leading-8 text-neutral-300">
          Ce projet est développé avec Next.js, React, TypeScript et Tailwind
          CSS depuis mon nouveau MacBook.
        </p>

        <a
          href="https://github.com/KGabard"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
        >
          Voir mon GitHub
        </a>
      </section>
    </main>
  );
}
