import { z } from "zod/mini";

export const IntuitiveMind = "n" as const;
export const Intuition = "intuition" as const;
export const SensingMind = "s" as const;
export const Sensing = "sensing" as const;

export const MindPreferences = [IntuitiveMind, SensingMind] as const;
export const MindMeaning = [Intuition, Sensing] as const;
export const mindSchema = z.enum(MindPreferences);
export const mindMeaningSchema = z.enum(MindMeaning);

export type Mind = z.infer<typeof mindSchema>;
export type MindMeaning = z.infer<typeof mindMeaningSchema>;

export const oppositeMindMap = {
  [IntuitiveMind]: SensingMind,
  [SensingMind]: IntuitiveMind,
} as const;

export const mindToMeaningMap = {
  [IntuitiveMind]: Intuition,
  [SensingMind]: Sensing,
} as const satisfies Record<Mind, MindMeaning>;

export const meaningToMindMap = {
  [Intuition]: IntuitiveMind,
  [Sensing]: SensingMind,
} as const satisfies Record<MindMeaning, Mind>;
