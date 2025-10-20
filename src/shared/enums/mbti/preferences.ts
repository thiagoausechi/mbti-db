import { z } from "zod/mini";

export const energies = ["e", "i"] as const;
export const mind = ["s", "n"] as const;
export const nature = ["t", "f"] as const;
export const tactics = ["j", "p"] as const;
export const identities = ["a", "t"] as const;

export const energySchema = z.enum(energies);
export const mindSchema = z.enum(mind);
export const natureSchema = z.enum(nature);
export const tacticSchema = z.enum(tactics);
export const identitySchema = z.enum(identities);

export type Energy = z.infer<typeof energySchema>;
export type Mind = z.infer<typeof mindSchema>;
export type Nature = z.infer<typeof natureSchema>;
export type Tactic = z.infer<typeof tacticSchema>;
export type Identity = z.infer<typeof identitySchema>;
