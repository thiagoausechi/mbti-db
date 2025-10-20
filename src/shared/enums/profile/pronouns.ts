import type { LucideProps } from "lucide-react";
import { Ban, Mars, Venus } from "lucide-react";
import type { ComponentType } from "react";
import { z } from "zod/mini";

export const pronouns = ["he", "she", "they"] as const;

export const pronounSchema = z.enum(pronouns);
export type Pronoun = z.infer<typeof pronounSchema>;

export const pronounIconMap: Record<Pronoun, ComponentType<LucideProps>> = {
  he: Mars,
  she: Venus,
  they: Ban,
} as const;
