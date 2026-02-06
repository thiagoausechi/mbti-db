import { z } from "zod/mini";

export const stackTypes = [
  "dominant",
  "auxiliary",
  "tertiary",
  "inferior",
] as const;

export const stackTypesSchema = z.enum(stackTypes);
export type StackType = z.infer<typeof stackTypesSchema>;
