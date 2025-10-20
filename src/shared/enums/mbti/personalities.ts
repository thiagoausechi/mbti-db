import { z } from "zod/mini";
import type { Energy, Mind, Nature, Tactic } from "./preferences";
import type { Role } from "./roles";

export type Personality = `${Energy}${Mind}${Nature}${Tactic}`;

// prettier-ignore
export const personalitiesAcronyms = [
    "intj", "intp", "entj", "entp", // Analysts
    "infj", "infp", "enfj", "enfp", // Diplomats
    "istj", "isfj", "estj", "esfj", // Sentinels
    "istp", "isfp", "estp", "esfp", // Explorers
] satisfies Personality[];

export const personalitySchema = z.enum(personalitiesAcronyms);

export const personalityRoleMap: Record<Personality, Role> = {
  intj: "analysts",
  intp: "analysts",
  entj: "analysts",
  entp: "analysts",
  infj: "diplomats",
  infp: "diplomats",
  enfj: "diplomats",
  enfp: "diplomats",
  istj: "sentinels",
  isfj: "sentinels",
  estj: "sentinels",
  esfj: "sentinels",
  istp: "explorers",
  isfp: "explorers",
  estp: "explorers",
  esfp: "explorers",
} as const;

export function getPersonalityByPreferences({
  energy,
  mind,
  nature,
  tactic,
}: {
  energy: Energy;
  mind: Mind;
  nature: Nature;
  tactic: Tactic;
}): Personality {
  return `${energy}${mind}${nature}${tactic}`;
}
