export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Contact</h1>

      <form className="mt-10 space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block">
            Nom
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border px-4 py-3 text-black"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block">
            Adresse e-mail
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border px-4 py-3 text-black"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full rounded-lg border px-4 py-3 text-black"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-black px-6 py-3 text-white"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}
