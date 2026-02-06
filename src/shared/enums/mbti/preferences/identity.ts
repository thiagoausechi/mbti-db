import { z } from "zod/mini";

export const AssertiveIdentity = "-a" as const;
export const Assertive = "assertive" as const;
export const TurbulentIdentity = "-t" as const;
export const Turbulent = "turbulent" as const;

export const IdentityPreferences = [
  AssertiveIdentity,
  TurbulentIdentity,
] as const;
export const IdentitiesMeaning = [Assertive, Turbulent] as const;
export const identitySchema = z.enum(IdentityPreferences);
export const identityMeaningSchema = z.enum(IdentitiesMeaning);

export type Identity = z.infer<typeof identitySchema>;
export type IdentityMeaning = z.infer<typeof identityMeaningSchema>;

export const oppositeIdentityMap = {
  [AssertiveIdentity]: TurbulentIdentity,
  [TurbulentIdentity]: AssertiveIdentity,
} as const;

export const identityToMeaningMap = {
  [AssertiveIdentity]: Assertive,
  [TurbulentIdentity]: Turbulent,
} as const satisfies Record<Identity, IdentityMeaning>;

export const meaningToIdentityMap = {
  [Assertive]: AssertiveIdentity,
  [Turbulent]: TurbulentIdentity,
} as const satisfies Record<IdentityMeaning, Identity>;
