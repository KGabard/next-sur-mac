"use client";

import { LoaderCircle, Send } from "lucide-react";
import { useActionState } from "react";

import {
  initialContactFormState,
  sendContactMessage,
} from "@/app/contact/actions";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactFormState,
  );

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block font-medium">
          Nom
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-neutral-300 px-4 py-3"
        />

        {state.errors?.name && (
          <p className="mt-2 text-sm text-red-600">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-medium">
          Adresse e-mail
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-neutral-300 px-4 py-3"
        />

        {state.errors?.email && (
          <p className="mt-2 text-sm text-red-600">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block font-medium">
          Objet
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full rounded-xl border border-neutral-300 px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-medium">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          className="w-full resize-y rounded-xl border border-neutral-300 px-4 py-3"
        />

        {state.errors?.message && (
          <p className="mt-2 text-sm text-red-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {/* Honeypot antispam invisible pour un utilisateur normal. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Site internet</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? (
          <>
            <LoaderCircle
              size={18}
              className="animate-spin"
              aria-hidden="true"
            />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Envoyer
          </>
        )}
      </button>

      {state.message && (
        <p
          aria-live="polite"
          className={
            state.status === "success" ? "text-green-700" : "text-red-600"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}