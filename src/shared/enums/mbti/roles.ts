import { z } from "zod/mini";
import { parsePersonalityPreferences } from "./preferences";
import { IntuitiveMind, SensingMind } from "./preferences/mind";
import { FeelingNature, ThinkingNature } from "./preferences/nature";
import { JudgingTactic, PerceivingTactic } from "./preferences/tactics";

export const Analysts = "analysts" as const;
export const Diplomats = "diplomats" as const;
export const Sentinels = "sentinels" as const;
export const Explorers = "explorers" as const;

export const Roles = [Analysts, Diplomats, Sentinels, Explorers] as const;
export const roleSchema = z.enum(Roles);

export type Role = z.infer<typeof roleSchema>;

export function parseRoleFromPersonality(personality: string): Role {
  const { mind, nature, tactic } = parsePersonalityPreferences(personality);
  switch (mind) {
    case IntuitiveMind: {
      switch (nature) {
        case ThinkingNature:
          return Analysts;
        case FeelingNature:
          return Diplomats;
      }
    }
    case SensingMind: {
      switch (tactic) {
        case JudgingTactic:
          return Sentinels;
        case PerceivingTactic:
          return Explorers;
      }
    }
  }
}
