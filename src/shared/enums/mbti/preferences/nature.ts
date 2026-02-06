import { z } from "zod/mini";

export const ThinkingNature = "t" as const;
export const Thinking = "thinking" as const;
export const FeelingNature = "f" as const;
export const Feeling = "feeling" as const;

export const NaturePreferences = [ThinkingNature, FeelingNature] as const;
export const NatureMeaning = [Thinking, Feeling] as const;
export const natureSchema = z.enum(NaturePreferences);
export const natureMeaningSchema = z.enum(NatureMeaning);

export type Nature = z.infer<typeof natureSchema>;
export type NatureMeaning = z.infer<typeof natureMeaningSchema>;

export const oppositeNatureMap = {
  [ThinkingNature]: FeelingNature,
  [FeelingNature]: ThinkingNature,
} as const;

export const natureToMeaningMap = {
  [ThinkingNature]: Thinking,
  [FeelingNature]: Feeling,
} as const satisfies Record<Nature, NatureMeaning>;

export const meaningToNatureMap = {
  [Thinking]: ThinkingNature,
  [Feeling]: FeelingNature,
} as const satisfies Record<NatureMeaning, Nature>;
