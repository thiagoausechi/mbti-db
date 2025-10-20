import { z } from "zod/mini";

export const roles = [
  "analysts",
  "diplomats",
  "sentinels",
  "explorers",
] as const;

export const roleSchema = z.enum(roles);
export type Role = z.infer<typeof roleSchema>;
