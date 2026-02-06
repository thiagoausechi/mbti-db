import { z } from "zod/mini";

export const JudgingTactic = "j" as const;
export const Judging = "judging" as const;
export const PerceivingTactic = "p" as const;
export const Perceiving = "perceiving" as const;

export const TacticsPreferences = [JudgingTactic, PerceivingTactic] as const;
export const TacticsMeaning = [Judging, Perceiving] as const;
export const tacticSchema = z.enum(TacticsPreferences);
export const tacticMeaningSchema = z.enum(TacticsMeaning);

export type Tactic = z.infer<typeof tacticSchema>;
export type TacticMeaning = z.infer<typeof tacticMeaningSchema>;

export const oppositeTacticMap = {
  [JudgingTactic]: PerceivingTactic,
  [PerceivingTactic]: JudgingTactic,
} as const;

export const tacticToMeaningMap = {
  [JudgingTactic]: Judging,
  [PerceivingTactic]: Perceiving,
} as const satisfies Record<Tactic, TacticMeaning>;

export const meaningToTacticMap = {
  [Judging]: JudgingTactic,
  [Perceiving]: PerceivingTactic,
} as const satisfies Record<TacticMeaning, Tactic>;
