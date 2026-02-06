import type { Personality } from "../personalities";
import type { Energy } from "./energy";
import type { Identity } from "./identity";
import type { Mind } from "./mind";
import type { Nature } from "./nature";
import type { Tactic } from "./tactics";

export type PersonalityPreferences = {
  energy: Energy;
  mind: Mind;
  nature: Nature;
  tactic: Tactic;
  identity?: Identity;
};
export type IncompletePersonalityPreferences = Partial<PersonalityPreferences>;

export function isCompletePersonalityPreferences(
  preferences: IncompletePersonalityPreferences,
): preferences is PersonalityPreferences {
  return (
    preferences.energy !== undefined &&
    preferences.mind !== undefined &&
    preferences.nature !== undefined &&
    preferences.tactic !== undefined
  );
}

export function buildPersonalityFrom(
  preferences: PersonalityPreferences,
): Personality {
  const { energy, mind, nature, tactic, identity } = preferences;
  return `${energy}${mind}${nature}${tactic}${identity ?? ""}`;
}

export function tryBuildPersonalityFrom(
  preferences: IncompletePersonalityPreferences,
): Personality | undefined {
  if (isCompletePersonalityPreferences(preferences))
    return buildPersonalityFrom(preferences);
}

export function parsePersonalityPreferences(
  personality: string,
): PersonalityPreferences {
  return {
    energy: personality[0] as Energy,
    mind: personality[1] as Mind,
    nature: personality[2] as Nature,
    tactic: personality[3] as Tactic,
    identity:
      personality.length === 6
        ? (personality.substring(4, 6) as Identity)
        : undefined,
  };
}
