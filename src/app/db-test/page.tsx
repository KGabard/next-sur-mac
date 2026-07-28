import { prisma } from "@/lib/prisma";

export default async function DatabaseTestPage() {
  const contactMessageCount = await prisma.contactMessage.count();

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 text-white">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
          Neon + Prisma
        </p>

        <h1 className="mt-4 text-4xl font-semibold">Connexion réussie</h1>

        <p className="mt-6 text-neutral-300">
          Nombre de messages enregistrés :{" "}
          <strong className="text-white">{contactMessageCount}</strong>
        </p>
      </section>
    </main>
  );
}
