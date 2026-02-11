import { z } from "zod/mini";
import { EnergyPreferences, type Energy } from "./preferences/energy";
import { IdentityPreferences, type Identity } from "./preferences/identity";
import { MindPreferences, type Mind } from "./preferences/mind";
import { NaturePreferences, type Nature } from "./preferences/nature";
import { TacticsPreferences, type Tactic } from "./preferences/tactics";

export type PersonalityWithoutIdentity = `${Energy}${Mind}${Nature}${Tactic}`;
export const PERSONALITIES_ACRONYMS_WITHOUT_IDENTITY = [
  ...EnergyPreferences.flatMap((e) =>
    MindPreferences.flatMap((m) =>
      NaturePreferences.flatMap((n) =>
        TacticsPreferences.map((t) => `${e}${m}${n}${t}` as const),
      ),
    ),
  ),
] as const satisfies readonly PersonalityWithoutIdentity[];

export type PersonalityWithIdentity =
  `${Energy}${Mind}${Nature}${Tactic}${Identity}`;
export const PERSONALITIES_ACRONYMS_WITH_IDENTITY = [
  ...PERSONALITIES_ACRONYMS_WITHOUT_IDENTITY.flatMap((personality) =>
    IdentityPreferences.map((identity) => `${personality}${identity}` as const),
  ),
] as const satisfies readonly PersonalityWithIdentity[];

export const personalitiesAcronymsSchema = z.union([
  z.enum(PERSONALITIES_ACRONYMS_WITHOUT_IDENTITY),
  z.enum(PERSONALITIES_ACRONYMS_WITH_IDENTITY),
]);
export type Personality = z.infer<typeof personalitiesAcronymsSchema>;

const removeIdentityRegex = new RegExp(IdentityPreferences.join("|"), "g");
export function removeIdentity(
  personality: Personality,
): PersonalityWithoutIdentity {
  return personality.replace(
    removeIdentityRegex,
    "",
  ) as PersonalityWithoutIdentity;
}
