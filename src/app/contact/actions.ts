"use server";

import { z } from "zod";

import { prisma } from "@/lib/prisma";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(100, "Le nom est trop long."),

  email: z.string().trim().email("L’adresse e-mail n’est pas valide.").max(255),

  subject: z.string().trim().max(150, "L’objet est trop long.").optional(),

  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(5000, "Le message est trop long."),

  // Champ invisible utilisé comme protection antispam.
  website: z.string().max(0, "Envoi considéré comme indésirable."),
});

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsedData = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject") || undefined,
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  });

  if (!parsedData.success) {
    const fieldErrors = parsedData.error.flatten().fieldErrors;

    return {
      status: "error",
      message: "Certains champs sont invalides.",
      errors: {
        name: fieldErrors.name,
        email: fieldErrors.email,
        subject: fieldErrors.subject,
        message: fieldErrors.message,
      },
    };
  }

  const { name, email, subject, message } = parsedData.data;

  try {
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject: subject || null,
        message,
      },
    });

    return {
      status: "success",
      message: "Ton message a bien été enregistré.",
    };
  } catch (error) {
    console.error("Erreur lors de l’enregistrement du contact :", error);

    return {
      status: "error",
      message:
        "Une erreur est survenue pendant l’envoi. Réessaie dans quelques instants.",
    };
  }
}
