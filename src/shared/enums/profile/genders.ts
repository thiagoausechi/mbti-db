import { Ban, Mars, Venus } from "lucide-react";
import type { ComponentType } from "react";
import { z } from "zod/mini";

export const genders = ["male", "female", "other"] as const;

export const genderSchema = z.enum(genders);
export type Gender = z.infer<typeof genderSchema>;

export const genderIconMap: Record<Gender, ComponentType> = {
  male: Mars,
  female: Venus,
  other: Ban,
} as const;
