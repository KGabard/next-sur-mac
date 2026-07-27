import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <p className="text-sm tracking-[0.25em] text-neutral-500 uppercase">
        Parlons de votre projet
      </p>

      <h1 className="mt-4 text-5xl font-medium tracking-tight">
        Prendre contact
      </h1>

      <p className="mt-6 text-lg leading-8 text-neutral-600">
        Décris-moi ton projet, la date envisagée et le type de prestation
        recherchée.
      </p>

      <div className="mt-12">
        <ContactForm />
      </div>
    </main>
  );
}